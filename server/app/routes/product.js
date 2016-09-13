const Product = require('../models/product');

module.exports = function (app) {
    let cache;
    app.get('/product', (req, res, next)=> {

        // asinc save in db

        // let resourse=[];
        // for(let k=0; k<160; k++){
        //     if(k%2){
        //         resourse.push(new Product({title:`title${k+1}`,sub_title:`sub_title${k+1}`}))
        //     }else {
        //         resourse.push(new Product({title:`title${k+1}`,sub_title:`sub_title${k+1}`,src:"technics1.jpg"}))
        //     }
        //
        // }
        // new Promise((resolve,reject)=>{
        //     let done=[]
        //     resourse.forEach((item,i)=>{
        //         item.save((err)=>{
        //             if(err) return console.log(err);
        //             done.push(`${i}----done`);
        //             if(done.length===40){
        //                 resolve(done);
        //             }
        //         })
        //
        //     })
        // })
        //     .then(
        //         (data)=>{res.end(JSON.stringify(data))}
        //     );

        if (!!req.headers['x-requested-with']) {
            if (!cache) {
                Product.find({})
                    .then(
                        data=> {
                            cache=data;

                            res.end(JSON.stringify(data))
                        },
                        err=> {
                            console.log(err);
                            res.end(err)
                        }
                    )
            }
            else {
                res.end(JSON.stringify(cache))
            }
        }
        else {
            next()
        }
    });
};
