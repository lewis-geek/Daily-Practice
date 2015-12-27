/**
 * Created by Lewis on 15/12/1.
 */
window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var animated = false;


    function showButton() {
        for (i in buttons) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on'
    }

    function animate(offset) {
        animated = true;
        var time = 300;
        var inteval = 30;
        var speed = offset / (time / inteval);
        var newLeft = parseInt(list.style.left) + offset;

        var go = function () {
            if ((speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval)
            }
            else {
                animated = false;
                list.style.left = newLeft + 'px';
                if (newLeft > -600) {
                    list.style.left = -3000 + 'px';
                } else if (newLeft < -3000) {
                    list.style.left = -600 + 'px';
                }
                animated = false
            }
        };
        go();
    }

    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3000)
    }

    function stop() {
        clearInterval(timer);
    }

    next.onclick = function () {
        if (index >= 5) {
            index = 1
        } else {
            index += 1
        }
        showButton();
        if (!animated) {
            animate(-600)
        }
    };

    prev.onclick = function () {
        if (index <= 1) {
            index = 5
        } else {
            index -= 1
        }
        showButton();
        if (!animated) {
            animate(600)
        }
    };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.className == 'on') {
                return;
            }
            var newIndex = parseInt(this.getAttribute('index'));
            var offSet = (newIndex - index) * -600;

            animate(offSet);
            index = newIndex;
            showButton();
        }
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
};