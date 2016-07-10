import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'


const DayView = React.createClass({
	
	// getInitialState: function(){
	// 	return {
	// 		reminder: ''
	// 	}
	// },

	render: function(){
		console.log(this)
		return (
			<div id="mainDayContainer">
				<Header />
				<DayContainer calMod={this.props.calColl} />
			</div>
			)
	}
})

const Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Current Day</h1>
				<input type="text" placeholder="reminder" />
			</header>
			)
	}
})


const DayContainer = React.createClass({
	// console.log(this)
	render: function(){
		return (
			<div></div>
		)
	}
})




export default DayView