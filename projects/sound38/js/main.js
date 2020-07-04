document.addEventListener('DOMContentLoaded', () => {

  let blockPort = document.querySelector('.portfolio-block');
  let portBtn = document.querySelector('.portfolio__btn');
  let modalPortTitleElem = document.querySelector('.modalPort-title');
  let modalPortSubtitleElem = document.querySelector('.modalPort-subtitle');
  let modalPortContent = document.querySelector('.modalPort-content');
  let modalPortInnerText = document.querySelector('.modalPort__innerText');
  let modalPortTitle = '';
  let modalPortSubtitle = '';
  let modalPortContentImagesHTML = ``;
  let bodyWidth = document.body.clientWidth;

  let swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });

  const appendModalPortTitle = title => {
    const titleModalPort = document.createElement('h2');
    titleModalPort.className = 'modalPort-title';
    titleModalPort.textContent += title;
    return titleModalPort;
  };

  const appendModalPortSubtitle = subtitle => {
    const subtitleModalPort = document.createElement('span');
    subtitleModalPort.className = 'modalPort-subtitle';
    subtitleModalPort.textContent += subtitle;
    return subtitleModalPort;
  };

  const portHandler = event => {
    let id = event.target.id;
    if (id == '18') {
      modalPortTitle = 'Лыжня России 2020';
      modalPortSubtitle = 'Озвучивание';
      modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/7.jpg">
                                          <img src="img/portfolio/modal/${id}/7.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/8.jpg">
                                          <img src="img/portfolio/modal/${id}/8.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/9.jpg">
                                          <img src="img/portfolio/modal/${id}/9.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/10.jpg">
                                          <img src="img/portfolio/modal/${id}/10.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/11.jpg">
                                          <img src="img/portfolio/modal/${id}/11.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/12.jpg">
                                          <img src="img/portfolio/modal/${id}/12.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '17') {
        modalPortTitle = 'Масленица 2016 ';
        modalPortSubtitle = 'Модный квартал';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if(id == '16') {
        modalPortTitle = 'Иргупс ';
        modalPortSubtitle = 'Озвучивание';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '15') {
        modalPortTitle = 'Юбилей ';
        modalPortSubtitle = 'Ресторан Париж';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '14') {
      modalPortTitle = 'СИБАВИАСТРОЙ ';
        modalPortSubtitle = 'День города';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '13') {
      modalPortTitle = 'Open Air ';
        modalPortSubtitle = 'Шелехов';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/7.jpg">
                                          <img src="img/portfolio/modal/${id}/7.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '12') {
      modalPortTitle = 'Фестиваль ';
        modalPortSubtitle = 'ТБ Елочка';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/7.jpg">
                                          <img src="img/portfolio/modal/${id}/7.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/8.jpg">
                                          <img src="img/portfolio/modal/${id}/8.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/9.jpg">
                                          <img src="img/portfolio/modal/${id}/9.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/10.jpg">
                                          <img src="img/portfolio/modal/${id}/10.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/11.jpg">
                                          <img src="img/portfolio/modal/${id}/11.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/12.jpg">
                                          <img src="img/portfolio/modal/${id}/12.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/13.jpg">
                                          <img src="img/portfolio/modal/${id}/13.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '11') {
      modalPortTitle = 'HARLEY DAVIDSON ';
        modalPortSubtitle = 'Рекламная акция';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '10') {
      modalPortTitle = 'НХЛ 2015';
        modalPortSubtitle = 'Озвучивание фуршета НХЛ 2015 ';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/7.jpg">
                                          <img src="img/portfolio/modal/${id}/7.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/8.jpg">
                                          <img src="img/portfolio/modal/${id}/8.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/9.jpg">
                                          <img src="img/portfolio/modal/${id}/9.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/10.jpg">
                                          <img src="img/portfolio/modal/${id}/10.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/11.jpg">
                                          <img src="img/portfolio/modal/${id}/11.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/12.jpg">
                                          <img src="img/portfolio/modal/${id}/12.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/13.jpg">
                                          <img src="img/portfolio/modal/${id}/13.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    } else if (id == '9') {
      modalPortTitle = 'НОВОГОДНИЙ КОРПОРАТИВ ';
        modalPortSubtitle = 'Сбербанк, 2014 год';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/7.jpg">
                                          <img src="img/portfolio/modal/${id}/7.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/8.jpg">
                                          <img src="img/portfolio/modal/${id}/8.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/9.jpg">
                                          <img src="img/portfolio/modal/${id}/9.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '8') {
      modalPortTitle = 'OPEN AIR Истлэнд ';
        modalPortSubtitle = 'Горнолыжная база, Листвянка, 2014';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '7') {
      modalPortTitle = 'ФАРМЭКОНОМ ';
        modalPortSubtitle = 'Корпоративный Open Air';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '6') {
      modalPortTitle = 'JOHN DEERE ';
        modalPortSubtitle = 'Годовщина John Deere';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '5') {
      modalPortTitle = 'Отчетное Выступление Учащихся Киношколы, Иркутск';
        modalPortSubtitle = '';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '4') {
      modalPortTitle = 'Свадьба 2012 ';
        modalPortSubtitle = 'Отель Байкал, 2012';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '3') {
      modalPortTitle = 'ЗЕЛЕНЫЙ МАРАФОН ';
        modalPortSubtitle = 'Сбербанк, Иркутск';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '2') {
      modalPortTitle = 'Свадьба 2014 ';
        modalPortSubtitle = 'Свадьба, август 2014';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/1.jpg">
                                          <img src="img/portfolio/modal/${id}/1.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
                                      
    } else if (id == '1') {
      modalPortTitle = 'Разное ';
        modalPortSubtitle = 'Фото с других мероприятий';
        modalPortContentImagesHTML= `<div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/2.jpg">
                                          <img src="img/portfolio/modal/${id}/2.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/3.jpg">
                                          <img src="img/portfolio/modal/${id}/3.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/4.jpg">
                                          <img src="img/portfolio/modal/${id}/4.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/5.jpg">
                                          <img src="img/portfolio/modal/${id}/5.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/6.jpg">
                                          <img src="img/portfolio/modal/${id}/6.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/7.jpg">
                                          <img src="img/portfolio/modal/${id}/7.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/8.jpg">
                                          <img src="img/portfolio/modal/${id}/8.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/9.jpg">
                                          <img src="img/portfolio/modal/${id}/9.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/10.jpg">
                                          <img src="img/portfolio/modal/${id}/10.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/11.jpg">
                                          <img src="img/portfolio/modal/${id}/11.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/12.jpg">
                                          <img src="img/portfolio/modal/${id}/12.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/13.jpg">
                                          <img src="img/portfolio/modal/${id}/13.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>
                                      <div class="modalPort-content__item">
                                        <a data-fancybox="port-gallery-${id}" href="img/portfolio/full/${id}/14.jpg">
                                          <img src="img/portfolio/modal/${id}/14.jpg" class="modalPort-content__img" alt="${modalPortTitle + modalPortSubtitle}">
                                        </a>
                                      </div>`;
    }

    modalPortInnerText.prepend(appendModalPortTitle(modalPortTitle));
    modalPortInnerText.append(appendModalPortSubtitle(modalPortSubtitle));
    modalPortContent.innerHTML = modalPortContentImagesHTML;
  };

  const clearModalPortHTML = () => {
    modalPortInnerText.innerHTML = '';
    modalPortContent.innerHTML = '';
  };

  $('.menuButton').on('click', () => {
    $('.modalMenu').fadeToggle(400);
    $('body').toggleClass('scrollHide');
    $('.burger').toggleClass('burgerActive');
  });


  $('.trigger').on('click', function(event) {
    event.preventDefault();
    $('.modalPort').toggleClass('open');
    $('.main-container').toggleClass('blur-it');
    $('body').toggleClass('scrollHide');
    portHandler(event);
    return false;
  });

  $('.btn-close').on('click', function() {
    $('.modalPort').toggleClass('open');
    $('.main-container').toggleClass('blur-it');
    $('body').toggleClass('scrollHide');
    clearModalPortHTML();
  });

  $('.portfolio__btn').on('click', () => {
    if (bodyWidth > 1170) {
      if (portBtn.classList.contains('portfolio__btnHide')) {
        $('.portfolio-block').css('height', '505px');
        $('.portfolio__btn').toggleClass('portfolio__btnHide');
      } else {
        $('.portfolio-block').css('height', '1500px');
        $('.portfolio__btn').toggleClass('portfolio__btnHide');
      }
    } else if (bodyWidth >=800 ) {
        if (portBtn.classList.contains('portfolio__btnHide')) {
          $('.portfolio-block').css('height', '505px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        } else {
          $('.portfolio-block').css('height', '2300px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        }
    } else if (bodyWidth >= 0) {
        if (portBtn.classList.contains('portfolio__btnHide')) {
          $('.portfolio-block').css('height', '1000px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        } else {
          $('.portfolio-block').css('height', '4500px');
          $('.portfolio__btn').toggleClass('portfolio__btnHide');
        }
    }
  });

  $('.scrollTo').on('click', function(event) {
    event.preventDefault();
    $('.modalMenu').fadeOut(400);
    $('.burger').removeClass('burgerActive');
    $('body').removeClass('scrollHide');
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });
    return false;
  });

});