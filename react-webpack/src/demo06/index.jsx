import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var data = 123;

class MyTitle extends React.Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // }; 静态属性 还处在 stage-3 阶段，preset-env 不会转换它
  render() {
    return <h1> {this.props.title} </h1>;
  }
}

MyTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

ReactDOM.render(<MyTitle title={data} />, document.getElementById('example'));
