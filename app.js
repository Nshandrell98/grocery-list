let cart = [];
let items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log(item);
    
    item.addEventListener('click', function() {
        console.log(item.innerText);
        let found = false;
        let total = 0;
        let price = item.getAttribute('data-price');
        for (let j = 0; j< cart.length; j++) {
            const cartItem = cart[j];

            if (cartItem.name == item.innerText) {
                found = true;
                cart[j].qty++;
                
            }
            
        }
        if(!found){
            cart.push({name: item.innerText, price ,qty:1});
        }
        function updateItems(){
            let numberItems = document.getElementById('numberItems');
            numberItems.innerText = cart.length;
        };

        function updateTotal(){
            let cartTotal = document.getElementById('cartTotal');
            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                total += item.price * item.qty;
                
            }
            cartTotal.innerText = total.toFixed(2);
        }
        updateItems();
        updateTotal();
    })
    
}