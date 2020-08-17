const mongoose = require('mongoose');


const wordSchema = new mongoose.Schema({
    language_entry: {type: String, required: true, unique: true},
    pronunciation: [String],
    alternative_spellings: [String],
    translations: [String],
    tags: [String],
    images: [String],
    recordings: [String],
    notes: [String]
  });

//   const Word = mongoose.model("Word", wordSchema);
  module.exports = mongoose.model("Word", wordSchema);