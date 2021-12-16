const mongoose = require('mongoose')
const loveSchema = mongoose.Schema({
  _id: {type: mongoose.Schema.ObjectId, auto: true},
	itemId: {type:String },
	text: {type:String, default:''},
  isDone: {type: Boolean, default: false},
	schema: {type:String, default:'love', immutable:true},
  nameone:{type: String},
  nametwo:{type:String},
  Compatible:{type:Number},
})

const love = mongoose.model('love', loveSchema)

module.exports = love
