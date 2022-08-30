

class Product {
    constructor(product_name, price ) {
        this.price = price;
        this.product_name = product_name;
    }
    render() {
        return `<a href="#" class="goods-item">
                    <div class="goods-img">
                        <img src="${this.image}" alt="Image">
                    </div>
                    <h3 class="goods-title">${this.product_name}</h3>
                    <p class="goods-price">${this.price}$</p>
                    <button class="goods-add-to-cart">Add to cart</button>
                </a>`;
    }
}

class ProductList {
    constructor() {
        this.products = [];
    }
    
    fetchProducts (cb) {
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        fetch(`${API_URL}/catalogData.json`)
            .then(response => response.json())
            .then(json => {
                this.products = json;
                cb();
                let listHtml = '';
                this.products.forEach(good => {
                    const goodItem = new Product(good.product_name, good.price);
                    listHtml += goodItem.render();
                });
                document.querySelector('.goods-list').innerHTML = listHtml;
            })  

    }

    getTotalProductPrice () {
        let totalPrice = 0;
        this.products.forEach(product => {
            totalPrice += product.price;
        });
        document.querySelector('.totalPrice span').innerHTML = totalPrice + '$';
    }

}

const list = new ProductList();
list.fetchProducts(() => {
    list.getTotalProductPrice();
});


class Basket {
    listProductsIn() {
        
    }
    addToBasket() {

    }
    removeFromBasket() {

    }    
}
class ItemBasket {
    render() {

    }
}


