const Product = require('../models/products')

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', { path: '/add-prod', title: 'Add product' });
  }
  
exports.postAddProduct = (req, res, next) => {
const product = new Product(req.body.title, req.body.imgUrl, req.body.price, req.body.description);
product.save();
res.redirect('/');
};

exports.getAdminProducts = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('admin/products', {
            prod: products,
            path: '/admin/products',
            title: 'Admin Products'
        });
    })
}