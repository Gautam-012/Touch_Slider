var menu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];
var mySwiper = new Swiper('.swiper-container', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + menu[index] + '</span>'
      );
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});