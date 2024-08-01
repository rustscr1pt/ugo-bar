$(function() {
    $("a[href^='#']").click(function() { // For a smooth scroll to the top of the page.
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop : $(_href).offset().top+"px"});
        return false
    });
})