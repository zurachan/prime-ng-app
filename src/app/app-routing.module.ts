import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Landing } from './landing/landing';
import { AppLayout } from './layout/component/layout/app.layout';
import { Notfound } from './pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./uikit/uikit.module').then((m) => m.UikitModule) },
            { path: 'pages', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];

export const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
};

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
