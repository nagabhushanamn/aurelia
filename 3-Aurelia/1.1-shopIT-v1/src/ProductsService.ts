
export class ProductsService {
    getAllProducts() {
        let api = 'http://0.0.0.0:3000/api/products';
        return fetch(api)
            .then(response => response.json())
    }
}