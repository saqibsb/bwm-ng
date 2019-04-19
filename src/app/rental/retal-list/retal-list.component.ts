import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'bwm-retal-list',
  templateUrl: './retal-list.component.html',
  styleUrls: ['./retal-list.component.scss']
})
export class RetalListComponent implements OnInit {
rentals:Rental[] = [];

  constructor(private rentalService:RentalService) { 
   
  }

  ngOnInit() {
   const rentalObservable= this.rentalService.getRentals()

   rentalObservable.subscribe(
     (rentals:Rental[]) =>{
      this.rentals=rentals;
     },
     (err) =>{
       
     },
     ()=>{

     }
   )

  }
   

}
