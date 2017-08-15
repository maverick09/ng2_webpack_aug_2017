import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: '/app/events/events-list.html'
})
export class EventsListComponent {

    events = [
        {
            id: 1,
            name: 'Angular Connect',
            price: '12.23',
            date: '9/9/2036',
            time: '10:23',
            image: '/app/assets/images/angularconnect-shield.png',
            location: {
                address: 'Singapore'
            }
        },
        {
            id: 1,
            name: 'Angular Connect',
            price: '12.23',
            date: '9/9/2036',
            time: '10:23',
            image: '/app/assets/images/angularconnect-shield.png',
            location: {
                address: 'Singapore'
            },
        },
        {
            id: 1,
            name: 'Angular Connect',
            price: '12.23',
            date: '9/9/2036',
            time: '10:23',
            image: '/app/assets/images/angularconnect-shield.png',
            location: {
                address: 'Singapore'
            },
        },
        {
            id: 1,
            name: 'Angular Connect',
            price: '12.23',
            date: '9/9/2036',
            time: '10:23',
            image: '/app/assets/images/angularconnect-shield.png',
            location: {
                address: 'Singapore'
            },
        }
    ];

    handleEventClick(data) {
        console.log(data)
    }

}