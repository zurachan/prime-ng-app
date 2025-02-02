import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './component/configurator/app.configurator';
import { AppFloatingConfigurator } from './component/floating-configurator/app.floatingconfigurator';
import { AppFooter } from './component/footer/app.footer';
import { AppLayout } from './component/layout/app.layout';
import { AppMenuitem } from './component/menu-item/app.menuitem';
import { AppMenu } from './component/menu/app.menu';
import { AppSidebar } from './component/sidebar/app.sidebar';
import { AppTopbar } from './component/topbar/app.topbar';

@NgModule({
    imports: [CommonModule, FormsModule, SelectButtonModule, ButtonModule, StyleClassModule, RouterModule, RippleModule],
    declarations: [AppConfigurator, AppFloatingConfigurator, AppFooter, AppLayout, AppMenu, AppMenuitem, AppSidebar, AppTopbar]
})
export class LayoutModule {}
