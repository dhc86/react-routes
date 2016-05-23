var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var Main = require('./components/Main.jsx');
var About = require('./components/About.jsx');
var Info = require('./components/Info.jsx');
var Contact = require('./components/Contact.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About} />
      <Route path="info" component={Info} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

module.exports = Routes;
