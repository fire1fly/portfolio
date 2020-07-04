"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.addEventListener('DOMContentLoaded', function () {
  var search = document.querySelector('.search');
  cartBtn = document.getElementById('cart'), wishlistBtn = document.getElementById('wishlist'), goodsWrapper = document.querySelector('.goods-wrapper'), cart = document.querySelector('.cart'), category = document.querySelector('.category'), cartCounter = cartBtn.querySelector('.counter'), wishlistCounter = wishlistBtn.querySelector('.counter'), cartWrapper = document.querySelector('.cart-wrapper');
  var wishlist = [];
  var goodsBasket = {};

  var loading = function loading(nameFunction) {
    var spinner = "<div id=\"spinner\">\n                                <div class=\"spinner-loading\">\n                                  <div>\n                                    <div>\n                                      <div></div>\n                                    </div>\t\n                                    <div>\n                                      <div></div>\n                                    </div>\n                                    <div>\n                                      <div></div>\n                                    </div>\n                                    <div>\n                                      <div></div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>";

    if (nameFunction === 'renderCard') {
      goodsWrapper.innerHTML = spinner;
    }

    if (nameFunction === 'renderBasket') {
      cartWrapper.innerHTML = spinner;
    }
  }; // Запрос на сервер


  var getGoods = function getGoods(goods, filter) {
    loading(goods.name);
    fetch('./db/db.json').then(function (response) {
      return response.json();
    }).then(filter).then(goods);
  }; // Генерация карточек товаров


  var createCardGoods = function createCardGoods(id, title, price, img) {
    var card = document.createElement('div');
    card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
    card.innerHTML = "<div class=\"card\">\n                        <div class=\"card-img-wrapper\">\n                          <img class=\"card-img-top\" src=\"./".concat(img, "\" alt=\"\">\n                          <button class=\"card-add-wishlist ").concat(wishlist.includes(id) ? 'active' : '', "\"\n                            data-goods-id=\"").concat(id, "\"></button>\n                        </div>\n                        <div class=\"card-body justify-content-between\">\n                          <a href=\"#\" class=\"card-title\">").concat(title, "</a>\n                          <div class=\"card-price\">").concat(price, " \u20BD</div>\n                          <div>\n                            <button class=\"card-add-cart\"\n                              data-goods-id=\"").concat(id, "\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                          </div>\n                        </div>\n                      </div>");
    return card;
  };

  var createCardGoodsBasket = function createCardGoodsBasket(id, title, price, img) {
    var card = document.createElement('div');
    card.className = 'goods';
    card.innerHTML = "<div class=\"goods-img-wrapper\">\n                        <img class=\"goods-img\" src=\"".concat(img, "\" alt=\"\">\n                      </div>\n                      <div class=\"goods-description\">\n                        <h2 class=\"goods-title\">").concat(title, "</h2>\n                        <p class=\"goods-price\">").concat(price, " \u20BD</p>\n\n                      </div>\n                      <div class=\"goods-price-count\">\n                        <div class=\"goods-trigger\">\n                          <button class=\"goods-add-wishlist ").concat(wishlist.includes(id) ? 'active' : '', "\"\n                          data-goods-id=\"").concat(id, "\"></button>\n                          <button class=\"goods-delete\" data-goods-id=\"").concat(id, "\"></button>\n                        </div>\n                        <div class=\"goods-count\">").concat(goodsBasket[id], "</div>\n                      </div>");
    return card;
  }; // Рендеры (отображение) карточек


  var renderCard = function renderCard(goods) {
    goodsWrapper.textContent = '';

    if (goods.length) {
      goods.forEach(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            price = _ref.price,
            imgMin = _ref.imgMin;
        goodsWrapper.appendChild(createCardGoods(id, title, price, imgMin));
      });
    } else {
      goodsWrapper.textContent = '❌ Упс! Товаров по вашему запросу не найдено. ❌';
    }
  }; // Рендер товаров в КОРЗИНЕ


  var renderBasket = function renderBasket(goods) {
    cartWrapper.textContent = '';

    if (goods.length) {
      goods.forEach(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title,
            price = _ref2.price,
            imgMin = _ref2.imgMin;
        cartWrapper.appendChild(createCardGoodsBasket(id, title, price, imgMin));
      });
    } else {
      cartWrapper.innerHTML = '<div id="cart-empty">Ваша корзина пока пуста</div>';
    }
  }; // Калькуляция


  var calcTotalPrice = function calcTotalPrice(goods) {
    // let sum =  0;
    var sum = goods.reduce(function (accum, item) {
      return accum + item.price * goodsBasket[item.id];
    }, 0); // for (const item of goods) {
    //   sum += item.price * goodsBasket[item.id];
    // }

    cart.querySelector('.cart-total>span').textContent = sum.toFixed(2);
  };

  var checkCounter = function checkCounter() {
    wishlistCounter.textContent = wishlist.length;
    cartCounter.textContent = Object.keys(goodsBasket).length;
  }; // фильтры и функции фильтрации


  var showCardBasket = function showCardBasket(goods) {
    var basketGoods = goods.filter(function (item) {
      return goodsBasket.hasOwnProperty(item.id);
    });
    calcTotalPrice(basketGoods);
    return basketGoods;
  };

  var showWishlist = function showWishlist(event) {
    event.preventDefault();
    getGoods(renderCard, function (goods) {
      return goods.filter(function (item) {
        return wishlist.includes(item.id);
      });
    });
  };

  var randomSort = function randomSort(item) {
    return item.sort(function () {
      return Math.random() - 0.5;
    });
  }; // Работа с хранилищами


  var getCookie = function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  var cookieQuery = function cookieQuery(get) {
    if (get) {
      if (getCookie('goodsBasket')) {
        Object.assign(goodsBasket, JSON.parse(getCookie('goodsBasket')));
      }

      checkCounter();
    } else {
      document.cookie = "goodsBasket=".concat(JSON.stringify(goodsBasket), "; max-age=86400e3");
    }
  };

  var storageQuery = function storageQuery(get) {
    if (get) {
      if (localStorage.getItem('wishlist')) {
        wishlist.splice.apply(wishlist, [Infinity, 0].concat(_toConsumableArray(JSON.parse(localStorage.getItem('wishlist'))))); // const wishlistStorage = JSON.parse(localStorage.getItem('wishlist'));
        // wishlistStorage.forEach(id => wishlist.push(id));
      }

      checkCounter();
    } else {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }; // События


  var closeCart = function closeCart(event) {
    var target = event.target;

    if (target === cart || target.classList.contains('cart-close') || event.keyCode === 27) {
      cart.style.display = '';
      document.removeEventListener('keyup', closeCart);
    }
  };

  var openCart = function openCart(event) {
    event.preventDefault();
    cart.style.display = 'flex';
    document.addEventListener('keyup', closeCart);
    getGoods(renderBasket, showCardBasket);
  };

  var chooseCategory = function chooseCategory(event) {
    event.preventDefault();
    var target = event.target;

    if (target.classList.contains('category-item')) {
      var cat = target.dataset.category;
      getGoods(renderCard, function (goods) {
        return goods.filter(function (item) {
          return item.category.includes(cat);
        });
      });
    }
  };

  var searchGoods = function searchGoods(event) {
    event.preventDefault();
    var input = event.target.elements.searchGoods;
    var inputValue = input.value.trim();

    if (inputValue !== '') {
      var searchString = new RegExp(inputValue, 'i');
      getGoods(renderCard, function (goods) {
        return goods.filter(function (item) {
          return searchString.test(item.title);
        });
      });
    } else {
      search.classList.add('error');
      setTimeout(function () {
        search.classList.remove('error');
      }, 2000);
    }

    input.value = '';
  };

  var toggleWishlist = function toggleWishlist(goodsId, elem) {
    if (wishlist.includes(goodsId)) {
      wishlist.splice(wishlist.indexOf(goodsId), 1);
      elem.classList.remove('active');
    } else {
      wishlist.push(goodsId);
      elem.classList.add('active');
    }

    checkCounter();
    storageQuery();
  };

  var addBasket = function addBasket(id) {
    if (goodsBasket[id]) {
      goodsBasket[id] += 1;
    } else {
      goodsBasket[id] = 1;
    }

    checkCounter();
    cookieQuery();
  };

  var removeGoods = function removeGoods(id) {
    delete goodsBasket[id];
    checkCounter();
    cookieQuery();
    getGoods(renderBasket, showCardBasket);
  }; // Хэндлеры(обработчики)


  var handlerGoods = function handlerGoods(event) {
    var target = event.target;

    if (target.classList.contains('card-add-wishlist')) {
      toggleWishlist(target.dataset.goodsId, target);
    }

    if (target.classList.contains('card-add-cart')) {
      addBasket(target.dataset.goodsId);
    }
  };

  var handlerBasket = function handlerBasket(event) {
    var target = event.target;

    if (target.classList.contains('goods-add-wishlist')) {
      toggleWishlist(target.dataset.goodsId, target);
    }

    ;

    if (target.classList.contains('goods-delete')) {
      removeGoods(target.dataset.goodsId);
    }

    ;
  };

  getGoods(renderCard, randomSort);
  storageQuery('get');
  cookieQuery('get');
  cartBtn.addEventListener('click', openCart);
  cart.addEventListener('click', closeCart);
  category.addEventListener('click', chooseCategory);
  search.addEventListener('submit', searchGoods);
  goodsWrapper.addEventListener('click', handlerGoods);
  wishlistBtn.addEventListener('click', showWishlist);
  cartWrapper.addEventListener('click', handlerBasket);
});