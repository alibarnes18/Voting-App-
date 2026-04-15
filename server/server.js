const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();


//middleware
app.use(cors());
app.use(express.json());

//test route
app.get("/" , (req, res) => {
    res.send("Server is running... ");
});

//server start
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.post("/test", (req, res) => {
    const {name} = req.body.name;

    res.send(name);

});



// MongoDB bağlantısı
mongoose.connect("mongodb://127.0.0.1:27017/votingapp")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("MongoDB connection error:", err);
});

// test route
app.get("/", (req, res) => {
    res.send("API is running");
});

// server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});