import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'events-thumbnail',
    templateUrl: '/app/events/event-thumbnail.html',
    styles: [`
    .btn-primary { background-color : blue}
    `]
})
export class EventsThumbnailComponent {

    @Input() event:any
    @Output() eventClick = new EventEmitter()
    priyanka = {
        goal: 'learning ng',
        dream: 'to be an ng developer'
    }

    handleClickMe() {
        this.eventClick.emit(this.priyanka)
    }

    log() {
        console.log(this.priyanka)
        //some code change

        //some more code change for pega 112 feature

        //2. some more code change for pega 112 feature

        //3. some more code change for pega 112 feature

        //4. some more code change for pega 112 feature
    }
}