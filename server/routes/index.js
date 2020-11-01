const express = require("express")
const passport = require("passport")
const bodyParser = require("body-parser")
const session = require("express-session")
const GitHubStrategy = require("passport-github2").Strategy
const userModel = require("../model/userModel")

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

passport.use(userModel.createStrategy())
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
      userModel.findById(id, (err, user) => {
            done(err, user)
      })
})

passport.use(new GitHubStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callback: "https://localhost:5000/auth/gitub/jobs"
},
(accessToken, refreshToken, profile, done) => {
      userModel.findOrCreate({ githubId: profile.id }, (err, user) => {
            return done(err, user)
      })
}))

router.get("/auth/github", passport.authenticate("github", { scope: ["user: email"]}))

router.get("/auth/github/jobs",
passport.authenticate("github", { failureRedirect: "/" }),
(req, res) => {res.redirect("/jobs")})

router.post("/register", (req, res) => {
      userModel.register({email: req.body.email}, req.body.password, (err, user) => {
            err ? (console.error(err), res.json({message: "Registration Failed"})) :
            passport.authenticate("local")(req, res, () => res.redirect("/jobs"))
      })
})

router.post("/login", (req, res) => {
      const user = new userModel({
            email: req.body.email,
            password: req.body.password
      })

      req.login(user, err => {
            err ? (console.error(err), res.json({message: "Login Failed"})) :
            passport.authenticate("local")(req, res, () => res.redirect("/jobs"))
      })
})

router.get("/logout", (req, res) => {
      req.logout()
      res.redirect("/")
})

module.exports = router