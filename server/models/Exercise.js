const mongoose = require('mongoose')

const exerciseSchema = {
  title: String,
  description: String,
  image: String,
  isLiked: Boolean,
}

module.exports = mongoose.model('Exercise', exerciseSchema)
