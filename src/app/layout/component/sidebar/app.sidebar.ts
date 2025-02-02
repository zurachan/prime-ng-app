import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.html',
    standalone: false
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
