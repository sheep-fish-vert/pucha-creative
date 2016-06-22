
/* adapt scale */

    function adaptScale(){

        function scaling(){

            var headerHeight = $('.header').outerHeight();

            var windowHeight = $(window).height() - headerHeight;

            $('.conteiner').each(function(){

                $(this).css({'transform':'scale(1) translateZ(0px)', 'margin-top':'0px'});

                var itemHeight = $(this).outerHeight();

                if(itemHeight > windowHeight){
                    var scalePerc = windowHeight / itemHeight;
                    var scaleHeight = itemHeight * scalePerc;
                    var topTransform = (itemHeight - scaleHeight)/2;
                    $(this).css({'transform':'scale('+scalePerc+') translateZ(0px)', 'margin-top':'-'+topTransform+'px'});
                }

            });
        }

        scaling();

        var timer = null;

        $(window).resize(function(){
            clearTimeout(timer);
            timer = setTimeout(function(){scaling();}, 1000);

        });

    }

/* /adapt scale */

/* our-team */

    function ourTeam(){

        $('.slider-fotos-wrap').slick({
            arrows:false,
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            swipe:false,
            cssEase: 'linear',
            asNavFor:'.name-slider',
            responsive: [
                {
                  breakpoint: 993,
                  settings: {
                    arrows: true
                  }
                }
            ]
        });

        $('.slider-fotos-wrap').on('afterChange',function(slick, currentSlide){
            $('.slider-item-descript-wrap').removeClass('active');
            $('.slider-item-descript-wrap').eq(currentSlide.currentSlide).addClass('active');

            if($(window).width < 992){

                $('.name-slider .name-slider-item').removeClass('first-level second-level third-level fourth-level');

                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').addClass('first-level');
                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').prev().addClass('second-level');
                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').next().addClass('second-level');
                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').prev().prev().addClass('third-level');
                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').next().next().addClass('third-level');
                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').prev().prev().prev().addClass('fourth-level');
                $('.name-slider .name-slider-item[data-slick-index='+currentSlide.currentSlide+']').next().next().next().addClass('fourth-level');

            }

        });


        var nameSliderId = null;
        var slidesLength = 0;

        $('.name-slider').on('init', function(event, slick){

            $('.name-slider .slick-current').addClass('first-level');
            $('.name-slider .slick-current').prev().addClass('second-level');
            $('.name-slider .slick-current').next().addClass('second-level');
            $('.name-slider .slick-current').prev().prev().addClass('third-level');
            $('.name-slider .slick-current').next().next().addClass('third-level');
            $('.name-slider .slick-current').prev().prev().prev().addClass('fourth-level');
            $('.name-slider .slick-current').next().next().next().addClass('fourth-level');

            slidesLength = $('.name-slider .name-slider-item:not(.slick-cloned)').length;

        });

        $('.name-slider').slick({
            arrows:false,
            dots:false,
            infinite:true,
            speed:500,
            centerMode:true,
            vertical:true,
            slidesToShow:7,
            focusOnSelect: true,
            asNavFor:'.slider-fotos-wrap'
        });

        $(document).on('click','.name-slider-item', function(){
            nameSliderId = $(this).attr('data-slick-index');

            $('.name-slider .name-slider-item').removeClass('first-level second-level third-level fourth-level');

            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').addClass('first-level');
            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').prev().addClass('second-level');
            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').next().addClass('second-level');
            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').prev().prev().addClass('third-level');
            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').next().next().addClass('third-level');
            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').prev().prev().prev().addClass('fourth-level');
            $('.name-slider .name-slider-item[data-slick-index='+nameSliderId+']').next().next().next().addClass('fourth-level');

            if($(this).is('.slick-cloned')){
                var caruselId = Math.abs(Math.abs(nameSliderId) - slidesLength);

                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').addClass('first-level');
                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').prev().addClass('second-level');
                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').next().addClass('second-level');
                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').prev().prev().addClass('third-level');
                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').next().next().addClass('third-level');
                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').prev().prev().prev().addClass('fourth-level');
                $('.name-slider .name-slider-item[data-slick-index='+caruselId+']').next().next().next().addClass('fourth-level');

            }

        });

    }

/* /our-team */

/* slide-form */

    function slideForm(){

        $(document).on('click', '.slide-form-letter', function(){

            $(this).toggleClass('active');
            $('.slide-form-wrap').stop().slideToggle(300);

        });

    }

/* slide-form */

/* inside-smm progress lines */

    function progressLines(){

        $('.inside-smm-progress-bottom').each(function(){
            $(this).find('span').css({'width': $(this).attr('data-progress')+'%'});
        });

    }

/* /inside-smm progress lines */


$(document).ready(function(){

    slideForm();
    progressLines();

});

$(window).load(function(){

    adaptScale();
    ourTeam();

});

$(window).resize(function(){

});