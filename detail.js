function imgGallery(){
    const mainImg = document.querySelector('.details__img'),
      smallImg = document.querySelectorAll('.details__small-img');

      smallImg.forEach((img) => {
        img.addEventListener('click', function()  {
        mainImg.src = this.src;
        });
});
}

imgGallery();

// swiper categories


const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab)=> {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
  });
  target.classList.add('active-tab');

  tabs.forEach((tab)=> {
    tab.classList.remove('active-tab');
  });
  tab.classList.add('active-tab');
  });
});


// ======= zoom image

// $(function (){
//   $('.details__img, .details__small-img').xzoom({
//     zoomWidth: 400,
//     xoffset: 10,
//     tint: '#333',
//   });
// });