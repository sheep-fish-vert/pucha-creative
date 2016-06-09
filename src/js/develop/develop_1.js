
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
                    console.log(itemHeight +' - '+scaleHeight+' - '+headerHeight);
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