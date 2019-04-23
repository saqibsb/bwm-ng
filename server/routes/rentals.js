const express=require('express');
const router=express.Router();
const Rental=require('../models/rental');

router.get('', function(req,res){
 Rental.find({}, function(err,RentalFound){
     res.json(RentalFound)
 });
});

router.get('/:id' ,function(req,res){
    const rentalId=req.params.id;

    Rental.findById(rentalId,function(err,RentalFound){
        
    if(err){
        res.status(422).send({errors:[{title:'Rental Error!',Description:'Could Not Found REntals'}]})
    }
        res.json(RentalFound);
    });
});

module.exports=router; 