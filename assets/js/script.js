$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(window).scroll(function() {
    if ($('#menuc').offset().top > 250) {
        $('#menuc').removeClass('bg-trans');
        $('#menuc').addClass('bg-black');
    } else {
        $('#menuc').removeClass('bg-black');
        $('#menuc').addClass("bg-trans");
    }
});