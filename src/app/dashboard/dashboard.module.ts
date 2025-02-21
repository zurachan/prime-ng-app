import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { BestSellingWidget } from './components/bestsellingwidget/bestsellingwidget';
import { NotificationsWidget } from './components/notificationswidget/notificationswidget';
import { RecentSalesWidget } from './components/recentsaleswidget/recentsaleswidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget/revenuestreamwidget';
import { StatsWidget } from './components/statswidget/statswidget';
import { Dashboard } from './dashboard';

@NgModule({
    imports: [CommonModule, ButtonModule, MenuModule, TableModule, RippleModule, ChartModule],
    declarations: [Dashboard, StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    exports: [Dashboard]
})
export class DashboardModule {}
