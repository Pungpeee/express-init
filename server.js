const express = require('express')
const app = express();


app.get("/products", (req, res) => {
    res.send("Milk, Ramen, Tempura, Pizza, Cake, Cookie, Orange juice, Soda")
})

app.get("/products/beverage", (req, res) => {
    res.send("Milk, Orange juice, Soda")
})

app.get("/products/food", (req, res) => {
    res.send("Ramen, Tempura, Pizza")
})

app.get("/products/dessert", (req, res) => {
    res.send("Cake, Cookie")
})

app.get("/products/menu/cafe", (req, res) => {
    res.send("Milk, Cake, Cookie")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

module.exports = app
