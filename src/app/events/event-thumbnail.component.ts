import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component ({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngClass]="getTimeColour()" [ngSwitch]="event?.time" >Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>


        <div>Price: \${{event.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles:[`
        .bold { font-weight: bold;}
        .green { color: #003300 !important}
        .red { color: red !important}
        .blue { color: blue !important}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div { color: #bbb;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent
    @Output() eventClick = new EventEmitter()

    // getStartTimeClass() {
    //     var isEarlyStart = this.event && this.event.time === '8:00 am'
    //     return {green: isEarlyStart, bold: isEarlyStart}
    // }

    getTimeColour() {
        if (this.event.time === '8:00 am')
        return 'green bold'
        else if (this.event.time === '10:00 am')
        return 'red bold'
    }
}