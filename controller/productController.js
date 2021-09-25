const Product = require("../models/Product");

// CREATE
const createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
}
    
// UPDATE
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        
        res.status(200).json(updatedProduct)

    } catch (err) {
        res.status(500).json(err)
    }      
}

// DELETE
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    } 
}

// GET Product
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    } 
}

// GET ALL Products
const getAllProducts = async (req, res) => {
    const query = req.query.new
    const category = req.query.category

    try {
        let products;
        if (query) {
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if(category){
            products = await Product.find({
                categories: {
                $in: [category],
            }})
        } else {
            products = await Product.find()
        }
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts  }