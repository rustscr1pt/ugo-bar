function opposite_photo_src(photo_case, source) {
    switch (photo_case) {
        case "reversed":
            const reversed_name = source.split('/')[2].split('.svg')[0] + '%202.svg';
            const reversed_url = 'assets/images/' + reversed_name;
            console.log(reversed_url);
            return reversed_url
        case "original":
            const original_name = source.split('/')[2].split('%202')[0];
            const original_url = 'assets/images/' + original_name + '.svg';
            console.log(original_url);
            return original_url
    }
}

function release_animated_text(index) {
    const animation = "animate__fadeInRight"
    switch (index) {
        case 1:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">качество</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Полностью автоматизированная линия производства</span>`
            ]
        case 2:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">статус</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Вкусы разработаны и созданы в лабораториях по индивидуальному заказу.</span>`
            ]
    }
}

function ugo_black_exclusion(source_value) {
    if (source_value === 'assets/images/ugo_black%20copy.svg' || source_value === 'assets/images/ugo_black%20copy%202.svg') {
        return true
    }
    return false
}

function track_hovers() {
    $('.products-grid-layout').on('mouseenter', '.single-product-grid-layout', function() {
        console.log('hover');
        $(this).css("background-color", "black");
        // const to_replace = opposite_photo_src("reversed", $(this).find('.full-size-image').attr('src'));
        // $(this).find('.full-size-image').attr('src', to_replace);
        if (ugo_black_exclusion($(this).find('.full-size-image').attr('src'))) {
            $(this).find('.ugo-naming__black').css('color', 'white')
        }
        $(this).find('.decorative-brackets__inactive').css('color', 'white');
        $(this).find('.single-product-grid-layout__vert-align').children().css('color', 'white');
    });

    $('.products-grid-layout').on('mouseleave', '.single-product-grid-layout', function() {
        console.log('unhover');
        $(this).css("background-color", "white");
        // const to_replace = opposite_photo_src("original", $(this).find('.full-size-image').attr('src'))
        // $(this).find('.full-size-image').attr('src', to_replace);
        if (ugo_black_exclusion($(this).find('.full-size-image').attr('src'))) {
            $(this).find('.ugo-naming__black').css('color', 'black')
        }
        $(this).find('.decorative-brackets__inactive').css('color', 'black');
        $(this).find('.single-product-grid-layout__vert-align').children().css('color', 'black');
    });
}

function place_items() { // Place items in the grid.
    const collected = new CardBuilder();
    collected.release_vector().forEach(function(object) {
        $('.products-grid-layout').append(object)
    });
}

function track_slides() { // Track slides in the carousel
    $('#carouselExample').on('slide.bs.carousel', function on_slide(ev) {
        switch (ev.relatedTarget.id) {
            case "1":
                $('.principles-grid-layout__text-holder').empty();
                release_animated_text(1).forEach(function(object) {
                    $('.principles-grid-layout__text-holder').append(object)
                });
                break;
            case "2":
                $('.principles-grid-layout__text-holder').empty();
                release_animated_text(2).forEach(function(object) {
                    $('.principles-grid-layout__text-holder').append(object)
                })
                break;
        }
    })
}

$(function() {
    place_items();
    track_slides();
    track_hovers();
})