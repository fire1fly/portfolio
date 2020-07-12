(function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});

document.addEventListener("DOMContentLoaded", function() {
  // lazy loading init

  var bLazy = new Blazy();

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
        projectsBlocks = document.querySelector(".projects-blocks"),
        projectsBtn = document.querySelector(".projects-btn"),
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

  let countSwitch, skillsBorderSwitch, offerAnimSwitch, projectSlideSwitch;

  // elems for theme

  const themeSwitchNav = document.querySelector("#themeSwitchNav"),
        themeSwitchModalMenu = document.querySelector("#themeSwitchModalMenu"),
        themeSwitchTextModal = document.querySelector(".theme-switch__textModal"),
        themeSwitchTextNav = document.querySelector(".theme-switch__textNav"),
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

  const themeSwitcher = () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 97 && body.classList.contains("dark")) {
        logo.setAttribute('src', 'img/logo-dark.png');
      } else {
        logo.setAttribute('src', 'img/logo.png');
      }
    });
    if (body.classList.contains("dark")) {
      themeSwitchTextModal.textContent = 'Светлая тема';
      themeSwitchTextNav.textContent = 'Светлая тема';
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
      themeSwitchTextModal.textContent = 'Тёмная тема';
      themeSwitchTextNav.textContent = 'Тёмная тема';
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
  };

  const projectsSlideSwitch = () => {
    let bodyWidth = document.body.clientWidth;
    typeSreenAnim = (bodyWidth <= 425)   ? 'xsm' :
                    (bodyWidth <= 576)   ? 'sm'  :
                    (bodyWidth <= 768)  ? 'smd' :
                    (bodyWidth <= 992)  ? 'md'  :
                    (bodyWidth <= 1200) ? 'lg'  : 'xl';
                    
    projectSlideSwitch = projectsBlocks.dataset.slided == 'false' ? true : false;
    if(projectSlideSwitch) {
      projectsBlocks.style.animationName = `pSlideDown-${typeSreenAnim}`;
      projectsBlocks.dataset.slided = 'true';
      projectsBtn.textContent = 'Скрыть';
    } else {
      projectsBlocks.style.animationName = `pSlideUp-${typeSreenAnim}`;
      projectsBlocks.dataset.slided = 'false';
      projectsBtn.textContent = 'Показать больше';
    }
  };

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

  themeSwitchNav.addEventListener("click", themeSwitcher);
  themeSwitchModalMenu.addEventListener("click", themeSwitcher); 
  projectsBtn.addEventListener("click", projectsSlideSwitch);
});
