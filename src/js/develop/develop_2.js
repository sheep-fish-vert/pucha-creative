/* google map */    
    
    function initialize() {
        var cordX = 51.159110;
        var cordY = 71.469678;
        var myLatlng = new google.maps.LatLng(cordX,cordY);
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
            var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

                /*маркер на svg*/
            var SQUARE_PIN = 'M13,0C5.8,0,0,5.1,0,11.3c0,5.9,11.7,20.9,12.2,21.6L13,34l0.8-1.1C14.3,32.1,26,17.2,26,11.3 C26,5.1,20.2,0,13,0z M13.3,17.2c-3.8,0-7-2.7-7-6.1c0-3.3,3.1-6,7-6s7,2.7,7,6C20.3,14.5,17.2,17.2,13.3,17.2z'
            //больше - http://map-icons.com/
            /*/маркер на svg*/

            //var image = 'images/footer-contact-marker.png';   // иконка картинкой

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                //icon: image //  иконка картинкой
                icon: {                              //маркер на svg
                    path: SQUARE_PIN,
                    fillColor: '#864ad0',
                    fillOpacity: 1,
                    strokeColor: '#864ad0',
                    strokeWeight: 1
                },
            });

            /*анимация при клике на маркер*/
            marker.addListener('click', toggleBounce);
            function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
            }
            /*/анимация при клике на маркер*/

            /*По клику открываеться инфоблок*/
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });


        
      }
      google.maps.event.addDomListener(window, 'load', initialize);

/* google map */  

$(document).ready(function(){
    
      
});

$(window).load(function(){
    
});

$(window).resize(function(){

});