import { Routes } from '@angular/router'
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/create-event.component';
import { TestComponent } from './test/test.component';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent},
    { path: 'events', component: EventsListComponent },
    { path: 'events/test', component: TestComponent},
    { path: '404', component: Error404Component},
    { path: 'events/:id', component: EventDetailsComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
]

// /:id is a parameter placeholder, where it will allow a parameter to be passed in