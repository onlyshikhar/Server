let mongoose = require ('mongoose')

let Schema= mongoose.Schema
 
let NewsSchema = new Schema({
	title:{type:String,unique:true},
	description:String,
	urlToImage:String
})

module.exports=mongoose.model('News',NewsSchema);
