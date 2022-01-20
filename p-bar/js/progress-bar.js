$(document).ready(() => {
    var cnt = 0;
    var c = 0;
    var i = setInterval(function () {
            $('.ld_p .cnt h1').html(c + '%');
            $('.ld_p .cnt hr').css('width', c + '%');
            cnt++;
            c++;
            if (cnt = 101) {
                clearInterval(i);
            }
        }, 50);
})