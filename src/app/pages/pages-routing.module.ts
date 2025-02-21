import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crud } from './crud/crud';
import { Documentation } from './documentation/documentation';
import { Empty } from './empty/empty';

export const appRoutes: Routes = [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
