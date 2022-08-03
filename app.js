require('dotenv').config();
const express= require('express');
const app= express()
const connectdb=require('./database/database')
const router=require('./routes/routes')
const User = require('./models/User');
const authRoutes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const onport=process.env.PORT||3000

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
app.use(express.static('public'));
connectdb()


app.get('*', checkUser);
app.use(router);

// app.use('/',router)
app.listen(process.env.PORT||3000)
// app.listen(3000)