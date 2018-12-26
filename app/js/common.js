var $window = $(window);

$('body').on('mousemove', function (e) {
    var block = $('.main');
    var width = block.width();
    var height = block.height();
    var xPosition = e.pageX;
    var yPosition = e.pageY;
    block.css({
        'background-position-x': width / 2 * 0.1 - width * 0.07 - xPosition * 0.07,
        'background-position-y': height / 2 * 0.1 - height * 0.07 - yPosition * 0.07
    })
});



// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.container__works').isotope({
    itemSelector: '.works__item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});


$(window).on('load', function () {
    $('.peopleSlider').owlCarousel({
        nav: true,
        items: 4,
        loop: true,
        dots: false,
        responsiveBaseElement: 'peopleSlider',
        responsiveClass: true,
        navText: ['<img src="./img/mainDisplay/contentElements/slidearrow.svg">', '<img src="./img/mainDisplay/contentElements/slidearrow.svg">'],
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            },
            960: {
                items: 4,
            },
        }
    });
    $('.peopleSlider').addClass('owl-carousel');
});

