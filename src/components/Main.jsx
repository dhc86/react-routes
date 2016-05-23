var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Welcome to Diego's React Page!</h1>
        {this.props.children}
        <h1>fotter part here</h1>
      </div>
    );
  }
});

module.exports = Main;
