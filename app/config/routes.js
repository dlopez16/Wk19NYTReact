var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;

var NytReact = require('../nytreact');
var Main = require('../Components/Main');
var Saved = require('../Components/Saved');
var Search = require('../Components/Search');

module.exports = (
		<Route path=/ component={NytReact}>

			<Route path='Main' component={Main} />
			<Route path='Saved' component={Saved} />
			<Route path='Search' component={Search} />

		</Route>
	);