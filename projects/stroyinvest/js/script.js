$(document).ready(() => {

  let perc = 0.2, month = 6, result, total,
  monthly = 1666,
  money = 100000;


  $('.calc-programms').on('click', (event) => {
    let target = event.target;
    if(target.id === 'first'){
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'second') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'third') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'fourth') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'fifth') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    }
    
    result = Math.round(perc / 12 * month * money);
    total = result + money;
    monthly = parseInt(result / month);
    $('.calc-total span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-total small span').text(month);
    $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });
  
  $('.calc-range').on('change', (event) => {
    $('.calc-summ__invest-num span').text($('.calc-range').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    let target = event.target;
    money = +$('.calc-range').val();
    if(target.id === 'first'){
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'second') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'third') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'fourth') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } else if (target.id === 'fifth') {
      month = +target.getAttribute('data-month');
      perc = +target.getAttribute('data-perc');
    } 
    result = Math.round(perc / 12 * month * money);
    total = result + money;
    monthly = parseInt(result / month);
    +$('.calc-total span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-total small span').text(month);
    +$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });

  // Настройка slick slider
  $('.directions-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
      }
    },
    {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
    ]
  });

  // Выпадающие меню и категории
  let menuBtn = $('.top-nav__btn');
  let menu = $('.top-nav__menu');
  menuBtn.on('click', (event) => {
    event.preventDefault();
    menu.slideToggle(400);
  });

  $('.left-sidebar__btn').on('click', (event) => {
    event.preventDefault();
    $('.left-sidebar__menu').slideToggle(400);
  });

  $('.close').on('click', () => {
    $('.modal').css('display', 'none');
  });

});