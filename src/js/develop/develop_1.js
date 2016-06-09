
/* adapt scale */

    function adaptScale(){

        function scaling(){

            $('.conteiner').each(function(){

                var itemHeight = $(this).outerHeight();
                var windowHeight = $(window).height();

                $(this).css({'transform':'scale(1) translate(0px, 0px)'});
                if(itemHeight > windowHeight){
                    var scalePerc = windowHeight / itemHeight;
                    var scaleHeight = itemHeight * scalePerc;
                    var topTransform = itemHeight - scaleHeight;
                    $(this).css({'transform':'scale('+scalePerc+') translate(0px, -'+topTransform+'px)', 'height':scaleHeight+'px'});
                }

            });
        }

        scaling();

        $(window).resize(function(){
            clearTimeout(timer);
            timer = setTimeout({scaling();}, 1000);

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