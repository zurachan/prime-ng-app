import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { AppConfigurator } from '../configurator/app.configurator';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.html',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator]
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
