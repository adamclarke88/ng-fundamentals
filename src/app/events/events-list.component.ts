import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { IEvent } from './shared/index'

declare let toastr

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1> 
            <hr/>
            <div class="row">
                <div [routerLink]="['/events', event.id]" *ngFor="let event of events" class="col-md-6">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})

export class EventsListComponent implements OnInit {

    events:IEvent[]

    constructor(private eventService: EventService, private toastr: ToastrService){
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => { this.events = events})
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}