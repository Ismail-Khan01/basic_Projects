const mongoose = require("mongoose");
const chat = require("./models/chat");

const chats = [{
    from: 'Ismail khan',
    to: 'Khalid ahmed',
    message: 'Yeah i am doing good burhh!',
    createdAt: new Date()
},
{
    from: 'Ismail khan',
    to: 'Khalid ahmed',
    message: 'what about you ?',
    createdAt: new Date()
},
{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'Even i am doing good brother !',
    createdAt: new Date()
},

{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'What are your plans for sunday bruhh?',
    createdAt: new Date()
},

{
    from: 'Ismail khan',
    to: 'khalid ahmed',
    message: 'Nothing much.',
    createdAt: new Date()
},

{
    from: 'Ismail khan',
    to: 'Khalid ahemd',
    message: 'Why bro ?',
    createdAt: new Date()
},

{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'I planned an outing , and thought of asking you would you like to join?',
    createdAt: new Date()
},

{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'How are you dude?',
    createdAt: new Date()
},

{
    from: 'Ismail khan',
    to: 'Khalid ahmed',
    message: 'Yeah i am doing good burhh!',
    createdAt: new Date()
},

{
    from: 'Ismail khan',
    to: 'Khalid ahmed',
    message: 'what about you ?',
    createdAt: new Date()
},

{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'Even i am doing good brother !',
    createdAt: new Date()
},

{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'What are your plans for sunday bruhh?',
    createdAt: new Date()
},

{
    from: 'Ismail khan',
    to: 'khalid ahmed',
    message: 'Nothing much.',
    createdAt: new Date()
},

{
    from: 'Ismail khan',
    to: 'Khalid ahemd',
    message: 'Why bro ?',
    createdAt: new Date()
},

{
    from: 'Khalid ahmed',
    to: 'Ismail khan',
    message: 'I planned an outing , and thought of asking you would you like to join?',
    createdAt: new Date()
}
]
main().then(() => {
    console.log("connected to the data base")
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
chat.insertMany(chats).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
