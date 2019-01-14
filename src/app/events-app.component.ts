import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <events-list></events-list>
    <div></div>
    <test-page></test-page>
  `
})
export class EventsAppComponent {
  title = 'app';
}
