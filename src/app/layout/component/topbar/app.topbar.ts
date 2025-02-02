import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../service/layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.html',
    standalone: false
    // imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator]
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
