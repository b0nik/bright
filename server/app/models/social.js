const Schema = api.mongoose.Schema,
    social = new Schema({
        name: {type: String, required:true},
        link:{type:String}
    });
const Social = api.mongoose.model('Social', social);

module.exports=Social;
