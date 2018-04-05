
import { RouterConfiguration, Router } from 'aurelia-router'

export class App {
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "PM"

    config.map([
      { route: '', name: 'home', moduleId: 'pm-home', title: 'Home' },  // Home | PM
      { route: 'products', name: 'all', moduleId: 'pm-product-list', title: 'All' },
      { route: 'new', name: 'new', moduleId: 'pm-product-form', title: 'New' },
      { route: 'products/:id', name: 'edit', moduleId: 'pm-product-form', title: 'Edit' },
    ]);

  }

}
