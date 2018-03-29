import 'bootstrap/dist/css/bootstrap.css';
import { ProductsService } from './ProductsService'

export class App {

  products: Array<any> = [];
  cart: Array<any> = [];
  tab: number = 1;
  created() {
    let service = new ProductsService();
    service.getAllProducts()
      .then(products => {
        this.products = [...products];
      })
  }
  buy(product) {
    this.cart.push(product);
  }
  changeTab(tabIndex) {
    this.tab = tabIndex;
  }

}
