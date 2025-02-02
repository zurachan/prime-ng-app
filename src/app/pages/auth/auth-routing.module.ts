import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Access } from './access/access';
import { Error } from './error/error';
import { Login } from './login/login';

const routes: Routes = [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
