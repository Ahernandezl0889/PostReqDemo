//setting npm 
const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser')

//tell Express to use body-parser
app.use(bodyParser.urlencoded({extended: true}));


// making public available
app.use(express.static('public'));

// Setting the engine
app.set('view engine', 'hbs')

app.set("views", __dirname + "/views");

//making friends visible
let friends = ['Tony', 'Miranda', 'Justin', 'Pier', 'Lily']


// Creating Routes
app.get('/', (req,res,next)=>{
    res.render('index')
})

app.get('/friends', (req,res,next)=>{
    // let friends = ['Tony', 'Miranda', 'Justin', 'Pier', 'Lily'] We have to move outside this scope to be visible 
    res.render('friends', {friends: friends});
})

//a post route we use anytime to add data, or use it on the server side
app.post('/addfriend', (req,res,next)=>{
    console.log(req.body.newFriend) //containing all the data from the request body (object)
    let newFriend = req.body.newFriend;// it will extract  all the data introduce in the input field name: newFriend
    friends.push(newFriend);// we will add to the array
    // res.send("You have reach the post route")
    res.redirect('/friends') //it will redirect the data to the /friends route


})

app.get('*',(req, res, next)=>{
    res.send("<h1>Sorry Page Not Found</h1>")

})








const port = process.env.port || 3000
app.listen(port, (req,res,next)=>{
    console.log("Server is running......")
})