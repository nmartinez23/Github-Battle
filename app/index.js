var React = require('react');
var ReactDOM = require('react-dom');

var HelloWoyld = React.createClass({
  render: function () {
    return (
      <div> Hello Woyld </div>
    )
  }
});

ReactDOM.render(
  <HelloWoyld />,
  document.getElementById('app')
);
