import { Routes } from '@angular/router'
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator
} from './events/index'

import { TestComponent } from './test/test.component';
import { Error404Component } from './errors/404.component';


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent },
    { path: 'events/test', component: TestComponent},
    { path: '404', component: Error404Component},
    { path: 'user', loadChildren: './user/user.module#UserModule'},
// when a route starts with /user.. load the user module from this path
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
]

// /:id is a parameter placeholder, where it will allow a parameter to be passed in