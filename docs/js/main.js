$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('active');
  document.querySelector('body').classList.toggle('noscroll');
})