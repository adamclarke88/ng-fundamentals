import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from "../shared/event.service"

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        // the !! casts the result to a boolean which will be contained in 'eventExists'

        if (!eventExists) // checking if the event does not exist (!)
            this.router.navigate(['/404'])
        return eventExists

        // it iwll return true meaning the route can be activiated if the event exists
        // otherwise it will return false and route to the 404 page
    }

}