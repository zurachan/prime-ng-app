import { Component } from '@angular/core';
import { Product, ProductService } from '../../../pages/service/product.service';


@Component({
    selector: 'app-recent-sales-widget',
    templateUrl: './recentsaleswidget.html',
    standalone: false,
    providers: [ProductService]
})
export class RecentSalesWidget {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data));
    }
}
