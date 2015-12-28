/**
 * Created by Lewis on 15/11/26.
 */
$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#1abc9c', '#2ecc71', '#4aa3df', '#9b59b6', '#9b59b6', '#34495e'],
    // sectionsColor: '#F2F2F2',
    controlArrows: false,
    verticalCentered: false,
    //resize: true,
    //                scrollingSpeed: 1000,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    //                lockAnchors: true,
    //                不能和menu同时存在
    css3: true,
    //                scrollBar: true,
    //                animateAnchor: false,
    menu: '#myMenu',
    navigation: true,
    //                navigationPosition: 'left',
    //                navigationTooltips: ['page1', 'page2', 'page3', 'page4'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
  //                scrollOverflow: true,
  //                afterLoad: function (anchorLink, index) {
  //                    console.log(anchorLink + ' ' + index)
  //                },
  //                onLeave: function (index, nextIndex, direction) {
  //                    console.log(index + ' ' + nextIndex + ' ' + direction)
  //                },
  //                afterRender: function () {
  //                    console.log('afterRender')
  //                },
  //                afterResize: function () {
  //                    console.log('afterResize')
  //                }
  })
  ;
});
