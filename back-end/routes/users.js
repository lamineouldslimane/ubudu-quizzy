var express = require('express');
var router = express.Router();
var passport = require('passport')
var Users = require('../model/users')

// Bcrypt for hash
var bcrypt = require('bcrypt');

// Bcrypt configuration
var salt_rounds = 14;

/* Register user. */
router.post('/', function (req, res, next) {
  passport.authenticate('register', { session: false }, function (err, user, info) {
    // If there's an error
    if (err) {
      console.log(err);
    }

    // If the error message isn't undefined
    if (info) {
      console.log(info.message);
      res.status(401).send(info.message);
    }

    else {
      req.logIn(user, function (error) {

        if (error) {
          console.log(error)
          res.status(500).send()
        }

        // Hashing the password before storing it
        bcrypt.hash(user.password, salt_rounds)
          .then(
            function (hashedPassword) {
              Users.create({
                ...req.body,
                password: hashedPassword,
              },
                function (err, user) {
                  if (err) {
                    console.log(err)

                    // Internal server error
                    res.status(500).send()
                  }

                  // Log user
                  console.log('Created : ');
                  console.log(user)

                  // Success
                  res.status(201)
                    .send(user)
                });
            });
      })
    }
  })(req, res, next);

});

module.exports = router;
