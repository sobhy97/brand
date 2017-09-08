/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    //Nice Scroll
    $("html").niceScroll();

	$('.carousel').carousel({
        interval: 6000
	});
    
	// Show Color Option Div When ClickThe gear
	$(".gear-check").click(function () {
		$(".color-option").fadeToggle();
	});
    
//Change Theme Color On Click
	var colorLi = $(".color-option ul li"), scrollButton = $("#scroll-top");
	colorLi
	    .eq(0).css("backgroundColor", "#E41B17").end()
	    .eq(1).css("backgroundColor", "#3498db").end()
        .eq(2).css("backgroundColor", "#f39c12").end()
        .eq(3).css("backgroundColor", "#2ecc71");
	colorLi.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});
    
	// Scroll TO TOP Variable
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
	});
    
	// Click On Button To Scroll Top
	scrollButton.click(function () {
		$("html,body").animate({ scrollTop : 0}, 600);
	});
});

// Loading Screen
$(window).load(function () {
    "use strict";
	//Loading Elements
	$(".loading-overlay .spinner").fadeOut(1000,
	    function () {
		    $("body").css("overflow", "auto");
		    $(this).parent().fadeOut(2000,
		        function () {
			//Show The scrol
			        $(this).remove();
		        });
	    });
});