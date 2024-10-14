fetch("js/item.json")
    .then((response) => response.json())
    .then((data) => {
        const swiper_item_sale = document.getElementById("swiper_item_sale");
        const swiper_item_other = document.getElementById("swiper_item_other");
        const swiper_item_phone = document.getElementById("swiper_item_phone");
        All_product_cart = data;

        data.forEach((product) => {
            if (product.old_price) {
                swiper_item_sale.innerHTML += `
        <div class="product swiper-slide product1">
                        <div class="icons">
                            <span><i onclick="add_to_cart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <div class="img-product">
                            <img src="${product.img}">
                            <img src="${product.img_hover}" class="img-hover">
                        </div>
                        <h3><a href="item.html"> ${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">${product.old_price}</p>
                        </div>
                    </div>
                `;
            }
        });

        data.forEach((product) => {
            if (product.old_price) {
            
                swiper_item_other.innerHTML += `
        <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="add_to_cart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                    
                        <div class="img-product">
                            <img src="${product.img}">
                            <img src="${product.img_hover}" class="img-hover">
                        </div>
                
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
<h3><a href=""> ${product.name}</a></h3>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">${product.old_price}</p>
                        </div>
                    </div>
                `;
            }
        });
        data.forEach((product) => {
            if (product.old_price) {
                const present = Math.floor(
                    ((product.old_price - product.price) / product.old_price) * 100
                );
                swiper_item_phone.innerHTML += `
        <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="add_to_cart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sale-present">%${present}</span>
                        <div class="img-product">
                            <img src="${product.img}">
                            <img src="${product.img_hover}" class="img-hover">
                        </div>
                        <h3><a href=""> ${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">${product.old_price}</p>
                        </div>
                    </div>
                `;
            }
        });
    });
