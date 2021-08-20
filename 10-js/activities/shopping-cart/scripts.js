const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const clearCartBtn = document.querySelector('.clear-cart');
const productsDOM = document.querySelector('.products-content');

let cart = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch('products.json');
      let data = await result.json();

      let products = data.items;
      products = products.map(item => {
        const { id, name, price } = item;
        return { id, name, price };
      });
      console.log(products);

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class Cart {
  displayProducts(products) {
    let result = '';
    products.forEach(product => {
      result += `
            <!-- single product -->
            <div class="product">
              <h3>${product.name}</h3>
              <h4>₱${product.price}</h4>
              <button class="cart-btn" data-id=${product.id}>
                <i class="fas fa-shopping-cart"></i>
                Add to cart
              </button>
            </div>
            <!-- end of single product -->`;
    });
    productsDOM.innerHTML = result;
  }

  getCartButtons() {
    const buttons = [...document.querySelectorAll('.cart-btn')];
    buttons.forEach(button => {
      let id = button.dataset.id;

      let inCart = cart.find(item => item.id === id);
      if (inCart) {
        button.innerText = 'In Cart...';
        button.disabled = true;
      } else {
        button.addEventListener('click', e => {
          e.target.innerText = 'In Cart';
          e.target.disabled = true;

          let cartItem = { ...Storage.getProduct(id), amount: 1 };
          cart = [...cart, cartItem];
          Storage.saveCart(cart);

          this.setCartValues(cart);
          this.addCartItem(cartItem);
        });
      }
    });
  }

  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }

  addCartItem(item) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
            <!-- cart item -->
              <!-- item info -->
              <div>
                <h4>${item.name}</h4>
                <h5>₱${item.price}</h5>
                <span class="remove-item" data-id=${item.id}>remove</span>
              </div>
              <!-- item functionality -->
              <div>
                  <i class="fas fa-chevron-up" data-id=${item.id}></i>
                <p class="item-amount">
                  ${item.amount}
                </p>
                  <i class="fas fa-chevron-down" data-id=${item.id}></i>
              </div>
            <!-- cart item -->
          `;
    cartContent.appendChild(div);
  }

  setUp() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
  }

  populateCart(cart) {
    cart.forEach(item => this.addCartItem(item));
  }

  cartLogic() {
    clearCartBtn.addEventListener('click', () => {
      this.clearCart();
    });

    cartContent.addEventListener('click', e => {
      if (e.target.classList.contains('remove-item')) {
        let removeItem = e.target;
        let id = removeItem.dataset.id;
        cart = cart.filter(item => item.id !== id);
        console.log(cart);

        this.setCartValues(cart);
        Storage.saveCart(cart);
        cartContent.removeChild(removeItem.parentElement.parentElement);
        const buttons = [...document.querySelectorAll('.cart-btn')];
        buttons.forEach(button => {
          if (parseInt(button.dataset.id) === id) {
            buttons.disabled = false;
            button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to cart`;
          }
        });
      } else if (e.target.classList.contains('fa-chevron-up')) {
        let addAmount = e.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount + 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (e.target.classList.contains('fa-chevron-down')) {
        let lowerAmount = e.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount - 1;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          lowerAmount.previousElementSibling.innerText = tempItem.amount;
        } else {
          cart = cart.filter(item => item.id !== id);

          this.setCartValues(cart);
          Storage.saveCart(cart);
          cartContent.removeChild(lowerAmount.parentElement.parentElement);

          const buttons = [...document.querySelectorAll('.cart-btn')];
          buttons.forEach(button => {
            if (parseInt(button.dataset.id) === id) {
              button.disabled = false;
              button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to cart`;
            }
          });
        }
      }
    });
  }

  clearCart() {
    cart = [];
    this.setCartValues(cart);
    Storage.saveCart(cart);
    const buttons = [...document.querySelectorAll('.cart-btn')];
    buttons.forEach(button => {
      button.disabled = false;
      button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to cart`;
    });

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id === id);
  }
  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cart = new Cart();
  const products = new Products();
  cart.setUp();

  products
    .getProducts()
    .then(products => {
      cart.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      cart.getCartButtons();
      cart.cartLogic();
    });
});
