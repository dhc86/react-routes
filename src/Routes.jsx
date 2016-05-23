var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/Main.jsx');
var About = require('./components/About.jsx');
var Info = require('./components/Info.jsx');

var Routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/about" component={About} />
      <Route path="info" component={Info} />
    </Route>
  </Router>
);

module.exports = Routes;
