window.onload = function() {
  $('.rolling-contain').slick({
    autoplay: true,
    dots: true,
    arrows: false
  });
  $('.rolling-news-contain').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true
  })
  $('.main-rolling').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  })

  'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var divs = document.querySelectorAll('.remote-function > div')

  Array.prototype.slice.call(divs)

  divs.forEach(function(div) {
    div.addEventListener('click',handleRemote)
  })

  function handleRemote() {
    location.assign('./login.html')
  }

  // [].concat(_toConsumableArray(nodelis)).forEach(function (elem, index) {
  //   elem.addEventListener('mouseenter', function () {
  //     title.textContent = chooseArr[index].title;
  //     text.textContent = chooseArr[index].text;
  //     img.setAttribute('src', chooseArr[index].img);
  //   });
  // });
}
