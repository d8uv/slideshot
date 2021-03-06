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
        slidepos += direction * winwidth;

        if (slidepos < 0) {
            slidepos = 0;
        }
        if (slidepos > $(document).width() - winwidth) {
            slidepos = $(document).width() - winwidth;
        }

        $("body").animate({scrollLeft: slidepos}, 250);
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
