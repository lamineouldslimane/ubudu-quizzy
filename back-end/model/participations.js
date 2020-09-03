var mongoose = require('mongoose')

var answerSchema = new mongoose.Schema({
  question: String,
  answer: Number
})

var participationSchema = new mongoose.Schema({
  user_id: String,
  quiz_id: String,
  answers: [answerSchema],
  score: Number
})

module.exports = mongoose.model('Participations', participationSchema)