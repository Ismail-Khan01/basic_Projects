const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;

// establishing connection with the mongodb DataBase.
async function main() {
    await mongoose.connect("mongodb//127.0.0.1:27017/whatsapp");
}
main().then(() => {
    console.log("connected to the DataBase");
}).catch((err => {
    console.log(`error while connecting to the DataBase : ${err}`);
}))

// get request on the / route
app.get("/", (req, res) => {
    console.log("this the root page")
})


// listening the app on port :8080
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
