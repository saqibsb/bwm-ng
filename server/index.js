const express =require('express');
const mongoose = require('mongoose');
const config=require('./config/dev');
const Rental=require('./models/rental');
const FakeDB=require('./fake-db');

const rentalRoute=require('./routes/rentals');
mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(()=>{
  const fakeDb=new FakeDB();
  fakeDb.seedDB();
});
const app=express();

app.use('/api/v1/rentals',rentalRoute);

// app.get('/rentals',function(req,res){
//     res.json({'success':true});
// })
const PORT=process.env.PORT || 3001; 
app.listen(PORT,function(){
    console.log("I am Running");
});