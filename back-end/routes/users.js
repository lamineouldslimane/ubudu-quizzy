var express = require('express');
var router = express.Router();
var passport = require('passport')
var Users = require('../model/users')
var jwt = require('jsonwebtoken')
var jwtSecret = require('../config/jwt')

/* Register user. */
router.post('/register', function (req, res, next) {
  passport.authenticate('register', function (err, user, info) {
    // If there's an error
    if (err) {
      console.log(err);
    }

    // If the error message isn't undefined
    if (info) {
      console.log({ error: info.message });
      res.status(401).send(info.message);
    }
    else {
      req.logIn(user, function (error) {
        console.log('Registered !')

        var headers = { 'Content-Type': 'application/json' }

        res.set(headers).status(201).send(JSON.stringify(user))
      })
    }
  })(req, res, next);
});

/* Sign in user. */
router.post('/login', function (req, res, next) {
  passport.authenticate('login', (err, users, info) => {

    // If there's an error
    if (err) {
      console.error(`error ${err}`);
    }

    // If an error message exists
    if (info !== undefined) {
      console.error(info.message);

      // Handle status codes depending on message
      if (info.message === "Nom d'utilisateur incorrect") {
        res.status(401).send(info.message);
      }
      else {
        res.status(403).send(info.message);
      }
    }

    // If everything is fine
    else {
      req.logIn(users, { session: false }, () => {
        Users.findOne({ username: req.body.username }, function (err, user) {

          // Internal server Error
          if (err) {
            res.status(500).send()
          }

          // Sign user
          var token = jwt.sign({ _id: user._id }, jwtSecret.secret, {
            expiresIn: 60 * 60 * 60,
          });

          // Return user info and token to the client
          var headers = { 'Content-Type': 'application/json' }
          res.set(headers).status(200).send({
            auth: true,
            token,
            user
          });
        });
      });
    }
  })(req, res, next);
});

module.exports = router;
