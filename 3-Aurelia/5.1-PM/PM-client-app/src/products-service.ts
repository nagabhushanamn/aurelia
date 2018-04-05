

export default class ProductsService {

    apiUrl = "http://0.0.0.0:3000/api/products";

    loadAllProducts() {
        return fetch(this.apiUrl)
            .then(resp => resp.json());
    }
    loadProduct(id) {
        return fetch(this.apiUrl + `/${id}`)
            .then(resp => resp.json());
    }
    saveProduct(product) {
        return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json())
    }
    updateProduct(product) {
        return fetch(this.apiUrl + `/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json())
    }
    delete(id) {
        return fetch(this.apiUrl + `/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }

}