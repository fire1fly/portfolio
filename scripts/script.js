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
        delayList = document.querySelectorAll(".delay");


  // data
        
  const delayArray = Array.prototype.slice.call(delayList),
        modalMenuItemsArray = Array.prototype.slice.call(modalMenuItems),
        navLinksArray = Array.prototype.slice.call(navLinks),
        offsetTopsArray = Array.prototype.slice.call(offsetTopsElems);
  let countSwitch, skillsBorderSwitch;

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
    skillsBorderSwitch = skillsBlock.dataset.bordered == 'false' ? true : false;

    if (document.body.clientWidth > 768) {
      // console.log(aboutMeBlock.getBoundingClientRect().top);
      
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
      skillsBlock.dataset.bordered = 'true';
    }
  });


  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(event) {
        event.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 50; 
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
