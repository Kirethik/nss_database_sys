const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('front_end'));

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})

app.post('/submit',(req,res)=>{
    const {name , roll_no , email , phone , sex , unit} = req.body;
    console.log('Form Data : ', req.body);
    res.send('Registration Success');

})