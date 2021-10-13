var elem = document.querySelector('.news__items');
var msnry = new Masonry( elem, {
  // options
    itemSelector: '.news__item-img',
    gutter: 30,
    horizontalOrder: true,
    percentPosition: true,
});