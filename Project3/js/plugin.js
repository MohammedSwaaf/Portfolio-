// Start of slider

$(document).ready(function(){
    // Edit time for slide
    $(".carousel").carousel({
        interval:2000
    });

// End of slider

// Start of Navbar

    var  slide = $("#slide");
    var nav = $(".navbar");
    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop();
        if (windowScroll>=slide.outerHeight())
        {
            nav.addClass('fixed');
        }
        else
        {
            nav.removeClass('fixed');
        }
    })

// End of Navbar

    var count = document.querySelector(".count");
    var count1 = document.querySelector(".count1");
    var count2 = document.querySelector(".count2");
    var count3 = document.querySelector(".count3");

    var countFlag = false;

    $(window).scroll(function(){
        if(!countFlag) {
            countFlag = true;

            $(count).countTo({
                from:0,
                to:1500,
                speed:4000,
                refreshInterval:30
            });
            $(count1).countTo({
                from:0,
                to:1600,
                speed:5000,
                refreshInterval:30
            });
            $(count2).countTo({
                from:0,
                to:1700,
                speed:6000,
                refreshInterval:30
            });
            $(count3).countTo({
                from:0,
                to:1800,
                speed:7000,
                refreshInterval:30
            });
        }
        else
        {
            stop();
        }

    })

});



// for Scroll Up
var scroll = $(".scroll-up")
$(window).scroll(function(){

    if($(this).scrollTop()>=700)
    {
        scroll.fadeIn();
    }
    else
    {
        scroll.fadeOut();
    }
    // animate for scroll

});
$(scroll).click(function(){
    $("html,body").animate({scrollTop:652},2000)
});



$(document).ready(function(){

    $(".navbar li a").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$('#' + $(this).data("scroll")).offset().top-70
        },1000);
    });
});

$(document).ready(function(){

    $(window).scroll(function () {
        var sr = $(window).scrollTop();
        console.log(sr);
    });
});