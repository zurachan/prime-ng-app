import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { LayoutModule } from '../layout/layout.module';
import { Access } from './access/access';
import { AuthRoutingModule } from './auth-routing.module';
import { Error } from './error/error';
import { Login } from './login/login';

@NgModule({
    imports: [CommonModule, AuthRoutingModule, ButtonModule, RouterModule, RippleModule, LayoutModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
    declarations: [Access, Error, Login],
    exports: [Access, Error, Login]
})
export class AuthModule {}
