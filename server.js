const express = require("express");
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true } ))
app.use(express.json())

app.set('view engine', 'ejs')



// app.get('/', (req, res) => {
    //console.log("Hello World");
    //res.send("Hello World");
    //res.status(500).send("Hi");
    //res.json({  message: "Hi" })
    //res.download("server.js")
//     res.render('index', { text: 'World' })
// })

//app.use(logger)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }


app.listen(3000)
