// cart
var cart = document.querySelector(".cart");
// open cart
function open_cart() {
    cart.classList.add("active");
}
// close cart
function close_cart() {
    cart.classList.remove("active");
}

// menu
var menu = document.querySelector(".menu");
// open menu
function open_menu() {
    menu.classList.add("active");
}
// close menu
function close_menu() {
    menu.classList.remove("active");
}
// change image
let bigimage = document.getElementById("BigImage");
function change_big_image(img) {
    BigImage.src = img;
}
// swiper img
var swiper = new Swiper(".mySwiper1 ", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
});

// swiper product
var swiper = new Swiper(".sale-sec", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
    },
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 2,
        },
    },
});

// var swiper = new Swiper(".sale-sec1", {
//     slidesPerView: 4,
//     spaceBetween: 30,

// })
// add product to cart
var All_product_cart;
var item_in_cart = document.querySelector(".item_in_cart");
let product_cart = [];
function add_to_cart(id, btn) {
    product_cart.push(All_product_cart[id]);
    btn.classList.add("active");

    get_item_cart();
}
let count_item = document.querySelector(".count-item");
let price_cart_head = document.querySelector(".price-cart-head");
let price_cart_total = document.querySelector(".price-cart-total");
let count_item_in_cart = document.querySelector(".count_item_in_cart");
function get_item_cart() {
    let total_price = 0;
    let item_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        item_c += `
    <div class="item-cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="item-content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="cart-price">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_item_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash"></i></button>
            </div>
`;
        total_price += product_cart[i].price;
    }
    item_in_cart.innerHTML = item_c;
    price_cart_head.innerHTML = "$" + total_price;
    count_item.innerHTML = product_cart.length;

    count_item_in_cart.innerHTML = `( ${product_cart.length} item in cart)`;
    price_cart_total.innerHTML = "$" + total_price;
}
// remove item from cart
function remove_item_from_cart(index) {
    product_cart.splice(index, 1);
    get_item_cart();
}
