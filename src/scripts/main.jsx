'use strict';

var React = require('react/addons');
var Router = require('react-router');
var routes = require('./routes');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../styles/main.less');

// Run router
Router.run(routes, function (Handler, state) {
  React.render(<Handler/>, document.body); // jshint ignore:line
});