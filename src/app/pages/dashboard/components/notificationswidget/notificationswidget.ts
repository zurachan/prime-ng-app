import { Component } from '@angular/core';

@Component({
    selector: 'app-notifications-widget',
    templateUrl: './notificationswidget.html',
    standalone: false
})
export class NotificationsWidget {
    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
