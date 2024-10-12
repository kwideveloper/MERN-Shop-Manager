
import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/database.js";
import Product from "./models/product.js";

dotenv.config();
const app = express();


app.use(express.json());

app.post("/api/products", async (req,res) => {

    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product) 

    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: "Product created and saved correctly", data: newProduct })
        console.log(newProduct);
    } catch {
        console.error(`Error creating the product: ${error.message}`)
        res.status(500).json({ success:false, message:"Server Error" }) 
    }

})

app.delete("/api/products/:id", async (req,res) => {

    const {id} = req.params

    console.log('id: ',id);

    try {

        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product deleted" })
        
    } catch {
        res.status(404).json({ success: false, message: "Product not found" })

    }

})

app.listen(5000, () => {
    connectDB()
    console.log('app opened at port 5000');
})