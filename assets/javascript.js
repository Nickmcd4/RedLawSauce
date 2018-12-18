////////////Nav Collapse//// Or with jQuery////////////

$(document).ready(function () {
    $('.sidenav').sidenav();
});

///////////////////////carousel//// with jQuery////////



$(document).ready(function () {

    $('.carousel').carousel();

    setInterval(function () {

        $('.carousel').carousel('next');

    }, 3000);



});