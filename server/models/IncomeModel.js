//model folder is used for schemas
const mongoose = require("mongoose");

//Creating schema for income
const incomeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    maxLength: 20,
    validate: {
      validator: function(v) {
        return v >= 0;
      },
    },
  },
  type: {
    type: String,
    default:"income"
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20
  },
},
{
    timestamps: true
}); 

//Defining  product model
exports.Income = mongoose.model('Income', incomeSchema);