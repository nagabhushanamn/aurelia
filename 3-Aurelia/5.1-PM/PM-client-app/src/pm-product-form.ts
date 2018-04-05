import { inject } from "aurelia-framework";
import ProductsService from "products-service";

interface Product {
    id?: number;
    name: string;
    price: number;
    make_date: string;
    description: string
}

@inject(ProductsService)
export class ProductForm {
    product: Product;
    status: string = ''
    action: string = '';
    constructor(private productsService: ProductsService) { }

    activate(params, routeConfig) {
        this.productsService.loadProduct(params.id)
            .then(product => {
                this.product = product;
                this.action = 'UPDATE'
            })
    }

    save() {
        if (this.action === 'UPDATE') {
            this.productsService.updateProduct(this.product)
                .then(item => {
                    // publish 'message'  saying new product saved...
                    this.status = "Product Updated..."
                    this.action = "";
                     this.product = null;
                });
        } else {
            this.productsService.saveProduct(this.product)
                .then(item => {
                    // publish 'message'  saying new product saved...
                    this.status = "New Product Saved..."
                    this.product = null;
                });
        }

    }
}