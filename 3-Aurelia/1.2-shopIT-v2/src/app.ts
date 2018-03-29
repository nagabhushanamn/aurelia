import 'bootstrap/dist/css/bootstrap.css';
import { ProductsService } from './ProductsService'

export class App {

  products: Array<any> = [];
  cart: Array<any> = [];

  created() {
    let service = new ProductsService();
    service.getAllProducts()
      .then(products => {
        this.products = [...products];
      })
  }


}
