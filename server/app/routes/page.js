const router = api.express.Router();
const Page = require('../models/page');
const page = new Page();

router.use('/homepage', (req, res, next)=> {
    if (!!req.headers['x-requested-with']) {
        Page.findOne({link: 'index'})
            .then(
                (data)=> {
                    res.end(JSON.stringify(data))
                }
            )
    } else {
        next()
    }
});

router.use('/pages', (req, res, next)=> {
    if (!!req.headers['x-requested-with']) {
        // Page.find({},(err, docs)=>{
        //     if(err) {
        //         console.log(err);
        //         res.end(err)
        //     }else{
        //         console.log(docs)
        //         res.end(JSON.parse(docs))
        //     }
        // })
        Page.find({})
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

module.exports = router;