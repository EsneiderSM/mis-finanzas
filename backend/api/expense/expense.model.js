/**
 * Expense model
 */
 
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  description: { type: String },
  category: {type: String, required: true },
  value:{ type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
