const express = require("express")
const next = require("next")
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = process.env.PORT || 5000
const dev = process.env.NODE_DEV !== "production"

const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

const db = mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
})
.then(() => console.log(`Connected to MongoDB`))
.catch(err => console.error(err))

nextApp.prepare().then(() => {
      const app = express()

      const restrictAccess = (req, res, next) => {
            if(!req.isAuthenticated()) {
                  res.redirect("/")
            }
            next()
      }

      const allowAccess = (req, res, next) => {
            if(req.isAuthenticated()) {
                  res.redirect("/jobs")
            }
            next()
      }

      app.use(cors())
      app.use(require("./routes/index"))
      app.use(/^\/$/, allowAccess)
      app.use("/jobs", restrictAccess)
      
      app.get("*", (req, res) => {
            return handle(req, res)
      })

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})