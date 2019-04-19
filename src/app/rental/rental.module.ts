import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';


import { RentalComponent } from './rental.component';
import { RetalListComponent } from './retal-list/retal-list.component';
import { RetalListItemComponent } from './retal-list-item/retal-list-item.component';

import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';


const routes:Routes=[
  {path:'rentals',
  component:RentalComponent,
  children:[
      {path:'',component:RetalListComponent},
      {path:':rentalId',component:RentalDetailComponent}
  ]

}
]

@NgModule({

    declarations:[
        RentalComponent,
        RetalListComponent,
    RetalListItemComponent,
    RentalDetailComponent,
    ],
    imports: [
CommonModule,
RouterModule.forChild(routes)
  ],
  providers:[
      RentalService
      ]
})
export class RentalModule {}