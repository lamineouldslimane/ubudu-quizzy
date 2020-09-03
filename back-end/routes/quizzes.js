var express = require('express');
var router = express.Router();
var passport = require('passport')
var Quizzes = require('../model/quizzes')
var Participations = require('../model/participations')

/* Verify quiz answers. */
router.post('/verify', function (req, res, next) {
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    // If there's an error
    if (err) {
      console.log(err);
    }

    // If an error message exists
    if (info) {
      console.error(info.message);

      // Unauthorized
      if (info.message) {
        res.status(401).send(info.message);
      }
    }

    else {
      var quiz_id = req.body.quiz_id
      var answers = req.body.answers

      console.log(req.body)

      if (!quiz_id || !answers || answers.length === 0) {
        res.status(400).send("Les données envoyées sont invalides.")
      }

      // ----- Callback hell ahead... this is why i don't like ES5 -------
      try {
        // Get quiz answers 
        Quizzes.findOne({
          _id: quiz_id
        },
          function (err, quiz) {
            if (err) throw new Error(err)

            if (quiz) {
              var questions = quiz.questions
              var score = 0

              // Calculate the score
              answers.map(function (answer, i) {
                console.log(answer + ' vs ' + questions[i].correctAnswer)

                if (answer !== questions[i].correctAnswer) {
                  score = score - 1
                  return
                }

                score = score + 3
              })

              // Save participation into database
              Participations.create({
                user_id: user._id,
                quiz_id,
                answers,
                score
              },
                function (err, participation) {
                  if (err) throw new Error(err)

                  var headers = { 'Content-Type': 'application/json' }
                  res.status(201).set(headers).send(JSON.stringify({ success: true, score }))
                })
            }
          })
      } catch (error) {
        res.status(500).send(error.message)
      }
    }
  })(req, res, next);
});

/* Get quiz (only one for now). */
router.get('/', function (req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, users, info) => {

    // If there's an error
    if (err) {
      console.error(`error ${err}`);
    }

    // If an error message exists
    if (info) {
      console.error(info.message);

      // Unauthorized
      if (info.message) {
        res.status(401).send(info.message);
      }
    }

    // If user is authentified
    else {
      try {
        Quizzes.findOne({}, function (err, quiz) {
          console.log({ err })

          if (err) throw new Error(err)

          if (!quiz) {
            var quizObj = require('../config/quiz.json')
            Quizzes.create(quizObj, function (err, quiz) {
              if (err) throw new Error(err)

              if (quiz) {
                var headers = { 'Content-Type': 'application/json' }
                res.status(200).set(headers).send(JSON.stringify(quiz))
              }
            })
          }

          else {
            var headers = { 'Content-Type': 'application/json' }
            res.status(200).set(headers).send(JSON.stringify(quiz))
          }
        })
      }
      catch (error) {
        res.status(500).send(error.message)
      }
    }
  })(req, res, next);
});

module.exports = router;
