'use strict';
document.addEventListener('DOMContentLoaded', () =>{
  // DOM elements
  const cartButton = document.querySelector("#cart-button"),
        modal = document.querySelector(".modal-cart"),
        btnCloseCart = document.querySelector(".close"),
        btnAuth = document.querySelector(".button-auth"),
        modalAuth = document.querySelector(".modal-auth"),
        btnCloseAuth = document.querySelector(".close-auth"),
        loginForm = document.querySelector("#loginForm"),
        loginInput = loginForm.querySelector("#login"),
        btnLogOut = document.querySelector(".button-out"),
        fieldUserName = document.querySelector(".user-name"),
        cardsRestaurants = document.querySelector(".cards-restaurants"),
        promoContainer = document.querySelector(".container-promo"),
        restaurantsContainer = document.querySelector(".restaurants"),
        menuContainer = document.querySelector(".menu"),
        menuHeading = menuContainer.querySelector(".menu-heading"),
        logo = document.querySelector(".logo"),
        buttonBack = document.querySelector(".button-back"),
        cardsMenu = document.querySelector(".cards-menu"),
        modalBody = document.querySelector(".modal-body"),
        totalPriceTag = modal.querySelector(".modal-pricetag"),
        btnClearCart = modal.querySelector(".clear-cart");

  // data

  let login = localStorage.getItem('userLogin');
  const cart = [];

  // functions

  const getData = async function(url) {

    const response = await fetch(url).then();
    if(!response.ok){
      throw new Error(`Ошибка по адресу ${url}. Статус: ${response.status}`);
    } else {
      console.log('Okey');
    }

    return await response.json();
  };


  const toggleCartModal = () => {
    modal.classList.toggle("is-open");
  };

  const toggleAuthModal = () => {
    modalAuth.classList.toggle("is-open");
  };

  const renderCart = () => {
    modalBody.textContent = '';
    totalPriceTag.textContent = '';
    cart.forEach(({ id, title, price, count }) => {
      const itemCart = `
        <div class="food-row">
					<span class="food-name">${title}</span>
					<strong class="food-price">${price}</strong>
					<div class="food-counter">
						<button class="counter-button counter-minus" data-id="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button counter-plus" data-id="${id}">+</button>
					</div>
        </div>`;
      
      modalBody.insertAdjacentHTML('afterbegin', itemCart);
    });

    const totalPrice = cart.reduce((result, item) => {
      return result + (parseFloat(item.price) * item.count);
    }, 0);

    totalPriceTag.textContent = totalPrice + ' ₽';
  };

  // Имитация авторизации


  const authorized = () => {

    const logOut = () => {
      login = '';
      localStorage.removeItem('userLogin');
      btnAuth.style.display = 'flex';
      cartButton.style.display = '';
      btnLogOut.style.display = '';
      fieldUserName.style.display = 'none';

      btnLogOut.removeEventListener("click", logOut);
      cartButton.removeEventListener("click", toggleCartModal);

      checkAuth();
    }

    fieldUserName.textContent = login;

    btnAuth.style.display = 'none';
    btnLogOut.style.display = 'flex';
    cartButton.style.display = 'flex';
    fieldUserName.style.display = 'inline';
    cartButton.addEventListener("click", () => {
      renderCart();
      toggleCartModal();
    });
    btnLogOut.addEventListener("click", logOut);
  };

  const notAuthorized = () => {

    const logIn = event => {
      event.preventDefault();
      if(!loginInput.value) {
        loginInput.style.background = '#DD5145';
        loginInput.value = 'Введите логин!';
        // loginInput.focus();
        loginInput.addEventListener("click", () => {
          loginInput.style.background = '';
          loginInput.value = '';
        });
      } else {
        login = loginInput.value;

        localStorage.setItem('userLogin', login);

        toggleAuthModal();

        btnAuth.removeEventListener("click", toggleAuthModal);
        btnCloseAuth.removeEventListener("click", toggleAuthModal);
        loginForm.removeEventListener("submit", logIn);
        loginForm.reset();
        checkAuth();
      }
    }

    btnAuth.addEventListener("click", toggleAuthModal);
    btnCloseAuth.addEventListener("click", toggleAuthModal);
    loginForm.addEventListener("submit", logIn);
  };

  const checkAuth = () => {
    if (login) {
      authorized();
    } else {
      notAuthorized();
    }
  };


  const createCardRestaurant = ({ image, name, time_of_delivery: time, stars, price, kitchen, products }) => {

    const card = `<a class="card card-restaurant" data-products="${products}" 
                                                  data-restaurant-name="${name}"
                                                  data-restaurant-stars="${stars}"
                                                  data-restaurant-price="${price}"
                                                  data-restaurant-kitchen="${kitchen}">
                    <img src="${image}" alt="${name}" class="card-image"/>
                    <div class="card-text">
                      <div class="card-heading">
                        <h3 class="card-title">${name}</h3>
                        <span class="card-tag tag">${time} мин</span>
                      </div>
                      <div class="card-info">
                        <div class="rating">
                          ${stars}
                        </div>
                        <div class="price">От ${price} ₽</div>
                        <div class="category">${kitchen}</div>
                      </div>
                    </div>
                  </a>`;
    cardsRestaurants.insertAdjacentHTML('beforeend', card);
  };

  const backToMainPage = () => {
    promoContainer.classList.remove('hide');
    restaurantsContainer.classList.remove('hide');
    menuContainer.classList.add('hide');
    buttonBack.removeEventListener("click", backToMainPage);
  };

  const createCardGood = ({ id, name, description, price, image }) => {
    let card = document.createElement('div');
    card.className = 'card';
    card.insertAdjacentHTML('beforeend', `<img src="${image}" alt="${name}" class="card-image"/>
                      <div class="card-text">
                        <div class="card-heading">
                          <h3 class="card-title card-title-reg">${name}</h3>
                        </div>
                        <!-- /.card-heading -->
                        <div class="card-info">
                          <div class="ingredients">${description}</div>
                        </div>
                        <!-- /.card-info -->
                        <div class="card-buttons">
                          <button class="button button-primary button-add-cart" data-product-id="${id}">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                          </button>
                          <strong class="card-price card-price-bold">${price} ₽</strong>
                        </div>
                      </div>`);
    cardsMenu.insertAdjacentElement('beforeend', card);
  };

  const createMenuHeading = (name, stars, price, kitchen) => {
    menuHeading.insertAdjacentHTML('beforeend', `
      <h2 class="section-title restaurant-title">${name}</h2>
      <div class="card-info">
        <div class="rating">${stars}</div>
        <div class="price">От ${price} ₽</div>
        <div class="category">${kitchen}</div>
      </div>`
    );
  };


  const openGoodsRestaurant = event => {
    const target = event.target;
    const restaurant = target.closest('.card-restaurant');
    const name = restaurant.dataset.restaurantName,
          stars = restaurant.dataset.restaurantStars,
          price = restaurant.dataset.restaurantPrice,
          kitchen = restaurant.dataset.restaurantKitchen;
    const urlDbProducts = restaurant.getAttribute('data-products');
    if (restaurant) {
      menuHeading.textContent = '';
      cardsMenu.textContent = '';
      promoContainer.classList.add('hide');
      restaurantsContainer.classList.add('hide');
      menuContainer.classList.remove('hide');
      createMenuHeading(name, stars, price, kitchen);
      buttonBack.addEventListener("click", backToMainPage);
      getData(`./db/${urlDbProducts}`).then(data => {
        data.forEach(products => {
          createCardGood(products);
        });
      });
    }
  };

  const addToCart = event => {
    const target = event.target;
    const btnAddToCart = target.closest('.button-add-cart');
    if (btnAddToCart) {
      const card = btnAddToCart.closest('.card'),
            title = card.querySelector('.card-title').textContent,
            price = card.querySelector('.card-price').textContent,
            id = card.querySelector('.button-add-cart').getAttribute('data-product-id');

            const food = cart.find(elem => {
              return elem.id === id;
            });
            
            if (food) {
              food.count += 1;
            } else {
              cart.push({
                id,
                title,
                price,
                count: 1
              });
            }
            console.log(cart);
    }
  };

  const changeCountFood = (event) => {
    const target = event.target;
    if(target.classList.contains('counter-minus')) {
      const food = cart.find((item) => {
        return item.id === target.dataset.id;
      })
      food.count--;
      if (food.count === 0) {
        cart.splice(cart.indexOf(food) ,1)
      }
      renderCart();
    }

    if(target.classList.contains('counter-plus')) {
      const food = cart.find((item) => {
        return item.id === target.dataset.id;
      })
      food.count++;
      renderCart();
    }
  };

  function init () {

    checkAuth();

    getData('./db/partners.json').then(data => {
      data.forEach(restaurant => {
        createCardRestaurant(restaurant);
      });
    });
    
    // listeners
    modalBody.addEventListener("click", changeCountFood);
    btnClearCart.addEventListener("click", () => {
      cart.lenght = 0;
      renderCart();
    });
    cardsRestaurants.addEventListener("click", openGoodsRestaurant);
    logo.addEventListener("click", backToMainPage);
    btnCloseCart.addEventListener("click", toggleCartModal);
    cardsMenu.addEventListener("click", addToCart);
  }

  init();

});
