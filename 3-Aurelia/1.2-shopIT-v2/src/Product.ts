import { customElement, bindable } from 'aurelia-framework';
import { ProductsService } from './ProductsService'

@customElement('product')
export class Product {

    @bindable item;
    reviews: Array<any> = [];

    tab: number = 1;
    changeTab(tabIndex) {
        this.tab = tabIndex;
        if (tabIndex === 3) {
            let service = new ProductsService();
            service.getAllReviews(this.item.id)
                .then(reviews => {
                    this.reviews = [...reviews];
                    console.log(this.reviews);
                });
        }
    }
    buy(product) {
    }
}