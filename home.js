// Header Section

const navOpen = document.querySelector(".mobile-open-btn")
const navclose = document.querySelector(".mobile-close-btn")
const primaryNavigation = document.getElementById('primary-navigation');

navOpen.addEventListener('click' , ()=>{
          
    const visibility= primaryNavigation.getAttribute('data-visible');

    if(visibility === 'false') { 
        primaryNavigation.setAttribute('data-visible',true);
        navclose.setAttribute('data-visible', true );
    } else {
        primaryNavigation.setAttribute('data-visible',false);
        navclose.setAttribute('data-visible',false);
    
    }
    })

    navclose.addEventListener( "click" , ()=>{
        const visibility =primaryNavigation.getAttribute("data-visible");

        if (visibility === 'true'){
            primaryNavigation.setAttribute('data-visible','false');
            navclose.setAttribute('data-visible', false) ;
        }
    })

    // ========================== Cart Box ===============



// cart working

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener('click', () =>{
    cart.classList.add("active");
});

closeCart.addEventListener('click', () => {
    cart.classList.remove("active");
});

//start when the document is ready

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}

//start function
function start() {
    addEvents();
}

// ========== update & rerender =====

function  update(){
    addEvents();
    updateTotal();
}

// =========== add event =============

function addEvents(){
    //remove item from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener('click', handle_removeCartItem);
    });
    

    // change item quantity

    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach((input) => {
        input.addEventListener("change", handle_changeItemQuantity);
    })

    // add item to cart

    let addCart_btns = document.querySelectorAll(".cart_btn");
    addCart_btns.forEach((btn) => {
        btn.addEventListener("click", handle_addCartItem);
    });
}

//================== HANDLE EVENT FUNCTION ====================

function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product_title").innerHTML;
    let price = product.querySelector(".product_price").innerHTML;
    let imgSrc = product.querySelector(".product_img").src;
    console.log(title, price, imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };

    // add product to cart
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function handle_removeCartItem(){
    this.parentElement.remove();

    update();

}

function handle_changeItemQuantity(){
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value); // to keep it integer

    update();
}

//================= UPDATE & RERENDER FUNCTION ===========

function updateTotal(){
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("Nrs" , ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;        
    });

    total = Math.round(total * 100) / 100;

    totalElement.innerHTML = "Nrs" + total;
}


//=================== html components =========
function CartBoxComponent(title, price, imgSrc) { 
    return `
    <div class="cart-box">
    <img src=${imgSrc} class="cart-img" alt="">
    <div class="deatil-box">
      <div class="cart-product-title fs-poppins">${title}</div>
      <div class="cart-price fs-montserrat">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- remove cart -->
    <i class="uil uil-trash cart-remove"></i>
  </div> `;


}

// Login section
const navbarMenu = document.querySelector(".navbar ");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");



// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});



//=========================== search box ===========

let searchForm =  document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle( "active" );
}

//popup cointainer

const popup =document.querySelector(".popup");
const ClosePopup = document.querySelector(".popup-close");

if (popup) {
    ClosePopup.addEventListener("click", () => {
        popup.classList.add("hide-popup");
    });

    window.addEventListener("load", () => {
        setTimeout(()=> {
            popup.classList.remove("hide-popup");
        }, 1000);
    });
    
}