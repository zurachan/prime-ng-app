import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'footer-widget',
    templateUrl: './footerwidget.html',
    standalone: false
})
export class FooterWidget {
    constructor(public router: Router) {}
}
