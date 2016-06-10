function portfolioSlider(){
    if( $('.portfolio-wrap').length ) {

        $(window).resize(function(event) {
            setTimeout(function(){
                if( !$('.portfolio-wrap').hasClass('slick-slider') && $(window).width() <= 992){
                  sliker();
                }
                if( $(window).width()> 992 && $('.portfolio-wrap').is('.slick-initialized') ){
                  $('.portfolio-wrap').slick("unslick");
                }
            },500);

        });
        function sliker(){
            $('.portfolio-wrap').slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              swipeToSlide:true,
              adaptiveHeight:true,
              arrows: true,
              draggable:true,
              focusOnSelect:false,
              prevArrow:'<button type="button" class="slick-prev"><span></span></button>',
              nextArrow:'<button type="button" class="slick-next"><span></span></button>',
            });
        }

        if( $(window).width() <= 992){
            sliker();
        }
    }
}


$(document).ready(function(){
    portfolioSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
