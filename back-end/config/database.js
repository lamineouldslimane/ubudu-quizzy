var mongoose = require('mongoose')

// Again, if it was a real app, this should be an environment variable.
var database_url = 'mongodb+srv://default_user:lamineoulds123@cluster0.4iui1.mongodb.net/quizzy?retryWrites=true&w=majority'

// Connect to database
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connecting to database... ')

// Export database connection
const db = mongoose.connection;
module.exports = db 