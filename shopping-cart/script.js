// Store products
const products = [
    {
        title: "Watch",
        saleCost: 110.00,
        cost: 130.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro20.jpg?v=1607665575",
        atcStatus: false,
    },
    {
        title: "Pen drive",
        saleCost: 100.00,
        cost: 122.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro48.jpg?v=1607665608",
        atcStatus: false,
    },
    {
        title: "Mouse",
        saleCost: 25.00,
        cost: 45.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro31_eacb8fbe-be63-4404-8e9f-5297769290b7.jpg?v=1607665563",
        atcStatus: false,
    },
    {
        title: "Laptop",
        saleCost: 237.00,
        cost: 250.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro11_eca584c8-e1e1-404d-996d-af35cc9909c2.jpg?v=1607665624",
        atcStatus: false,
    },
    {
        title: "JBL Speaker",
        saleCost: 60.00,
        cost: 250.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro37_9c497408-cd03-4ba8-b516-981c770bbaae.jpg?v=1607665582",
        atcStatus: false,
    },
    {
        title: "Headphone",
        saleCost: 232.00,
        cost: 250.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro6_9e76ac99-ba1d-43fe-a895-2fa8d1a90b81.jpg?v=1607665601",
        atcStatus: false,
    },
    {
        title: "Camera",
        saleCost: 150.00,
        cost: 155.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro39.jpg?v=1607665587",
        atcStatus: false,
    },
    {
        title: "Earbuds",
        saleCost: 120.00,
        cost: 135.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro8.jpg?v=1607665641",
        atcStatus: false,
    },
    {
        title: "I Phone",
        saleCost: 225.00,
        cost: 230.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro15.jpg?v=1607665594",
        atcStatus: false,
    },
    {
        title: "Juice machine",
        saleCost: 150.00,
        cost: 180.00,
        count: 1,
        thumbnail: "https://electon1-store.myshopify.com/cdn/shop/products/pro64.jpg?v=1607665616",
        atcStatus: false,
    },
]

let productContainer = document.querySelector(".product-wrapper"),
    cartModal = document.querySelector(".modal-wrapper"),
    cartWrapper = document.querySelector(".cart-wrapper"),
    cartItemCount = document.querySelector(".cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCartCount = () => {
    if (cart.length) {
        cartItemCount.textContent = cart.length; // Update the count
        cartItemCount.classList.add("active");
    } else {
        cartItemCount.textContent = ""; // Reset if no items in the cart
        cartItemCount.classList.remove("active");
    }
};
updateCartCount()


// Function to display products
const displayProduct = () => {
    productContainer.innerHTML = products.map((product, index) => {
        return `
        <div class="product-item border border-gray-400 rounded-md overflow-hidden">
            <div class="relative">
                <img class="h-[300px] w-[100%] object-cover" src="${product.thumbnail}" alt="">
                <span class="cart-btn" data-index="${index}">
                    <i class=" ${product.atcStatus ? 'fa-solid fa-circle-check' : 'fa-solid fa-bag-shopping'}"></i>
                </span>
            </div>
            <div class="text-center p-4">
                <h4 class="">${product.title}</h4>
                <span class="text-[.9rem]">
                    <strong class="me-2">Rs. ${product.saleCost.toFixed(2)}</strong>
                    <span class="line-through text-gray-500">${product.cost ? 'Rs.' + product.cost.toFixed(2) : ''}</span>
                </span>
            </div>
        </div>
        `;
    }).join('');

    let atcBtns = document.querySelectorAll(".cart-btn");

    // Add click event listeners to each "Add to Cart" button
    atcBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const productIndex = btn.getAttribute('data-index');
            handleAddToCart(products[productIndex]);
            findCommonProductinLS();
            displayProduct();
        });
    });
};

// Function to check if a product is already in the cart and update atcStatus
const findCommonProductinLS = () => {
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < cart.length; j++) {
            if (cart[j].title === products[i].title) {
                products[i].atcStatus = true;
            }
        }
    }
};

