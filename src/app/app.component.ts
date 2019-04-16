import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   compnentTittle='I am app Component .ts'

   clickHandler(){
     alert('I am Clicked')
   }
}
