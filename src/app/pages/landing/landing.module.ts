import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FeaturesWidget } from './components/featureswidget/featureswidget';
import { FooterWidget } from './components/footerwidget/footerwidget';
import { HeroWidget } from './components/herowidget/herowidget';
import { HighlightsWidget } from './components/highlightswidget/highlightswidget';
import { PricingWidget } from './components/pricingwidget/pricingwidget';
import { TopbarWidget } from './components/topbarwidget/topbarwidget';
import { Landing } from './landing';

@NgModule({
    imports: [CommonModule, RouterModule, RippleModule, StyleClassModule, ButtonModule, DividerModule],
    declarations: [Landing, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget],
    exports: [Landing]
})
export class LandingModule {}
