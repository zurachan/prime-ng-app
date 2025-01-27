import { Component, ElementRef } from '@angular/core';
import { AppMenu } from '../menu/app.menu';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.html',
    standalone: true,
    imports: [AppMenu]
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
