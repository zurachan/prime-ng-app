import { Component, computed, inject } from '@angular/core';
import { LayoutService } from '../../service/layout.service';

@Component({
    selector: 'app-floating-configurator',
    templateUrl: './app.floatingconfigurator.html',
    standalone: false
})
export class AppFloatingConfigurator {
    LayoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
