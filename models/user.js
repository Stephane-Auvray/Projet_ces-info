const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    hash: String,
    first_name: String,
    last_name: String,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model("User", UserSchema)
