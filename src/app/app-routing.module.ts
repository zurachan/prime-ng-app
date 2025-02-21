import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayout } from './layout/component/layout/app.layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Documentation } from './pages/documentation/documentation';

import { Notfound } from './pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./pages/pages.routes') }
        ]
    },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingModule) },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
