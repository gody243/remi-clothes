
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const db = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser("mySecretKey"));

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.get("/", (req, res) => {
  res.send("Hella");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const query =
    "INSERT INTO register1 (`username`,`email`,`password`) VALUES (?,?,?)";
  const query2 = "SELECT * FROM register1 WHERE username = ?";

  db.query(query2, [username], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send({ message: "username already exists" });
    }
    if (result.length === 0) {
      const hashPassword = bcrypt.hashSync(password, 10);
      db.query(query, [username, email, hashPassword], (err, result) => {
        if (err) {
          throw err;
        }
        res.send({ message: "User created" });
      });
    }
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (!user) {
      res.send("User not found");
    }
    if (user) {
      req.login(user, (err) => {
        if (err) {
          console.log(err);
        }
        res.send("User logged in");
        console.log(user);
      });
    }
  })(req, res, next);
});

app.get("/getUser", (req, res) => {
  res.send(req.user);
});
app.listen(3001, () => {
  console.log("listening on port 3001");
});