// Function to add a product to the cart
const handleAddToCart = (product) => {
    let productFound = cart.some((item) => item.title === product.title);
    if (productFound) {
        alert("You already added this product in cart.");
    } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
    }
    updateCartCount()
};

// Cart modal
const openCartModal = () => {
    cartModal.classList.add("active")
}

const closeCartModal = () => {
    cartModal.classList.remove("active");
}

// Total price calculation
const GetTotalCost = () => {
    return cart.reduce((total, item) => {
        return total + (item.saleCost * item.count);
    }, 0);
}

const displayCartItems = () => {
    if (!cart.length) {
        return cartWrapper.innerHTML = "<span class='text-sm font-bold'>No products in the cart.</span>";
    } else {
        cartWrapper.innerHTML = cart.map((item, index) => {
            return `
            <li class="item flex justify-around items-start gap-0 border-b py-3">
                <div class="">
                    <img class="h-[70px] w-[60px] rounded-lg object-cover" src="${item.thumbnail}" alt="">
                </div>
                <div class="">
                    <h4 class="text-md mb-3"> ${item.title} </h4>
                    <div class="flex justify-center items-center">
                        <span class="px-2 bg-black text-1xl text-white font-bold rounded-2xl me-2 cursor-pointer p-count-decrement" data-index="${index}">-</span>
                        <span class="px-2 bg-white text-1xl  font-bold rounded-2xl me-2"> ${item.count} </span>
                        <span class="px-2 bg-black text-1xl text-white font-bold rounded-2xl me-2 cursor-pointer p-count-increment" data-index="${index}">+</span>
                        <span class="text-[.9rem] font-bold">Rs. ${item.saleCost.toFixed(2)} </span>
                    </div>
                </div>
                <div class="">
                    <i class="fa-solid fa-xmark text-1xl cursor-pointer delete-product" data-index="${index}"></i>
                </div>
            </li>
            `;
        }).join("");

        // Increment product count
        cartWrapper.querySelectorAll(".p-count-increment").forEach((btn) => {
            btn.addEventListener("click", () => {
                const productIdx = btn.getAttribute("data-index");
                let product = cart[productIdx];

                if (product) {
                    product.count++;
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                displayCartItems();
            });
        });

        // Decrement product count
        cartWrapper.querySelectorAll(".p-count-decrement").forEach((btn) => {
            btn.addEventListener("click", () => {
                const productIdx = btn.getAttribute("data-index");
                let product = cart[productIdx];

                if (product.count > 1) {
                    product.count--;
                    localStorage.setItem('cart', JSON.stringify(cart));
                }

                displayCartItems();
            });
        });

        // Delete product from cart
        cartWrapper.querySelectorAll(".delete-product").forEach((btn) => {
            btn.addEventListener("click", () => {
                const productIdx = parseInt(btn.getAttribute("data-index"));

                if (productIdx >= 0) {
                    const deletedProduct = cart[productIdx];
                    cart.splice(productIdx, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));

                    // Update atcStatus for the deleted product using a unique identifier
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].id === deletedProduct.id) {
                            products[i].atcStatus = false;
                            console.log(products);
                            break;
                        }
                    }

                    document.querySelector(".subtotal-amt").textContent = "0.00"
                }

                updateCartCount()
                displayProduct();
                displayCartItems();
            });
        });


        let totalCost = GetTotalCost();
        document.querySelector(".subtotal-amt").textContent = totalCost.toFixed(2)


    }
};

const handlePlaceOrder = () => {
    if(!cart.length){
        alert("No Products in the cart")
    }else{
        localStorage.removeItem("cart");
        cart = [];
    
        products.forEach(product => product.atcStatus = false);
    
        alert("Your order has been placed successfully.");
    
        cartModal.classList.remove("active");
    
        displayProduct();
        displayCartItems();
        updateCartCount();
    }
}


// Initialize by checking cart and displaying products
findCommonProductinLS();
displayProduct();
displayCartItems()
