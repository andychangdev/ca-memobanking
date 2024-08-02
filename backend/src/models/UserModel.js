const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel