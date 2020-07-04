document.addEventListener('DOMContentLoaded', () => {
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.ready-arrow_next',
      prevEl: '.ready-arrow_prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  let swiperProject = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.project-arrow_next',
      prevEl: '.project-arrow_prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  const readyToprow = document.querySelector('.ready-toprow'),
      economCards = document.querySelector('#economCards'),
      mediumCards = document.querySelector('#mediumCards'),
      premiumCards = document.querySelector('#premiumCards'),
      btnEconom = document.querySelector('#econom');
      btnMedium = document.querySelector('#medium');
      btnPremium = document.querySelector('#premium');
  
  mediumCards.style.display = 'none';
  premiumCards.style.display = 'none';

  const toggleReadyBlock = event => {
    id = event.target.id;
    if(id == 'econom') {
      economCards.style.display = 'block';
      mediumCards.style.display = 'none';
      premiumCards.style.display = 'none';
      btnEconom.classList.add('ready-toprow__item_active');
      btnMedium.classList.remove('ready-toprow__item_active');
      btnPremium.classList.remove('ready-toprow__item_active');
    }
    if(id == 'medium') {
      economCards.style.display = 'none';
      mediumCards.style.display = 'block';
      premiumCards.style.display = 'none';
      btnEconom.classList.remove('ready-toprow__item_active');
      btnMedium.classList.add('ready-toprow__item_active');
      btnPremium.classList.remove('ready-toprow__item_active');
    }
    if(id == 'premium') {
      economCards.style.display = 'none';
      mediumCards.style.display = 'none';
      premiumCards.style.display = 'block';
      btnEconom.classList.remove('ready-toprow__item_active');
      btnMedium.classList.remove('ready-toprow__item_active');
      btnPremium.classList.add('ready-toprow__item_active');
    }
  };

  readyToprow.addEventListener('click', toggleReadyBlock);

});