/* google map */
    var map;

    function initialize() {
        var cordX = 48.181606;
        var cordY = 69.750934;

        var myLatlng = new google.maps.LatLng(cordX, cordY);
        var mapOptions = {
            zoom: 4,
            center: myLatlng,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            },
            styles:
                [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
            disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        /*маркер на svg*/
        var SQUARE_PIN = 'M13,0C5.8,0,0,5.1,0,11.3c0,5.9,11.7,20.9,12.2,21.6L13,34l0.8-1.1C14.3,32.1,26,17.2,26,11.3 C26,5.1,20.2,0,13,0z M13.3,17.2c-3.8,0-7-2.7-7-6.1c0-3.3,3.1-6,7-6s7,2.7,7,6C20.3,14.5,17.2,17.2,13.3,17.2z'

        for (var i = 0; i < pos.length ; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos[i][0], pos[i][1]),
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                icon: {                              //маркер на svg
                    path: SQUARE_PIN,
                    fillColor: '#864ad0',
                    fillOpacity: 1,
                    size: new google.maps.Size(24, 36),
                    anchor: new google.maps.Point(12, 36),
                    strokeColor: '#864ad0',
                    strokeWeight: 1
                },
            });
        }

        /*/анимация при клике на маркер*/

    }


/* google map */

/* add content */

    function loadMore() {
        $('.button-row a').click(function (event) {
            event.preventDefault();

            var current = $(this);
            var whatTab = $(this).attr('data-tab');
            var currentBlock = $(this).closest('li').children('ul');

            var contentInside = 'none';

            var res;
            var askContent = {
                action: 'addContent',
                whatTab: whatTab
            };

           // var actionUrl = 'js/json/addcontent.json';

            $.ajax({
                url: actionUrl,
                data: askContent,
                method: 'POST',
                success: function (data) {
                    //var res = JSON.parse(data);
                    res = data;
                    console.log(res);
                    if (res.isItMoreContent == true) {
                        current.closest('.button-row').remove();
                    }

                    contentInside = res.contentMore;
                    currentBlock.append(contentInside);
                }
            });

        });
    }

/* add content */


$(document).ready(function () {
    $('.pointers>ul>li>a').click(function (event) {
        event.preventDefault();

        var coordX  = parseFloat($(this).attr('data-coordX'));
        var coordY  = parseFloat($(this).attr('data-coordY')) ;
        var pos2 = new google.maps.LatLng(coordX , coordY);

        //   center: myLatlng,
        map.set('center', pos2);
        map.set('zoom', 16);

        //   center: myLatlng,
    });


    $('.services .top-block .mobile').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });


    $('.tabs-row .topest>ul>li').click(function () {
        $('.tabs-row .topest>ul>li').removeClass('active');
        $(this).addClass('active');
        var current = $(this).index();
        $('.tabs-row .disp>ul>li').removeClass('active');
        $('.tabs-row .disp>ul>li').eq(current).addClass('active');
    });

    loadMore();

    if ($('#map-canvas').length == 1 ) {
         google.maps.event.addDomListener(window, 'load', initialize);
    }

});


$(window).resize(function () {

});