import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const CalendarView = React.createClass({
	
	getInitialState: function(){
		return {
			currentday: ''
		}
	},

	componentWillMount: function(){
		var self = this
		Backbone.Events.on('chooseDay', function(day){
			self.setState({
				currentday: day
			})
		})
		console.log("setting the day:", this.state)
	},

	render: function(){
		console.log("render top level", this)
		return (
			<div id="mainContainer">
				<Header />
				<CalendarContainer dayId={this.state.currentday} calColl={this.props.calColl} />
			</div>
			)
	}
})


const Header = React.createClass({
	render: function(){
		return (
			<header id="mainheader">
				<h1>Take Notes</h1>
			</header>
			)
	}
})

const CalendarContainer = React.createClass({
	
	_populateCalendar: function(array){
		// var my_array = 
		for(var i = 1; i < 32; i++){
			array.push(<Days dayId={this.props.dayId} day={i} />)
		}
		return array
	},

	render: function(){
		console.log(this)
		return (
			<div id="calendarContainer">
				{this._populateCalendar(this.props.calColl.models)}
			</div>
			)
	}
})

const Days = React.createClass({
	
	_handleClick: function(){
		console.log("click", this.props)
		// location.hash = `day/${this.props.day}`
		Backbone.Events.trigger('chooseDay', this.props.day)
	},

	render: function(){
		// console.log(this)
		var active = "days"
		if(this.props.dayId === this.props.day){
			active = "days active"
		}
		return (
			<div className={active} id={this.props.day} onClick={this._handleClick}>
				<p>{this.props.day}</p>
			</div>
		)
	}
})








export default CalendarView