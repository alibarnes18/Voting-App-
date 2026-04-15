const express = require('express');
const cors = require("cors");

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

