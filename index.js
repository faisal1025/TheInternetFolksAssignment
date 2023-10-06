const express = require('express')
const roleRoutes = require('./routers/roles')
const userRoutes = require('./routers/users')
const communityRoutes = require('./routers/communities')
const memberRoutes = require('./routers/members')
const connectMongoDb = require('./connection')
const expressLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const path = require('path')
const { restrictLoggedIn, isLoggedIn } = require('./middlewares/auth')

const app = express()
const port = 8000

connectMongoDb("mongodb://127.0.0.1:27017/folks-assignment").then(()=>{
    console.log('Mongodb Connected');
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(expressLayout)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.get('/', async (req, res)=>{
    res.send("This is the home page")
})

// app.use('/url', restrictLoggedIn, urlRoutes)
app.use('/v1/role', roleRoutes)
app.use('/v1/auth', userRoutes)
app.use('/v1/community', communityRoutes)
app.use('/v1/member', memberRoutes)


app.listen(port, ()=>console.log(`Server is running on port ${port}`))