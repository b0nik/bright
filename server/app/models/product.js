const Schema = api.mongoose.Schema,
    product = new Schema({
        title: {type: String, required:true},
        sub_title:{type:String,required:true},
        src:{type:String,unique:true}

    });
const Product = api.mongoose.model('Product', product);

module.exports=Product;
