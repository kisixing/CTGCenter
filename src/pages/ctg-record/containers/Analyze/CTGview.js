import React, { Component } from "react";
import { Spin } from "antd";
import { Ctg as CTG } from "@lianmed/lmg";
import styles from "./index.module.less";

class CTGview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null
    };
  }

  componentDidMount() {
    const _this = this;
    const { dataSource } = this.props;
    setTimeout(() => {
      _this.setState({ dataSource });
    }, 1000);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <Spin wrapperClassName={styles.wrapper} spinning={!dataSource}>
        <CTG suitType={2} data={dataSource}></CTG>
      </Spin>
    );
  }
}

export default CTGview;
