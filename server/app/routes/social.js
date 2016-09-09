const Social = require('../models/social');

module.exports=function (app) {
    app.get('/social', (req, res, next)=> {
        if (!!req.headers['x-requested-with']) {
            Social.find({})
                .then(
                    data=>{res.end(JSON.stringify(data))},
                    err=>{
                        console.log(err);
                        res.end(err)
                    }
                )
        } else {
            next()
        }
    });
};
