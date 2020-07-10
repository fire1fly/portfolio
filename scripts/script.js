document.addEventListener("DOMContentLoaded", function() {
  // elems
  const body = document.querySelector('#body'),
        menuBtn = document.querySelector(".menuButton"),
        modalMenu = document.querySelector(".modalMenu"),
        modalMenuItems = document.querySelectorAll(".modalMenu-wrapList__item"),
        burgerElem = document.querySelector(".burger"),
        offsetTopsElems = document.querySelectorAll(".offsetTop"),
        headerContainer = document.querySelector(".header"),
        navLinks = document.querySelectorAll(".nav-link"),
        firstScreenInner = document.querySelector(".first-screen__inner"),
        projectsBlock = document.querySelector(".projects"),
        numsBlock = document.querySelector(".nums"),
        aboutMeBlock = document.querySelector(".about-me"),
        numsItemNum = document.querySelectorAll(".nums-item-num"),
        skillsBlock = document.querySelector(".about-me-info-skills"),
        skillsBorders = document.querySelectorAll(".about-me-info-skills__text"),
        offerBlock = document.querySelector(".offer-block"),
        offerBlockItems = document.querySelectorAll(".offer-block__item"),
        delayList = document.querySelectorAll(".delay");

  

  // data
        
  const delayArray = Array.prototype.slice.call(delayList),
        modalMenuItemsArray = Array.prototype.slice.call(modalMenuItems),
        navLinksArray = Array.prototype.slice.call(navLinks),
        offsetTopsArray = Array.prototype.slice.call(offsetTopsElems);

  let countSwitch, skillsBorderSwitch, offerAnimSwitch;

  // elems for theme

  const themeSwitch = document.querySelector(".theme-switch"),
        themeSwitchText = document.querySelector(".theme-switch__text"),
        logo = document.querySelector(".logo__img"),
        imgList = document.querySelectorAll('img[data-filtered="false"]'),
        conactsIcons = document.querySelectorAll(".contacts-block__link"),
        feedbackInputs = document.querySelectorAll(".feedback-input");

  // funcs

  const countUpdate = function(count) {
    const counterNum = parseInt(count.dataset.num);
    let i = 0;
    setInterval(() => {
      if (i < counterNum) count.textContent = ++i + "+";
    }, 100);
  };

  delayArray.forEach(function(elem) {
    let delayValue = elem.dataset.delay;
    elem.style.animationDelay = delayValue + 's';
  });

  // calls and events

  menuBtn.addEventListener("click", function() {
    if (modalMenu.className == 'modalMenu') {
      modalMenu.classList.add('fadeIn');
    }
    modalMenu.classList.toggle('fadeIn');
    modalMenu.classList.toggle('fadeOut');
    burgerElem.classList.toggle('burgerActive');
    body.classList.toggle('scrollHide');
    modalMenuItemsArray.forEach(elem => {
      if (modalMenu.classList.contains('fadeIn')) {
        let delayValue = elem.dataset.delay;
        elem.style.animationDelay = delayValue + 's';
        elem.classList.add('fadeLeftMenu');
      } else {
        elem.style.animationDelay = '';
        elem.classList.remove('fadeLeftMenu');
      }
    });
  });

  window.addEventListener('scroll', function() {
    countSwitch = numsBlock.dataset.counted == 'false' ? true : false;
    skillsBorderSwitch = skillsBlock.dataset.animated == 'false' ? true : false;
    offerAnimSwitch = offerBlock.dataset.animated == 'false' ? true : false;

    if (document.body.clientWidth > 768) {
      // console.log(offerBlock.getBoundingClientRect().top);
      
      if (window.pageYOffset > 97) {
        firstScreenInner.style.paddingTop = '97px';
        firstScreenInner.style.boxSizing = 'content-box';
        headerContainer.classList.add("header-scroll");
        headerContainer.classList.add("slideFadeDown");
      } else {
        firstScreenInner.style.paddingTop = '0px';
        firstScreenInner.style.boxSizing = 'border-box';
        headerContainer.classList.remove("header-scroll");
        headerContainer.classList.remove("slideFadeDown");
      }

      navLinksArray.forEach(function(elem, i, array)  {
        if (window.pageYOffset > offsetTopsArray[i].offsetTop - 260 && 
          window.pageYOffset < offsetTopsArray[i].offsetTop + (offsetTopsArray[i].offsetHeight / 2)) {
          elem.classList.add("nav-link_active");
          if (array[i+1]) {
            array[i+1].classList.remove("nav-link_active");
          }
          if (array[i-1]) {
            array[i-1].classList.remove("nav-link_active");
          }
        }
      });

      if (offerBlock.getBoundingClientRect().top < 700 && offerAnimSwitch) {
        offerBlockItems.forEach(function(elem) {
          elem.classList.add(elem.dataset.animName);
        });
        offerBlock.dataset.animated = 'true';
      }
    }

    if (numsBlock.getBoundingClientRect().top < 790 && countSwitch) {
      numsItemNum.forEach(function(elem) {
        countUpdate(elem);
      });
      numsBlock.dataset.counted = 'true';
    } 
    
    if (aboutMeBlock.getBoundingClientRect().top < 300 && skillsBorderSwitch) {
      skillsBorders.forEach(function(elem) {
        elem.classList.add("_border-bottom");
      });
      skillsBlock.dataset.animated = 'true';
    }
  });


  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(event) {
        event.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 70; 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        if (modalMenu.classList.contains('fadeIn')) {
          modalMenu.classList.toggle('fadeOut');
          modalMenu.classList.toggle('fadeIn');
          burgerElem.classList.toggle('burgerActive');
          body.classList.toggle('scrollHide');
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });

  themeSwitch.addEventListener("click", function() {
    body.classList.toggle("light");
    body.classList.toggle("dark");
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 97) {
        logo.setAttribute('src', 'img/logo-dark.png');
      } else {
        logo.setAttribute('src', 'img/logo.png');
      }
    });
    if (body.classList.contains("dark")) {
      themeSwitchText.textContent = 'Светлая тема';
      imgList.forEach(function(elem) {
        elem.style.filter = 'invert(100%)';
      });
      conactsIcons.forEach(function(elem) {
        elem.dataset.filtered = "true";
      });
      feedbackInputs.forEach(function(elem) {
        elem.style.backgroundColor = '#0C0C0B'
      });
    } else {
      themeSwitchText.textContent = 'Тёмная тема';
      imgList.forEach(function(elem) {
        elem.style.filter = 'invert(0)';
      });
      conactsIcons.forEach(function(elem) {
        elem.dataset.filtered = "false";
      });
      feedbackInputs.forEach(function(elem) {
        elem.style.backgroundColor = '#fff'
      });
    }

  });
});
