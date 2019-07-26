/**
 * Category model
 */
 
const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, uppercase: true, required: true },
  description: { type: String},
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
