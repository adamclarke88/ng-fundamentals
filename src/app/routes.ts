import { Routes } from '@angular/router'
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/create-event.component';
import { TestComponent } from './test/test.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent },
    { path: 'events/test', component: TestComponent},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
]

// /:id is a parameter placeholder, where it will allow a parameter to be passed in