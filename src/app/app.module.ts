import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import {headerCompnent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';

// import { MyComponentComponent } from './my-component/my-component.component';
// @import "../node_modules/bootstrap/scss/bootstrap.scss";
import {RentalModule} from './rental/rental.module'

const routes:Routes=[
  {path:'',redirectTo:'/rentals',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    headerCompnent,
    
     //MyComponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
