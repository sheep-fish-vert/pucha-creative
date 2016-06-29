jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var scrollerO=jQuery.browser.webkit ? "body": "html";

$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};


/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scrollerO).stop().animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));
}

/*scroll animation*/
function animationBlock(item, someFunctions){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);


        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.95){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');
              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);



              if(typeof someFunctions == 'function'){
                    someFunctions();
              }

           }
        });
    }
    checkForAnimate();
}
var spincrementAnimation = true;

function sectionAnimFunc(){

    if( $('.section-animate.spincremention') && spincrementAnimation ){
        spincrementAnimationFunc();
    }
}



function spincrementAnimationFunc(){
    $('.section-animate.spincremention .spincrement-animate').each(function(index, el) {
        setTimeout(function(){
            $(el).spincrement({
                duration:2000
            });
        },900);

    });
    spincrementAnimation = false;
}



function typedAnimation() {
    if ( $('.section-animate-typed').length > 0 ){
        var show = true;
        $(window).on('scroll load resize', function() {
            if(!show) return false;

            var sectCount = $('.brend-book-block4');

            if( $(window).scrollTop() >= sectCount.offset().top || $(window).scrollTop() + $(window).height() == $(document).height() ){
                typedAnimationFunc();
                show = false;
            }
        });
        function typedAnimationFunc(){
            console.log('123');

            var timerMas = [];
            var points = [];

            $('.section-animate-typed .animate-typed').each(function(index, el) {
                var that = $(this);
                var text = $(el).attr('data-typed');
                var textLength = text.length;
                points[index] = 0;

                timerMas[index] = setInterval(function(){

                    that.text(that.text() + text[points[index]]);
                    points[index]++;
                    if(points[index]>=textLength){
                        clearInterval(timerMas[index]);
                    }
                }, 90);
            });

        }
    }

}





/*GO TO href*/
function goTo(){
    $('.header-list a').click(function(e){
        if ($(window).width() <= 1024) {
            e.preventDefault();
            var href = $(this).attr('href');
            href = href.replace(/^#?/,"");
            var target = $('section.'+href).offset().top;
            $('.header .sendwich, .header .header-list').removeClass('active');
            $(scrollerO).animate({scrollTop:target},500);
        }
    });
}

// cut text script

function cutText(){
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function(){
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if(text.length > value && value > 0){
            var newText = text.substring(0,value) + filler;
            $(this).text(newText);
        }
    });
};



/*header buter*/
function headeButer(menuMobile,toggleMenu){
    if(menuMobile){
        menuMobile.click(function(event) {
            if($(window).width()<=1024-$.scrollbarWidth()){
                $(this).toggleClass('active');
                toggleMenu.toggleClass('active');
            }
        });

        $(document).on('click touchstart',function (event){
            if($(window).width()<=1024-$.scrollbarWidth()){
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
                    {
                        toggleMenu.removeClass('active');
                        menuMobile.removeClass('active');
                    }
            }
        });
    }
}

/* expresion for numbers with spaces */

    function numberWithSpaces(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

/* /expresion for numbers with spaces */



var fullPageCreated = false;

function fullPage(){
    if(fullPageCreated === false && $('.fullpage').length > 0) {
        fullPageCreated = true;
        var header = $('.header').outerHeight();

        $('.fullpage').fullpage({
            //Navigation
            menu: '.header-list ol',
            anchors:['main', 'services','portfolio','our-team','contacts'],

            //Scrolling
            scrollingSpeed: 700,
            scrollBar: false,
            loopHorizontal: true,
            continuousVertical: false,

            scrollOverflow: false,
            responsiveWidth: 0,
            responsiveHeight: 0,
            loopTop: false,

            //Design
            controlArrows: true,
            verticalCentered: true,
            paddingTop: header+"px",
            sectionSelector: '.section',

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){
                if(index == 1){
                    $('.footer').addClass('top');
                    setTimeout(function(){
                        $('section.main').addClass('show_animate');
                    },1000);

                }else{
                    $('.footer').removeClass('top');
                }
            },
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

        $('.scroll-down').click(function(event) {
            $.fn.fullpage.moveTo(2, 0);
        });
    }
}

$(window).resize(function() {

    if ($(window).width() <= 1024 && $('.fullpage').length > 0) {
        fullPageCreated = false;
        $.fn.fullpage.destroy('all');
        $('.header:not(.header-inside)').css('margin-bottom', "-"+$('.header').outerHeight()+'px');
    }
    if ($(window).width() > 1024) {
        fullPage();
        $('.header').removeAttr('style');
    }

});

function changeViewport(){

    $(window).resize(function(){

        whatViewport();

    });

    function whatViewport(){

        var windowWidth = screen.width;
        var viewport = $("meta[name=viewport]");
        viewport.attr('content', 'width=device-width');
        if(windowWidth<=640){
            viewport.attr('content', 'width=640');
        }

    }

}



/* DOCUMENT READY  */
$(document).ready(function() {
    if ($(window).width() <= 1024) {
        $('.header:not(.header-inside)').css('margin-bottom', "-"+$('.header').outerHeight()+'px');
         setTimeout(function(){
            $('section.main').addClass('show_animate');
        },1000);
    }
    goTo();
    headeButer($('.header .sendwich'),$('.header .header-list'));


    if ($(window).width() > 1024) {
        fullPage();
    }

    animationBlock($('.section-animate'), sectionAnimFunc);
    typedAnimation();

});

$(window).resize(function() {

});

$(window).load(function(){

    changeViewport();

});