/**
 * header 孕产妇信息栏
 * 就诊号、姓名、年龄、孕周、孕/产、医生
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import request from '../utils/request';
import { getUrlParam } from "../utils";

import styles from './Header.module.less';

export default class Header extends PureComponent {
  static propTypes = {
    dataSource: PropTypes.object
  }
0
  static defaultProps = {
    dataSource: {}
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  fetchPregnancy = () => {
    // TODO http请求
    const _this = this;
    const ID = getUrlParam("pregnancyId"); // 孕册id
    request
      .get(`/pregnancies/${ID}`)
      .then(function(response) {
        const dataSource = response.data;
        _this.setState({ dataSource });
      })
      .catch(function(error) {
        console.log("/pregnancies/id", error);
      });
  }

  render() {
    const { dataSource } = this.props;
    const { inpatientNO, name, age, gestationalWeek, gravidity, parity, doctor } = dataSource;
    return (
      <div className={styles.wrapper}>
        就诊号：<span>{inpatientNO}</span>
        姓名：<span>{name}</span>
        年龄：<span>{age}</span>
        孕周：<span>{gestationalWeek}</span>
        孕/产：
        <span>{!gravidity && !parity ? "" : `${gravidity} / ${parity}`}</span>
        医生：<span>{doctor}</span>
      </div>
    );
  }
}
