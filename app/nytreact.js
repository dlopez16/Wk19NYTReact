var React = require('react');
var ReactDOM = require('react-dom');
// var Router = require('react-router');



var Main = require('./Components/Main.js');
var Saved = require('./Components/Saved.js');
var Search = require('./Components/Search.js');


var Routes = require('./config/routes')



ReactDOM.render(

<Router>{Routes}</Router>,
	document.getElementById('app')
)