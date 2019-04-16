import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {headerCompnent} from './common/header/header.component';
// import { MyComponentComponent } from './my-component/my-component.component';
// @import "../node_modules/bootstrap/scss/bootstrap.scss";




@NgModule({
  declarations: [
    AppComponent,
    headerCompnent,
     //MyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
