// Script for animation of preloader at the site
$(function() {
    $(document.body).css({
        "height": "100%",
        "overflow-y": "hidden"
    });
    $(document).ready(function() {
        $(document.body).css("overflow-y", "auto")
        setTimeout(function() {
            $('.preloader-overlay, .preloader-main').fadeOut(250, function(){
                $('.preloader-overlay, .preloader-main').remove();
            })
        }, 250)
    });
})