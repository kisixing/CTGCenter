import React, { Component } from 'react';
import { Pagination, Button, Spin, Empty, Icon } from "antd";
import { Document, Page } from "react-pdf";
import classnames from "classnames";
import request from "../../utils/request";

const COEFFICIENT = 240;

export default class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pdfBase64: null,
      isFullpage: false,
      numPages: 0,
      pageNumber: 1,
      width: "initial",
      height: 286
    };
  }

  startClick = (locked, onLockChange, lock) => {
    const bool = !locked;
    onLockChange(bool);
    lock(bool);
  }

  endClick = (customizable, onCustomizableChange, customize) => {
    const bool = !customizable;
    onCustomizableChange(bool);
    customize(bool);
  }

  fetchPDFbase64 = () => {
    const _this = this;
    const { docId, start, end } = this.props;
    request
      .post("/ctg-exams-pdf", {
        docid: docId,
        start: start,
        end: end
      })
      .then(function(response) {
        const pdfBase64 = `data:application/pdf;base64,${response.data.pdfdata}`;
        _this.setState({ pdfBase64 });
      })
      .catch(function(error) {
        console.log("/ctg-exams-pdf", error);
      });
  }

  largen = () => {
    const { height, width } = this.props.getBodyHeight();
    this.setState({
      isFullpage: true,
      width,
      height: height - 36,
    });
  }

  shrink = () => {
    this.setState({
      isFullpage: false,
      width: "initial",
      height: 286
    });
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  onChangePage = page => {
    this.setState({ pageNumber: page });
  }

  preivewContent = () => {
    const { pdfBase64, isFullpage, numPages, pageNumber, width, height } = this.state;
    const content = pdfBase64 ? (
      <div
        className={classnames(styles.pdfWrapper, {
          [styles.fullPage]: isFullpage
        })}
        style={{ width  }}
      >
        <Document
          loading={<Spin style={{ margin: "100px 0" }} />}
          onLoadSuccess={this.onDocumentLoad}
          file={pdfBase64}
          renderMode="canvas"
          options={{
            cMapUrl: "pdfjs-dist/cmaps/",
            cMapPacked: true
          }}
        >
          <Page
            pageNumber={pageNumber}
            scale={1}
            height={height}
          />
        </Document>
        <Pagination
          total={numPages}
          showTotal={total => `共 ${total} 页`}
          current={pageNumber}
          pageSize={1}
          size="small"
          onChange={this.onChangePage}
        />
        <Button
          type="link"
          className={styles.icon}
          onClick={() => {
            if (isFullpage) {
              this.shrink();
            } else {
              this.largen();
            }
          }}
        >
          <Icon
            title={isFullpage ? "缩小" : "全屏"}
            type={isFullpage ? "fullscreen-exit" : "fullscreen"}
          />
        </Button>
      </div>
    ) : (
      <Empty
        description="暂无数据"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          margin: 0
        }}
      />
    );
    return (
      <div className={styles.wrapper} >
        {content}
      </div >
    )
  }

  render() {
    const {
      locked,
      onLockChange,
      lock,
      onCustomizableChange,
      customizable,
      customize,
      start,
      end
    } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.left}>{this.preivewContent()}</div>
        <div className={styles.right}>
          <Button
            type={locked ? "danger" : "primary"}
            className={styles.floatButton}
            onClick={() => this.startClick(locked, onLockChange, lock)}
          >
            {locked ? "重置" : "确定"}
          </Button>
          {locked ? (
            <Button
              type="primary"
              className={styles.floatButton}
              style={{ top: 60 }}
              onClick={() =>
                this.endClick(customizable, onCustomizableChange, customize)
              }
            >
              {customizable ? "确定" : "选择"}
            </Button>
          ) : null}

          <div>开始时间：{(start / COEFFICIENT).toFixed(1)} 分</div>
          <div>结束时间：{(end / COEFFICIENT).toFixed(1)} 分</div>
          <div>时长：{((end - start) / COEFFICIENT).toFixed(1)} 分</div>
          <div className={styles.buttons}>
            <Button
              disabled={!locked}
              type="primary"
              onClick={this.fetchPDFbase64}
            >
              生成
            </Button>
            <Button disabled>下载PDF</Button>
          </div>
        </div>
      </div>
    );
  }
}
