/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos */

/* Random BackGround */

$(document).ready(function () {

    /******* Random BackGround *******/

    function backGroundRandomImage() {

        var imageArr = ["linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(../img/bg_01.jpg)", "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(../img/bg_02.jpg)", "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(../img/bg_03.jpg)"];

        var x = Math.floor(Math.random() * imageArr.length);

        var image = imageArr[x];

        $('body').css('background-image', image);

    }


    /******* Slick Carousel *******/

    function carousel() {

        $('.carousel').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });
        }

    backGroundRandomImage();

    carousel();

});
