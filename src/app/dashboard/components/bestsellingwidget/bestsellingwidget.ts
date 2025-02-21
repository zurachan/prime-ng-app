import { Component } from '@angular/core';

@Component({
    selector: 'app-best-selling-widget',
    templateUrl: './bestsellingwidget.html',
    standalone: false
})
export class BestSellingWidget {
    menu = null;

    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
