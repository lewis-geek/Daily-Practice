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

  var nodelis = document.querySelectorAll('.choose-obj');
  var chooseContain = document.querySelector('.bottom-main-left .contain');
  var title = chooseContain.querySelector('h3');
  var text = chooseContain.querySelector('p');
  var img = chooseContain.querySelector('img');
  var chooseArr = [{
    title: '移动互联软件实验室',
    text: '内容1',
    img: ''
  }, {
    title: 'web前端开发',
    text: '内容2',
    img: ''
  }, {
    title: '物联网应用实验室',
    text: '内容3',
    img: ''
  }, {
    title: 'web后端开发',
    text: '内容4',
    img: ''
  }, {
    title: '移动电子商务实验室',
    text: '内容5',
    img: ''
  }, {
    title: '>> 查看更多',
    text: '内容6',
    img: ''
  }];

  [].concat(_toConsumableArray(nodelis)).forEach(function (elem, index) {
    elem.addEventListener('mouseenter', function () {
      title.textContent = chooseArr[index].title;
      text.textContent = chooseArr[index].text;
      img.setAttribute('src', chooseArr[index].img);
    });
  });
}
