import { customElement, View, inject } from "aurelia-framework";
import ProductsService from "./products-service";

@inject(ProductsService)
@customElement('pm-product-list')
export class ProductList {

    products: Array<any> = [];

    constructor(private productsService: ProductsService) { }

    created(owningView: View, myView: View) {
        // const productsAPI=new ProductsAPI();// 
        this.productsService.loadAllProducts()
            .then(products => this.products = products);
    }

    delete(id) {
        this.productsService.delete(id)
            .then(r => {
                this.products = this.products.filter(product => product.id !== id)
            })
    }

}