import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import CalendarView from './CalendarView.js'

const app = function() {

const CalendarModel = Backbone.Model.extend({

})

const CalendarCollection = Backbone.Collection.extend({
	model: CalendarModel
})

const Router = Backbone.Router.extend({
	routes: {
		"day/:day": "goToDay",
		"home": "goHome",
		"*catchall": "routeHome"
	},

	goHome: function(){
		var calColl = new CalendarCollection()
		ReactDOM.render(<CalendarView calColl={calColl} />,document.querySelector('.container'))
	},

	routeHome: function(){
		location.hash = "home"
	},

	initialize: function(){
		Backbone.history.start()
	}
})

new Router()

}

app()