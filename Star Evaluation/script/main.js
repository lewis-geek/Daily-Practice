/**
 * Created by Lewis on 15/11/20.
 */
window.onload = function () {
    one.onmouseover = function () {
        this.className = "heart-hover";
        two.className = "heart-off";
        three.className = "heart-off";
        four.className = "heart-off";
        five.className = "heart-off";
    };

    two.onmouseover = function () {
        this.className = "heart-hover";
        one.className = "heart-on";
        three.className = "heart-off";
        four.className = "heart-off";
        five.className = "heart-off";
    };

    three.onmouseover = function () {
        this.className = "heart-hover";
        one.className = "heart-on";
        two.className = "heart-on";
        four.className = "heart-off";
        five.className = "heart-off";
    };

    four.onmouseover = function () {
        this.className = "heart-hover";
        one.className = "heart-on";
        two.className = "heart-on";
        three.className = "heart-on";
        five.className = "heart-off";
    };

    five.onmouseover = function () {
        this.className = "heart-hover";
        one.className = "heart-on";
        two.className = "heart-on";
        three.className = "heart-on";
        four.className = "heart-on";
    };
};

