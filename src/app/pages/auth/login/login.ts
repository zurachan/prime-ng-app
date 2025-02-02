import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    standalone: false
})
export class Login {
    email: string = '';

    password: string = '';

    checked: boolean = false;
}
