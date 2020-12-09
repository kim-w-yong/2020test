$(document).ready(function () {



    for (var i = 0; i < 5; i++) {
        var ImgHtml = "<img src='img/img" + (i + 1) + ".png' style='width:100px;'>"
        $(".img-container").append(ImgHtml);
    }


})



$(function () {

    var $typing = $("#typing");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1000;

    var speed = 250;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


$(function () {

    var $typing = $("#typing1");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 150;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing2");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1250;

    var speed = 200;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing3");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 220;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing4");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1000;

    var speed = 300;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing5");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1250;

    var speed = 200;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


//메인텍스트는 여기까지
//메인텍스트는 여기까지
//메인텍스트는 여기까지
//메인텍스트는 여기까지



$(function () {

    var $typing = $("#typingA");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 50;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typingB");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 50;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


$(function () {

    var $typing = $("#typingC");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 30;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});



$(function () {

    var $typing = $("#typingD");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 30;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


//서브텍스트는 여기까지
//서브텍스트는 여기까지
//서브텍스트는 여기까지
//서브텍스트는 여기까지


$(function () {

    var $typing = $("#typingE");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1100;

    var speed = 3;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});



$(function () {

    var $typing = $("#typingF");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1200;

    var speed = 3;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);


    });
});




$(function () {

    var $typing = $("#typingG");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1200;

    var speed = 10;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});



$(function () {

    var $typing = $("#typingH");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1200;

    var speed = 10;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);





    });
});


setTimeout(
    function () {
        $(".aa").animate({ opacity: "1" }, 1);
    }, 7000);

setTimeout(
    function () {
        $(".bb").animate({ opacity: "1" }, 1);
    }, 7700);

setTimeout(
    function () {
        $(".cc").animate({ opacity: "1" }, 1);
    }, 8300);

setTimeout(
    function () {
        $(".dd").animate({ opacity: "1" }, 1);
    }, 8800);


setTimeout(
    function () {
        $(".ee").animate({ opacity: "1" }, 1);
    }, 7000);

setTimeout(
    function () {
        $(".ff").animate({ opacity: "1" }, 1);
    }, 7600);

setTimeout(
    function () {
        $(".gg").animate({ opacity: "1" }, 1);
    }, 8300);

setTimeout(
    function () {
        $(".ggg").animate({ opacity: "1" }, 1);
    }, 8300);

setTimeout(
    function () {
        $(".gggg").animate({ opacity: "1" }, 1);
    }, 7300);





/*블루스크린큰거*/
/*블루스크린큰거*/
/*블루스크린큰거*/
setTimeout(
    function () {
        $(".hh").animate({ opacity: "1" }, 1);
    }, 9300);
/*블루스크린큰거*/
/*블루스크린큰거*/


/*세로형*/
/*세로형*/
/*세로형*/
setTimeout(
    function () {
        $(".ii").animate({ opacity: "1" }, 1);
    }, 8600);

setTimeout(
    function () {
        $(".jj").animate({ opacity: "1" }, 1);
    }, 7600);
setTimeout(
    function () {
        $(".jjj").animate({ opacity: "1" }, 1);
    }, 8000);
/*세로형*/
/*세로형*/
/*세로형*/


/*QR코드*/
/*QR코드*/
/*QR코드*/
setTimeout(
    function () {
        $(".kk").animate({ opacity: "1" }, 1);
    }, 8200);

setTimeout(
    function () {
        $(".ll").animate({ opacity: "1" }, 1);
    }, 9000);
/*QR코드*/
/*QR코드*/
/*QR코드*/


/*ㄷ자*/
/*ㄷ자*/
/*ㄷ자*/
setTimeout(
    function () {
        $(".nn").animate({ opacity: "1" }, 1);
    }, 8000);

setTimeout(
    function () {
        $(".mm").animate({ opacity: "1" }, 1);
    }, 9200);

setTimeout(
    function () {
        $(".mmm").animate({ opacity: "1" }, 1);
    }, 8500);
/*ㄷ자*/
/*ㄷ자*/
/*ㄷ자*/




/*반복테스트*/
/*반복테스트*/
/*반복테스트*/
setTimeout(
    function () {
        $(".oo").animate({ opacity: "1" }, 1);
    }, 8000);

setTimeout(
    function () {
        $(".pp").animate({ opacity: "1" }, 1);
    }, 9200);

setTimeout(
    function () {
        $(".qq").animate({ opacity: "1" }, 1);
    }, 8000);

setTimeout(
    function () {
        $(".rr").animate({ opacity: "1" }, 1);
    }, 9200);
setTimeout(
    function () {
        $(".rrr").animate({ opacity: "1" }, 1);
    }, 8500);
/*반복테스트*/
/*반복테스트*/
/*반복테스트*/



/*블루스크린 메인텍스트*/
/*블루스크린 메인텍스트*/
/*블루스크린 메인텍스트*/
setTimeout(
    function () {
        $(".ss").animate({ opacity: "1" }, 1);
    }, 10500);

setTimeout(
    function () {
        $(".tt").animate({ opacity: "1" }, 1);
    }, 11000);

setTimeout(
    function () {
        $(".uu").animate({ opacity: "1" }, 1);
    }, 11500);

/*블루스크린 메인텍스트*/
/*블루스크린 메인텍스트*/
/*블루스크린 메인텍스트*/
