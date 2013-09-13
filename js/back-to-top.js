function setBtnPosition() {
    /* Minimum pixel distance from top and bottom. */
    var minTop = 400;
    var minBottom = 400;
    
    /* Preferred button position. */
    var left = 805;
    var bottom = 85;
    
    var newLeft = ($('#container').offset().left + left - $(window).scrollLeft());
    var newBottom = bottom;
    
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    
    if ((winScrollTop + winHeight - newBottom) < minTop) {
        newBottom = (winHeight - minTop + winScrollTop);
    }
    else if ((winScrollTop + winHeight - newBottom) > (docHeight - minBottom)) {
        newBottom = (minBottom - docHeight + winScrollTop + winHeight);
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
        setBtnPosition();
    });
    
    $(window).scroll(function() {
        setBtnPosition();
        
        if ($(window).scrollTop() >= pxShowDist) {
            $('#backToTop').fadeIn(fadeInTime);
        }
        else {
            $('#backToTop').fadeOut(fadeInTime);
        }
    });
    
    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, scrollSpeed);
        
        return false;
    });
});
