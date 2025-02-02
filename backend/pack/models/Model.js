const {  mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Model=mongoose.model('ecommerce',PostSchema)

module.exports=Model;