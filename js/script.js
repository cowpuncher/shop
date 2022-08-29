

class Product {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<a href="#" class="goods-item">
                    <div class="goods-img">
                        <img src="${this.image}" alt="Image">
                    </div>
                    <h3 class="goods-title">${this.title}</h3>
                    <p class="goods-price">${this.price}$</p>
                    <button class="goods-add-to-cart">Add to cart</button>
                </a>`;
    }
}

class ProductList {
    constructor() {
        this.products = [];
    }
    
    fetchProducts () {
        this.products = [
            { 
                id: 1, 
                image: 'https://avatars.mds.yandex.net/get-mpic/5204767/img_id2344845672928735290.jpeg/x248_trim', 
                title: 'Motobike', 
                price: 150 
            },
            { 
                id: 2, 
                image: 'https://avatars.mds.yandex.net/get-mpic/5360356/img_id6907483225986660995.jpeg/x248_trim', 
                title: 'Monster', 
                price: 50 
            },
            { 
                id: 3, 
                image: 'https://avatars.mds.yandex.net/get-mpic/5277279/img_id2084853453747532323.jpeg/x248_trim', 
                title: 'Mandalorece', 
                price: 350 
            },
            { 
                id: 4, 
                image: 'https://avatars.mds.yandex.net/get-mpic/5222168/img_id5521246056186485713.jpeg/x248_trim', 
                title: 'Mustang', 
                price: 250 
            },
        ];
    }

    static getTotalProductPrice () {
        let totalPrice = 0;
        this.products.forEach(product => {
            totalPrice = totalPrice + product.price
        });
        document.querySelector('.totalPrice span').innerHTML = totalPrice + '$';
    }

    render() {
        let listHtml = '';
        this.products.forEach(product => {
        const goodItem = new Product(product.image, product.title, product.price);
        listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new ProductList();
list.fetchProducts();
list.render();
list.getTotalProductPrice();

class Basket {
    listProductsIn() {
        
    }
    addTo() {

    }
    removeFrom() {

    }
    render() {

    }
}

