const express = require("express")
const passport = require("passport")
const bodyParser = require("body-parser")
const session = require("express-session")
const https = require("https")
const GitHubStrategy = require("passport-github2").Strategy
const User = require("../model/userModel")

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json())

router.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: ({maxAge: 604800000})
}))

router.use(passport.initialize())
router.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
            done(err, user)
      })
})

passport.use(new GitHubStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callback: "http://githubjobs-dev.herokuapp.com/auth/github/jobs"
},
(accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ githubId: profile.id }, (err, user) => {
            return done(err, user)
      })
}))

router.get("/auth/github", passport.authenticate("github", { scope: ["user: email"]}))

router.get("/auth/github/jobs",
passport.authenticate("github", { failureRedirect: "/" }),
(req, res) => {res.redirect("/jobs")})

router.post("/register", (req, res) => {
      User.register({username: req.body.username}, req.body.password, (err, user) => {
            err ? (console.error(err), res.json({message: "Registration Failed"})) :
            passport.authenticate("local")(req, res, () => {
                  res.json({message: "Registration Succesful"})
            })
      })
})

router.post("/login", (req, res) => {
      const user = new User({
            username: req.body.username,
            password: req.body.password
      })

      req.login(user, err => {
            err ? (console.error(err), res.json({message: "Login Failed"})) :
            passport.authenticate("local")(req, res, () => {
                  res.json({message: "Login Successful"})
            })
      })
})

router.get("/logout", (req, res) => {
      req.logout()
      res.end()
})

router.post("/search", (req, res) => {
      const description = req.body.description
      const location = req.body.location
      const fullTime = req.body.fullTime

      const url = `https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${location}`

      https.get(url, response => {
            let data = ""
            response.on("data", chunk => data += chunk)
            response.on("end", () => {
                  let jobsData = JSON.parse(data)
                  res.send(jobsData)
            })
      })
})

module.exports = router