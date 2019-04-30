import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { RentalComponent } from './rental.component';
import { RetalListComponent } from './retal-list/retal-list.component';
import { RetalListItemComponent } from './retal-list-item/retal-list-item.component';

import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { UppercasePipe } from '../common/pipes/uppercase.pipe';
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
    UppercasePipe,
    ],
    imports: [
CommonModule,
HttpClientModule,
RouterModule.forChild(routes),
 NgPipesModule ,


  ],
  providers:[
      RentalService
      ]
})
export class RentalModule {}