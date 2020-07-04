document.addEventListener('DOMContentLoaded', () => {
  let accordBlock = document.querySelector('.accordion-block');
  let accordTextPhoto = document.querySelector('#forPhotography');
  let accordTextCreat = document.querySelector('#forCreativity');
  let accordTextDesign = document.querySelector('#forDesign');

  accordBlock.addEventListener('click', event => {
    let id = event.target.id;
    if (id == 'photography') {
      accordTextPhoto.classList.toggle('openAccordText');
    } else if (id == 'creativity') {
      accordTextCreat.classList.toggle('openAccordText');
    } else if (id == 'design') {
      accordTextDesign.classList.toggle('openAccordText');
    }
  });
});