import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'topbar-widget',
    templateUrl: './topbarwidget.html',
    standalone: false
})
export class TopbarWidget {
    constructor(public router: Router) {}
}
