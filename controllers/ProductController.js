const ProductModel = require('../models/ProductModel');


exports.getProducts=async (req,res,next)=>{
    const query = req.query.keyword?{ pname : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}
    //ProductModel.find(query)
    const products = await ProductModel.find(query)
  .then(products=>{
    res.render("Index",{products:products,title:"index"});
  })
  .catch(err=>{
    console.log(err);
  });
}
