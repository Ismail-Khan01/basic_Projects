const express = require("express")
const app = express()
const path = require("path")
const port = 3000
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
app.use(express.urlencoded({ "extended": true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride('_method'))


let posts = [
    {
        "id": `${uuidv4()}`,
        "user": "Ismail khan",
        "content": "Hey how are you"
    },
    {
        "id": `${uuidv4()}`,
        "user": "Khan saab",
        "content": "I am doing good"
    },
    {
        "id": `${uuidv4()}`,
        "user": "Ruwaid khan",
        "content": "Hey guys how are you doing"
    }
]


app.get("/posts", (req, res) => {
    // console.log(posts)
    res.render("main.ejs", { posts })

})
app.get("/posts/new", (req, res) => {
    res.render("newpost.ejs")
})
app.post("/posts/new", (req, res) => {
    const { user, content } = req.body
    const id = uuidv4();
    posts.push({ user, content, id })
    res.redirect("/posts")
})
app.get("/posts/update/:id", (req, res) => {
    let { id } = req.params
    // console.log(id)
    let update = posts.find((p) => {
        return id == p.id
    })
    res.render("update.ejs", { update })
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { content } = req.body
    let update = posts.find((p) => {
        return id == p.id
    })
    update.content = content;
    res.redirect("/posts")
})


app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter((p) => {
        return id !== p.id
    })
    res.redirect("/posts")
})
app.listen(port, () => {
    console.log("the server has been started")
})