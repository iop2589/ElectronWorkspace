import React from 'react';
import ReactDOM from 'react-dom';
class Contents extends React.Component {
  render() {
    return <div><font size="10">Hello {this.props.name}</font></div>;
  }
}

ReactDOM.render(
  <Contents name={"React"} />,
  document.getElementById('contents')
);