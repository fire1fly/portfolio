document.addEventListener("DOMContentLoaded", () => {
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
        counter1 = document.querySelector(".counter1"),
        counter2 = document.querySelector(".counter2"),
        counter3 = document.querySelector(".counter3"),
        delayList = document.querySelectorAll(".delay");
  // data
        
  const delayArray = Array.prototype.slice.call(delayList),
        modalMenuItemsArray = Array.prototype.slice.call(modalMenuItems),
        navLinksArray = Array.prototype.slice.call(navLinks),
        offsetTopsArray = Array.prototype.slice.call(offsetTopsElems);

  // funcs

  const countUpdate = (count) => {
    const counterNum = parseFloat(count.textContent);
    let i = 0;
    setInterval(() => {
      if (i < counterNum) count.textContent = ++i;
    }, 40);
  };

  delayArray.forEach(elem => {
    let delayValue = elem.dataset.delay;
    elem.style.animationDelay = delayValue + 's';
  });


  // calls and events

  // countUpdate(counter1);
  // countUpdate(counter2);
  // countUpdate(counter3);

  menuBtn.addEventListener("click", () => {
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

  if (document.body.clientWidth > 768) {
    window.addEventListener('scroll', () => { 
      if (window.pageYOffset > 77) {
        firstScreenInner.style.paddingTop = '77px';
        headerContainer.classList.add("header-scroll");
        headerContainer.classList.add("slideFadeDown");
      } else {
        firstScreenInner.style.paddingTop = '0px';
        headerContainer.classList.remove("header-scroll");
        headerContainer.classList.remove("slideFadeDown");
      }
      navLinksArray.forEach((elem, i, array) => {
        let scrollTop = offsetTopsArray[i].offsetTop;
        if (window.pageYOffset > offsetTopsArray[i].offsetTop - 70 && 
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
    });
  }

  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(event) {
        event.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 50; // если не нужен отступ сверху 
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
});