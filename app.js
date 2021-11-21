//  import dotenv
require('dotenv').config()

// import beberapa hal yang dibutuhkan
const express = require('express')
const path = require('path')


// import user router
const user = require ('./routers/users.router.js')

// membuat app dari express
const app = express()

// menggunakan middleware express.json dan express.urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// configure template engine using ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// serving public directory


// gunakan user router sebagai middleware
app.use(user)

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    const {message, code = 500, error ="internal server error"} = err;

    return res.status(code).json({
        message,
        code,
        error
    });
})

// import css, img dan js
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));


// app listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server load with port: ${PORT}`)
})