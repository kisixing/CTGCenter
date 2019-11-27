import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Loader from '../../components/Loader';
import BasicLayout from './BasicLayout';

class App extends PureComponent {
  state = { spinning: true };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ spinning: false });
    }, 1500);
  }
  render() {
    const { spinning } = this.state;
    return (
      <Fragment>
        <Loader fullScreen spinning={spinning} />
        <BasicLayout />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
