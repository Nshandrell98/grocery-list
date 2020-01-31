let cart = [];
let currencyRate = 1;
let currencySymbol = '&dollar;';
let items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('click', function () {
        addToCart(item);
    });
}
let changeCurrency = document.getElementById('currency');
changeCurrency.addEventListener('change', updateCurrencyRate);
let viewCart = document.getElementById('viewCart');
viewCart.addEventListener('click', function(){
    showCart()
})

function addToCart(item) {
    let found = false;
    let price = item.getAttribute('data-price');
    let name = item.innerText;
    for (let j = 0; j < cart.length; j++) {
        const cartItem = cart[j];
        if (cartItem.name == name) {
            found = true;
            cart[j].qty++;
        }
    }
    if (!found) {
        cart.push({name, price, qty: 1});
    }
    updateItems();
    updateTotal();    
}
function updateCurrencyRate() {
    let country = this.value;
    switch (country) {
        case 'us':
            currencyRate = 1;
            currencySymbol = '&dollar;';
            break;
        case 'uk':
            currencyRate = 1.5;
            currencySymbol = '&pound;';
            break;
        default:
            break;
    }
    updateTotal();
}
function updateItems() {
    let numberItems = document.getElementById('numberItems');
    numberItems.innerText = cart.length;
}
function updateTotal() {
    let cartTotal = document.getElementById('cartTotal');
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price * item.qty;
    }

    total = total * 1.07;
    total /= currencyRate;
    cartTotal.innerHTML =   `${currencySymbol}${total.toFixed(2)}`;
}
function showCart(){
    let cartList = document.getElementById('cart');
    cartList.innerText = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let el = document.createElement('li');
        el.innerText = `${item.name} @${item.price} QTY: ${item.qty}`;
        cartList.appendChild(el);
        
    }
}