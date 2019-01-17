import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
    <h2 class="errorDetails">Enter a valid event ID</h2>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }

    .errorDetails { text-align: center;}
    `]
})
export class Error404Component{
  constructor() {

  }

}