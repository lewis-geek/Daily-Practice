$(document).ready(function () {
    var $button = $('.button_container button'),
        $recharge_permit = $('.recharge_permit'),
        $cancel = $('.permit .left_li'),
        $permit = $('.permit'),
        $bg = $('.bg');

    $button.click(function () {
        $bg.fadeIn();
        $recharge_permit.fadeIn();
    });

    $cancel.click(function () {
        $bg.fadeOut();
        $permit.fadeOut();
    })
});



