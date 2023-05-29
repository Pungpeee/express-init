const express = require('express')
const app = express();


app.get("/health", (req, res) => {
    res.send("Health good")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

module.exports = app