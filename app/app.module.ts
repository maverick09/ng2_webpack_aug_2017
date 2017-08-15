import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from "./events/events-list";
import {EventsThumbnailComponent} from "./events/events-thumbnail";

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, EventsListComponent, EventsThumbnailComponent],
    bootstrap: [EventsAppComponent]
    //some config
})

export class AppModule {
}