function SetBtnPos() {
    /* Settings. */
    var minPxTop = 400;
    var minPxBottom = 400;
    var preferredBottom = 85;
    var btnHDist = 795;
    
    var newLeft, newBottom;
    newLeft = ($('#container').offset().left + btnHDist - $(window).scrollLeft());
    newBottom = preferredBottom;
    if (($(window).scrollTop() + $(window).height() - newBottom) < minPxTop) {
        newBottom = ($(window).height() - (minPxTop - $(window).scrollTop()));
    }
    else if (($(window).scrollTop() + $(window).height() - newBottom) > ($(document).height() - minPxBottom)) {
        newBottom = (minPxBottom - ($(document).height() - ($(window).scrollTop() + $(window).height())));
    }
    $('#backToTop').css({ left: newLeft, bottom: newBottom });
}

$(document).ready(function() {
    /* Settings. */
    var pxShowDist = 500;
    var fadeInTime = 1000;
    var fadeOutTime = 1000;
    var scrollSpeed = 1000;
    
    $(window).resize(function() {
        SetBtnPos();
    });
    
    $(window).scroll(function() {
        SetBtnPos();
        if ($(window).scrollTop() >= pxShowDist) {
            $('#backToTop').fadeIn(fadeInTime);
        }
        else {
            $('#backToTop').fadeOut(fadeInTime);
        }
    });
    
    $('#backToTop a').click(function() {
        $('html, body').animate({ scrollTop: 0 }, scrollSpeed);
        return false;
    });
});