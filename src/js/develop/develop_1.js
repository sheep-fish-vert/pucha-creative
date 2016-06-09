
/* adapt scale */

    function adaptScale(){

        function scaling(){

            var headerHeight = $('.header').outerHeight();

            var windowHeight = $(window).height() - headerHeight;

            $('.conteiner').each(function(){

                var itemHeight = $(this).outerHeight();


                $(this).css({'transform':'scale(1) translate(0px, 0px)'});
                if(itemHeight > windowHeight){
                    var scalePerc = windowHeight / itemHeight;
                    var scaleHeight = itemHeight * scalePerc;
                    var topTransform = (itemHeight - scaleHeight) - headerHeight;
                    $(this).css({'transform':'scale('+scalePerc+') translate(0px, -'+topTransform+'px)'});
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


$(document).ready(function(){



});

$(window).load(function(){

    adaptScale();

});

$(window).resize(function(){

});