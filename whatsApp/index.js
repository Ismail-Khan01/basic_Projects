const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;
const chat = require("./models/chat");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

// reques body parser
app.use(express.urlencoded({ extended: true }));



// establishing connection with the mongodb DataBase.
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then(() => {
    console.log("connected to the DataBase");
}).catch((err => {
    console.log(`error while connecting to the DataBase : ${err}`);
}))



// get request on the / route
app.get("/", (req, res) => {
    console.log("this the root page")
    res.send("This is the root route");
})

app.get("/chats", async (req, res) => {
    const chats = await chat.find();
    res.render("allChats.ejs", { chats });
})

app.get("/chats/new", (req, res) => {
    res.render("newChat.ejs");
})


// listening the app on port :8080
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
