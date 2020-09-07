var express = require("express");
var mongoose = require("mongoose");

var db = require("./models");
mongoose.connect("mongodb://localhost:27017/cosmo", { useNewUrlParser: true });
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var PORT = 3000;

//below code for cross origin support
var cors = require('cors');
app.use(cors());

app.post("/category", function(req, res) {
    db.Category.create(req.body)
        .then(function(dbProduct) {
            res.json(dbProduct);
        })
        .catch(function(err) {
            res.json(err);
        });
});

app.get("/category", function(req, res) {
    db.Category.find({})
        .then(function(dbProducts) {
            res.json(dbProducts);
        })
        .catch(function(err) {
            res.json(err);
        })
});
app.get("/subcategory", function(req, res) {
    db.Subcat.find({})
        .then(function(dbProducts) {
            res.json(dbProducts);
        })
        .catch(function(err) {
            res.json(err);
        })
});

app.post("/subcategory", function(req, res) {
    db.Subcat.create(req.body)
        .then(function(dbProduct) {
            res.json(dbProduct);
        })
        .catch(function(err) {
            res.json(err);
        });
});
app.get("/subcat/:cat", function(req, res) {


    var query = db.Subcat.find({ 'category': req.params.cat });

    // selecting the 'name' and 'age' fields
    query.select('name code image');



    // execute the query at a later time
    query.exec(function(err, products) {
        if (err) return err;
        res.json(products);
    })


});
app.patch("/subcat/:cat", (req, res, next) => {
        const cat = req.params.cat;
        const updateOps = {}
        for (const ops of req.body) {
            updateOps[ops.propname] = ops.value;
        }
        db.Subcat.update({ _id: cat }, { $set: updateOps }).exec()
            .then(result => {
                console.log(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({})
            });
    })
    // app.put("/subcat/:id", async(req, res, next) => {
    //         try {
    //             var query = await db.Subcat.findById(req.params.id).exec();
    //             query.set(req.body);
    //             var result = await query.save();
    //             res.send(result)
    //         } catch (error) {
    //             res.status(500).send(error);
    //         }
    //     })



app.post("/products", function(req, res) {
    db.Product.create(req.body)
        .then(function(dbProduct) {
            res.json(dbProduct);
        })
        .catch(function(err) {
            res.json(err);
        });
});
app.get("/products/:cat", function(req, res) {


    var query = db.Product.find({ 'category': req.params.cat });

    // selecting the 'name' and 'age' fields
    query.select('name desc price code image');



    // execute the query at a later time
    query.exec(function(err, products) {
        if (err) return err;
        res.json(products);
    })


});
app.patch("/product/:cat", (req, res, next) => {
    const cat = req.params.cat;
    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propname] = ops.value;
    }
    db.Product.update({ _id: cat }, { $set: updateOps }).exec()
        .then(result => {
            console.log(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({})
        });
})
app.get("/product/:cat", function(req, res) {


    var query = db.Product.find({ 'code': req.params.cat });

    // selecting the 'name' and 'age' fields
    query.select(' name desc price code image image1 image2');



    // execute the query at a later time
    query.exec(function(err, products) {
        if (err) return err;
        res.json(products);
    })
});
app.listen(PORT, function() {
    console.log("Listening on port " + PORT + ".");
});