const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  fullName: String,
  testType: String,
  address: String,
  date: String,
  contact: String,
});

module.exports = mongoose.model("LabTest", labTestSchema);
