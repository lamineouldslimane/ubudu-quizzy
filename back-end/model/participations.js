var mongoose = require('mongoose')

var participationSchema = new mongoose.Schema({
  user_id: String,
  quiz_id: String,
  answers: [{ type: Number }],
  score: Number
})

module.exports = mongoose.model('Participations', participationSchema)