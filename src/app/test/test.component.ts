import { Component } from '@angular/core';

@Component({
    selector: 'test-page',
    template: `
        <h2> Test Heading </h2>

<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">Type</th>
            <th scope="col">Course</th>
            <th scope="col">Day</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{testData.name.type}}</td>
            <td>{{testData.name.course}}</td>
            <td>{{testData.schedule.day}}</td>
        </tr>
        <tr>
            <td>{{testData2.name.type}}</td>
            <td>{{testData2.name.course}}</td>
            <td>{{testData2.schedule.day}}</td>
        </tr>
        <tr>
            <td>{{testData3.name.type}}</td>
            <td>{{testData3.name.course}}</td>
            <td>{{testData3.schedule.day}}</td>
        </tr>
    </tbody>
</table>

    `
})

export class TestComponent {

    testData = {
        name: {
            type: 'Training',
            course: 'Angular'
        },
        schedule: {
            day: 'Friday'
        }
    }

    testData2 = {
        name: {
            type: 'Training',
            course: 'C#'
        },
        schedule: {
            day: 'Monday'
        }
    }

    testData3 = {
        name: {
            type: 'Training',
            course: '.Net'
        },
        schedule: {
            day: 'Tuesday'
        }
    }

}
