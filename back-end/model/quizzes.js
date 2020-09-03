var mongoose = require('mongoose')

// Note : in a real world app with more than one quiz, 
// the questions would have their own collection, for reusability and shuffling
var questionSchema = new mongoose.Schema({
  question: String,
  answers: [{ type: String }],
  correctAnswer: Number
})

var quizSchema = new mongoose.Schema({
  questions: [questionSchema]
})

module.exports = mongoose.model('Quizzes', quizSchema)