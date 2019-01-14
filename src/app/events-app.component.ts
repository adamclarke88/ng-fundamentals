import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
   
    <test-page></test-page>
  `
})
export class EventsAppComponent {
  title = 'app';
}
