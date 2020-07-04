document.addEventListener("DOMContentLoaded", () => {
  // elems
  const body = document.querySelector('#body'),
        menuBtn = document.querySelector(".menuButton"),
        modalMenu = document.querySelector(".modalMenu"),
        modalMenuItems = document.querySelectorAll(".modalMenu-wrapList__item"),
        burgerElem = document.querySelector(".burger"),
        counter1 = document.querySelector(".counter1"),
        counter2 = document.querySelector(".counter2"),
        counter3 = document.querySelector(".counter3"),
        delayList = document.querySelectorAll(".delay");


  // data
        
  const delayArray = Array.prototype.slice.call(delayList),
        modalMenuItemsArray = Array.prototype.slice.call(modalMenuItems);

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
    burgerElem.classList.toggle('burgerActive')
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
});