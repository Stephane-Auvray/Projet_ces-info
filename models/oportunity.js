const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OportunitySchema = new Schema({
  email: String,
  name: String,
  subject: String,
  content: String,
  file_data: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("Oportunity", OportunitySchema);
