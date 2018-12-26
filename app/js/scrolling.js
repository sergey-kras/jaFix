
$window.on('load', function () {
    var blocks = $('[data-scroll="true"]');
    var $stepLine = $("#stepLine");
    var numberBlock = 0;
    var currentElement = blocks[0];
    var topOffset = $(currentElement).offset().top;
    var scrolling = false;
    
    nameControll($(currentElement).data('name'));
    $('body,html').animate({ scrollTop: topOffset }, 1500);
    scrollBarControll($(currentElement).data('color'));
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
        event.preventDefault();
        var delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
        if (scrolling) return;
        if (delta < 0) {
            scrollToBottom();
        }
        if (delta > 0) {
            scrollToTop();
        }
        scrollBarControll($(currentElement).data('color'));
        barsControll($(currentElement).data('color'));
        nameControll($(currentElement).data('name'));
        return;

    });

    $('.stepLine__step').on('click', function(event){
        console.log(event);
        $
    })


    function scrollToBottom() {
        if (!blocks[numberBlock + 1]) return;
        scrolling = true;
        numberBlock++;
        currentElement = blocks[numberBlock];
        topOffset = $(currentElement).offset().top;
        $('body,html').animate({ scrollTop: topOffset }, 500, function () { setTimeout(function(){
            scrolling = false 
        }, 500);});
    }

    function scrollToTop() {
        if (!blocks[numberBlock - 1]) return;
        scrolling = true;
        numberBlock--;
        currentElement = blocks[numberBlock];
        topOffset = $(currentElement).offset().top;
        $('body,html').animate({ scrollTop: topOffset }, 500, function () { setTimeout(function(){
            scrolling = false 
        }, 500);});
    }

    function scrollBarControll(color) {
        if (color != "default") $stepLine.addClass(color);
        else $stepLine.removeClass('_onWhite_background');

        $stepLine.find('._status_active').removeClass('_status_active');
        var $steps = $('.stepLine__step');
        $($steps[$steps.length - numberBlock]).addClass('_status_active');

        $('.stepLine__filling').css({ height: ($stepLine.height() - 5) / $steps.length * numberBlock })
    }

    function nameControll(name){
        $('.leftBar__text').html(name);
    }

    function barsControll(color) {
        var $tougleElements = $('[data-color-tougle="true"]');
        $tougleElements.map(function (el) {
            if (color != "default") $($tougleElements[el]).addClass(color);
            else $($tougleElements[el]).removeClass('_onWhite_background');
        });
    }
})