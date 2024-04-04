const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
shoe_type: String,
shoe_brand: String,
cost: Number
})
module.exports = mongoose.model("shoe",
shoeSchema)