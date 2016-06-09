
/* adapt scale */

    function adaptScale(){

        function scaling(){

            $('.conteiner').each(function(){

                var itemHeight = $(this).outerHeight();
                var windowHeight = $(window).height();

                $(this).css({'transform':'scale(1)'});
                if(itemHeight > windowHeight){
                    var scalePerc = ((windowHeight * 100) / itemHeight).toFixed();
                    console.log(scalePerc);
                    $(this).css({'transform':'scale(0.'+scalePerc+')'});
                }

            });
        }

        scaling();

        $(window).resize(function(){

            scaling();

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