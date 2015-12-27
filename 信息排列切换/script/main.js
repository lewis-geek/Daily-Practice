/**
 * Created by Lewis on 15/11/23.
 */
window.onload = function () {
    var lIcon = document.getElementById('left_icon'),
        rIcon = document.getElementById('right_icon'),
        divList = document.getElementsByTagName('div');

    lIcon.onclick = function () {
        lIcon.className = 'left_icon_on';
        rIcon.className = 'right_icon_off';
        divList[2].className = 'box_content';
    };
    rIcon.onclick = function () {
        lIcon.className = 'left_icon_off';
        rIcon.className = 'right_icon_on';
        divList[2].className += ' box_content_small';
    };
};