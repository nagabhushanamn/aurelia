import 'bootstrap/dist/css/bootstrap.css';

export class App {
  
  title: string = "aurelia-shopIT";
  tab: number = 1;
  
  changeTab(tabIndex) {
    this.tab = tabIndex;
  }

  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      description: 'New Mac Pro',
      canBuy: true,
      image: ''
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New  Pro',
      canBuy: true,
      image: ''
    }
  ]
}
