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
function animationBlock(item){

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


           }
        });
    }
    checkForAnimate();
}

/*GO TO href*/
function goTo(){
    $('.header-list a').click(function(e){
        if ($(window).width() <= 1023) {
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

//bind example

function bindExample(){

    $(document).bind('click', bindFunc);

    function bindFunc(){

        $(document).unbind('click');

        console.log('unbinded');

        $.ajax({
            url:'ajax.php',
            method:'POST',
            success:function(){

                setTimeout(function(){
                    console.log('binded');
                    $(document).bind('click', bindFunc);
                },4000);

            }
        });
    };

}

/*header buter*/
function headeButer(menuMobile,toggleMenu){
    if(menuMobile){
        menuMobile.click(function(event) {
            if($(window).width()<1024-$.scrollbarWidth()){
                $(this).toggleClass('active');
                toggleMenu.toggleClass('active');
            }
        });

        $(document).on('click touchstart',function (event){
            if($(window).width()<1024-$.scrollbarWidth()){
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
    if(fullPageCreated === false) {
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
            $.fn.fullpage.moveSectionDown();
        });
    }
}
$(window).resize(function() {

    if ($(window).width() <= 1023) {
        fullPageCreated = false;
        $.fn.fullpage.destroy('all');
        $('.header').css('margin-bottom', "-"+$('.header').outerHeight()+'px');
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
    if ($(window).width() <= 1023) {
        $('.header').css('margin-bottom', "-"+$('.header').outerHeight()+'px');
         setTimeout(function(){
            $('section.main').addClass('show_animate');
        },1000);
    }
    goTo();
    headeButer($('.header .sendwich'),$('.header .header-list'));


    if ($(window).width() > 1024) {
        fullPage();
    }

});

$(window).resize(function() {

});

$(window).load(function(){

    changeViewport();

});