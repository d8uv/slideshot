"use strict";

$(document).ready(function () {
    var slidepos, winwidth, LEFT, RIGHT;
    slidepos = 0;
    winwidth = $(window).width();
    LEFT = -1;
    RIGHT = 1;

    //Initial Positioning
    $("div").each(function () {
        $(this).show();
        $(this).offset({left: slidepos});
        slidepos += winwidth;
    });
    slidepos = 0;


    function moveSlider(direction) {
        slidepos += direction * winwidth;

        if (slidepos < winwidth) {
            slidepos = 0;
        }
        if (slidepos > winwidth) {
            slidepos = winwidth;
        }

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
