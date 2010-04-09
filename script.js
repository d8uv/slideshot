"use strict";

$(document).ready(function () {
    var slidepos, winwidth, LEFT, RIGHT;
    slidepos = 0;
    winwidth = $(window).width();
    LEFT = -1;
    RIGHT = 1;

    //Initial Positioning
    $("body > div").each(function () {
        $(this).show();
        $(this).offset({left: slidepos});
        slidepos += winwidth;
    });
    slidepos = 0;


    function moveSlider(direction) {
        var anim, destination;
        destination = slidepos + direction * winwidth;

        if (destination < winwidth) {
            destination = 0;
        }
        if (destination > winwidth) {
            destination = winwidth;
        }

        anim = setInterval(function () {
            slidepos += direction;
            $(window).scrollLeft(slidepos);
            if (destination === slidepos) {
                clearInterval(anim);
            }
        } , 1);
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
