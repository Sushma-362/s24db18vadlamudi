const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
shoe_type: String,
shoe_brand: {
    type: String,
    minlength: 1,
    maxlength: 10
},
cost: {
    type:Number,
    min : 1,
    max : 362,
}
})
module.exports = mongoose.model("shoe",
shoeSchema)