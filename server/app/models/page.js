const Schema = api.mongoose.Schema,
    page = new Schema({
        name: {type: String, required:true, unique: true},
        title: {type: String},
        link:{type:String, required:true, unique: true},
        component:{type:String}
    });
const Page = api.mongoose.model('Page', page);

module.exports=Page;