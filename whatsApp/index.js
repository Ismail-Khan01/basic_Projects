const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;
const chat = require("./models/chat");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

// reques body parser
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));



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

//  get request on /chats route
app.get("/chats", async (req, res) => {
    const chats = await chat.find();
    res.render("allChats.ejs", { chats });
})


// get request on /chats/new route
app.get("/chats/new", (req, res) => {
    res.render("newChat.ejs");
})

// post request on /chats/new route
app.post("/chats", (req, res) => {
    const { from, message, to } = req.body;
    const newChat = new chat({
        from: from,
        to: to,
        message: message,
        createdAt: new Date()
    })
    newChat.save().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err);
    })
    res.redirect("/chats");

})

// get reques edit route 
app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;
    // res.render("edit.ejs",)
    const updatechat = await chat.findById(id)
    console.log(updatechat)
    res.render("edit.ejs", { updatechat });
})

// put request for updating message route
app.put("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { message: newmessage } = req.body;
    console.log(id)
    console.log(newmessage);
    const updatechat = await chat.findByIdAndUpdate(id, { message: newmessage });
    console.log(updatechat)
    res.redirect("/chats");
})


// listening the app on port :8080
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
