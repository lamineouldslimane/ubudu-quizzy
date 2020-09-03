// Passport imports
var passport = require('passport');
var passportJwt = require('passport-jwt')
var JWTstrategy = passportJwt.Strategy;
var ExtractJWT = passportJwt.ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
var Users = require('../model/users')

// Jwt secret import
var jwtSecret = require('./jwt');

// Bcrypt for hash
var bcrypt = require('bcrypt');

// Bcrypt configuration
var salt_rounds = 14;

// Register auth strategy
passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    function (req, username, password, done) {
      try {
        Users.findOne({
          username
        },
          function (err, user) {
            // If a user is found, throw an error.
            if (!err && user) {
              console.log('The Username is already taken');

              // Error
              return done(null, false, {
                message: "Le nom d'utilisateur est déjà pris.",
              });
            }

            // Hashing the password before storing it
            bcrypt.hash(password, salt_rounds)
              .then(
                function (hashedPassword) {
                  Users.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    username,
                    password: hashedPassword,
                  },
                    function (err, user) {
                      if (err) {
                        console.log(err)

                        // Internal server error
                        return done(null, false, {
                          message: "Une erreur est survenue, réessayez plus tard."
                        })
                      }

                      // Log user
                      console.log('Created : ');
                      console.log(user)

                      // Success
                      return done(null, user)
                    });
                });
          });
      }
      catch (err) {
        return done(err);
      }
    },
  ),
);

// Login auth strategy
passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    function (username, password, done) {
      try {
        Users.findOne({ username },
          function (err, user) {
            console.log(user)
            console.log(err)

            if (err) return done(err)

            if (!user) {
              return done(null, false, { message: "Nom d'utilisateur incorrect" });
            }

            bcrypt.compare(password, user.password)
              .then(function (response) {
                if (response !== true) {
                  console.log('passwords do not match');
                  return done(null, false, { message: 'Mot de passe incorrect' });
                }

                console.log('Authentified !');
                return done(null, user);
              });
          });
      }
      catch (err) {
        done(err);
      }
    },
  ),
);

var opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

// JWT AUTHENTICATION 
passport.use(
  'jwt',
  new JWTstrategy(opts, function (jwt_payload, done) {
    try {
      Users.findOne({
        _id: jwt_payload.id,
      },
        function (err, user) {
          if (!err) {
            console.log('user found in db in passport');
            console.log(user)

            // Pass user to express
            done(null, user);
          }
          else {
            console.log(err);

            // Return an error
            done(null, false);
          }
        }
      );
    } catch (err) {
      done(err);
    }
  }),
);