document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotalElement = document.getElementById('cart-subtotal');
    const cartTaxElement = document.getElementById('cart-tax');
    const cartTotalElement = document.getElementById('cart-total');
    const cartItemCountEl = document.getElementById('cart-item-count');
    const continueBtn = document.querySelector('.continue-shopping-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // If drawer elements are not present on this page, do nothing
    if (!cartItemsContainer || !cartSubtotalElement || !cartTaxElement || !cartTotalElement) {
        return;
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <svg xmlns="svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
                    </svg>
                    <h3>Add joy to your cart!!</h3>
                    <p>Browse our mobile accessories and pick your favourites.</p>
                </div>
            `;
            if (continueBtn) continueBtn.textContent = 'Shop Now';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                // Extract numeric price from the price string
                const priceValue = parseFloat(item.price.replace(/[₹$,]/g, '').replace(/,/g, ''));
                const itemTotal = priceValue * (item.quantity || 1);
                subtotal += itemTotal;

                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p class="price-tag">${item.price}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="quantity-display">${item.quantity || 1}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
                    </div>
                `;

                cartItemsContainer.appendChild(cartItem);
            });
        }

        // Calculate tax and total
        const tax = subtotal * 0.18; // 18% tax
        const total = subtotal + tax;

        // Update summary
        cartSubtotalElement.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        cartTaxElement.textContent = `₹${tax.toLocaleString('en-IN')}`;
        cartTotalElement.textContent = `₹${total.toLocaleString('en-IN')}`;

        if (cartItemCountEl) {
            cartItemCountEl.textContent = cart.length;
        }

        if (continueBtn && cart.length > 0) {
            continueBtn.textContent = 'Shop More';
        }
    }

    window.updateQuantity = function(index, change) {
        if (cart[index]) {
            cart[index].quantity = Math.max(1, (cart[index].quantity || 1) + change);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    };

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    // Checkout button functionality
    document.querySelector('.checkout-btn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Redirecting to checkout...');
            // In a real implementation, redirect to checkout page
        }
    });

    // Continue / Shop Now / Shop More navigates to home page
    continueBtn?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    updateCart();
});