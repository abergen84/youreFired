import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import CalendarView from './CalendarView.js'
import DayView from './DayView.js'

const app = function() {

const CalendarModel = Backbone.Model.extend({

})

const CalendarCollection = Backbone.Collection.extend({
	model: CalendarModel
})

var calColl = new CalendarCollection()

const Router = Backbone.Router.extend({
	routes: {
		"day/:day": "goToDay",
		"calendar": "goHome",
		"*catchall": "routeHome"
	},

	goToDay: function(){
		// var calModel = new CalendarModel()
		ReactDOM.render(<DayView calColl={calColl} />, document.querySelector('.container'))
	},

	goHome: function(){
		
		ReactDOM.render(<CalendarView calColl={calColl} />,document.querySelector('.container'))
	},

	routeHome: function(){
		location.hash = "calendar"
	},

	initialize: function(){
		Backbone.history.start()
	}
})

new Router()

}

app()