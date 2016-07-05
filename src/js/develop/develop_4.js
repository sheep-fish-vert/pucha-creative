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

function createWebsiteSlider(){
  $('.web_item_slider').slick({
    //autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide:true,
    arrows: true,
    draggable:true,
    focusOnSelect:false,
    dots: true,
    adaptiveHeight:false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: true
        }
      }
    ]
  });
}

function spincrementCounter() {
  if( $('.spincrement-counter' ).length>0){
    var show = true;
    $(window).on('scroll load resize', function() {
      if(!show) return false;

      var sectCount = $('.spincrement-counter');

      if( $(window).scrollTop()+250 >= sectCount.offset().top ){
        $('.spincrement').each(function(index, el) {
          $(el).spincrement({
            duration:2000
          });
        });
        show = false;
      }
    });
  }
}

function showTwoLevelMenuOnHeader(){
  $('.header .header-nav li').hover(function() {
    $(this).find('>ul').fadeIn(function(){
      $(this).parent().css('z-index', '10');
    });
  }, function() {
    //$('.header .header-nav li>ul').stop().slideUp();
  });

  $('.header .header-nav li > ul').hover(function() {

  }, function() {
    $(this).fadeOut(function(){
      $(this).parent().css('z-index', '2');
    });
  });
}


$(document).ready(function(){
    //showTwoLevelMenuOnHeader();
    spincrementAnimationFunc();
    spincrementCounter();
    portfolioSlider();
    createWebsiteSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});
