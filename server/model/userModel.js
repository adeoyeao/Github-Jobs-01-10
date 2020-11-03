const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const findOrCreate = require("mongoose-findorcreate")

const UserSchema = mongoose.Schema({
      username: {
            type: String,
            unique: true,
            sparse: true,
      },
      githubId : {
            type: String
      }
})

UserSchema.plugin(passportLocalMongoose)
UserSchema.plugin(findOrCreate)

module.exports = mongoose.model("user", UserSchema)