import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LandingModule } from './landing/landing.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, AppRoutingModule, LayoutModule, DashboardModule, LandingModule],
    providers: [provideHttpClient(withFetch()), provideAnimationsAsync(), providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })],
    bootstrap: [AppComponent]
})
export class AppModule {}
