import React, { Component } from 'react';
import { Spin, Button } from 'antd';
import moment from 'moment';
import classnames from 'classnames';
import { Ctg as L } from '@lianmed/lmg';

import styles from './CurveChart.less';

class CurveChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  switchFullscreen = () => {

  };

  render() {
    const {
      selected,
      dataSource,
      spinning,
      isFullscreen,
    } = this.props;
    const { id, ctgexam } = selected;
    return (
      <div className={classnames([styles.wrapper], { [styles.fullscreen]: isFullscreen })}>
        {/* <h2>电脑胎儿监护图</h2> */}
        <div className={styles.header}>
          <div>
            <span>
              档案号：
              <span className={styles.var} style={{ marginRight: '12px' }}>
                {ctgexam && ctgexam.note}
              </span>
            </span>
          </div>
          <div>
            监护时间：
            <span style={{ marginRight: '12px', color: 'rgba(0, 0, 0, 0.85)' }}>
              {ctgexam && ctgexam.startTime
                ? moment(ctgexam.startTime).format('YYYY-MM-DD HH:mm:ss')
                : ' '
              }
              {' '}
              ~
              {' '}
              {ctgexam && ctgexam.endTime
                ? moment(ctgexam.endTime).format('YYYY-MM-DD HH:mm:ss')
                : ' '
              }
            </span>
            <Button
              type="link"
              icon={isFullscreen ? 'fullscreen-exit' : 'fullscreen'}
              title={isFullscreen ? '最小化' : '最大化'}
              size={isFullscreen ? 'large' : 'default'}
              onClick={this.switchFullscreen}
            />
          </div>
        </div>
        <Spin
          wrapperClassName={styles.chart}
          spinning={spinning}
        >
          <L suitType={1} data={dataSource}></L>
        </Spin>
      </div>
    );
  }
}

export default CurveChart;
