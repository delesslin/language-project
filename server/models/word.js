const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    languageEntry: {type: String, required: true},
    pronunciation: [String],
    alternative_spellings: [String],
    translations: [String],
    images: [String],
    recordings: [String],
    tags: [String],
    notes: [String]
  });

//   const Word = mongoose.model("Word", wordSchema);
  module.exports = mongoose.model("Word", wordSchema);