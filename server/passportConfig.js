// const db = require("./db");
// const bcrypt = require("bcrypt");
// const localStrategy = require("passport-local").Strategy;

// module.exports = function (passport) {
//   passport.use(
//     new localStrategy((username, password, done) => {
//       const query = "SELECT * FROM remi_clothes.register1 where username = ?";
//       db.query(query, [username], (err, result) => {
//         if (err) {
//           throw err;
//         }
//         if (result.length === 0) {
//           return done(null, false);
//         }
//         bcrypt.compare(password, result[0].password, (err, response) => {
//           if (err) {
//             throw err;
//           }
//           if (response === true) {
//             return done(null, result[0]);
//           } else {
//             return done(null, false);
//           }
//         });
//       });
//     })
//   );
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
//   passport.deserializeUser((id, done) => {
//     const query = "SELECT * FROM remi_clothes.register1 where id=?";
//     db.query(query, [id], (err, result) => {
//       if (err) {
//         throw err;
//       }
//       const userinfo = {
//         id: result[0].id,
//         username: result[0].username,
//       };
//       done(null, userinfo);
//     });
//   });
// };

const db = require('./db');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            const query = "SELECT * FROM remi_clothes.register1 where username = ?";
            db.query(query, [username] ,(err, rows) => {
                if(err)throw err;  
                if(rows.length === 0) {
                    return done(null, false);
                }
                bcrypt.compare(password, rows[0].password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, rows[0]);
                    } 
                    else {
                        return done(null, false);
                    }
                })
            })
        }))


    passport.serializeUser((user, done) => {
        done(null, user.id);
    })


    passport.deserializeUser((id, done) => {
        const query = "SELECT * FROM remi_clothes.register1 where id = ?";
        db.query(query, [id] ,(err, rows) => {
            if(err)throw err;  
            const userInfo = {
                id: rows[0].id,
                username: rows[0].username
            }
            done(null, userInfo);
        })
    }) 
}