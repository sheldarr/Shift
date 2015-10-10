'use strict'

var React = require('react');
var Panel = require('react-bootstrap').Panel;
var NavigationBar = require('./navigationBar');
var SearchBar = require('./SearchBar');

var ProductsList = require('./productsList');

var products = [
	{
		id: 1,
		name: 'Woda',
		kcal: 1024
	}, {
		id: 2,
		name: 'Jajka',
		kcal: 1024
	}, {
		id: 3,
		name: 'Mleko',
		kcal: 1024
	}
];

module.exports = React.createClass({
    displayName: 'Shift',
    render: function() {
        return (
        	<div>
	        	<NavigationBar />
	        	<div className="row" style={{marginTop: 100}}>
	        		<div className='col-md-6 col-md-offset-3'>
			        	<Panel>
			        		<SearchBar />
			        		<ProductsList products={products} />
			        	</Panel>
		        	</div>
	        	</div>
        	</div>
    	)
    }
});