const Product = require('../models/products')

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop/product-list', {
              prod: products,
              path: '/',
              title: 'Our Products'
            });
  })
}

exports.getIndex = (req, res, next)=>{
    const products = Product.fetchAll((products) => {
        res.render('shop/index', {
                  prod: products,
                  path: '/',
                  title: 'Shop'
                });
      })
}

exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        path: '/cart',
        title: 'Your Cart'
    })
}

exports.getCheckout= (req, res, next)=>{
    res.render('shop/checkout',{
        path: '/checkout',
        title: 'Checkout'
    })
}

exports.getOrders= (req, res, next)=>{
    res.render('shop/orders',{
        path: '/orders',
        title: 'Your Orders'
    })
}