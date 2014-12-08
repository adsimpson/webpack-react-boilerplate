var React = require('react');
var {Route} = require('react-router');
var App = require('./ui/App');

module.exports = (
  <Route path='/' handler={App}>
  </Route>
);