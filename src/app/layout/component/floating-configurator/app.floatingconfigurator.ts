import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { AppConfigurator } from '../configurator/app.configurator';

@Component({
    selector: 'app-floating-configurator',
    templateUrl: './app.floatingconfigurator.html',
    imports: [ButtonModule, StyleClassModule, AppConfigurator]
})
export class AppFloatingConfigurator {
    LayoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
