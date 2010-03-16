"use strict";

$(document).ready(function () {
    var slidepos, LEFT, RIGHT;
    slidepos = 0;
    LEFT = -1
    RIGHT = 1

    //Initial Positioning
    $("div").each(function () {
        $(this).show();
        $(this).offset({left: slidepos});
        slidepos += $(window).width();
    });
    slidepos = 0;


    function moveSlider(direction) {
        slidepos += direction * $(window).width();
        $(window).scrollLeft(slidepos);
    }


    $(window).click(function() {
            moveSlider(RIGHT);
    });

    $(window).keydown(function (e) {
        if (e.keyCode === 37) {
            moveSlider(LEFT);
        }
        else if (e.keyCode === 39) {
            moveSlider(RIGHT);
        }
    });

});
