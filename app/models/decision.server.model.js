'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Decision Schema
 */
var DecisionSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Decision name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
	/*,
	// description: {
	// 	type: Text,
	// 	default: ''
	// },
	*/
});

mongoose.model('Decision', DecisionSchema);