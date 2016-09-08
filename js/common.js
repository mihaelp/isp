$(document).ready(function() {

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".c-hamburger").toggleClass("is-active");
	}).append("<span>");

	$(".c-hamburger").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".sectionH").animated("fadeInUp", "fadeOut");
	$(".animation_1").animated("flipInY", "fadeOut");

	$(".toLeft").animated("fadeInLeft", "fadeOut");
	$(".toRight").animated("fadeInRight", "fadeOut");
	$(".center-t").animated("zoomInUp", "fadeOut");

	$(".mani").animated("fadeIn", "fadeOut");
	$(".mani").animated("rotateIn", "rotateOut");


	$(".top_nav a").mPageScroll2id({
		forceSingleHighlight: true,
		offset: 70,
		onStart:function(){
        myCustomFn1();
    },
    onComplete:function(){
        myCustomFn2();
    }
	});

	function myCustomFn1(){
		$(".top_nav ul li a:focus"),
		$(".top_nav ul li a:hover"),
		$(".top_nav ul li a:hover > p").css( {
			'color': '#5f1e98',
			'text-decoration': 'none'
		});
	}
	function myCustomFn2(){
		$('.top_nav ul li:hover').css({
			'background-color': 'none'
		});

		$(".top_nav ul li a:focus"),
		$(".top_nav ul li a:hover"),
		$(".top_nav ul li a:hover > p").css( {
			'color': '#F0EA55',
			'text-decoration': 'none'
		});
	}


	$(window).resize(function() {
		var w = $(window).width();
		if (w >= 768 && ($(".top_mnu").is(":visible"))){
			$(".top_mnu").fadeOut(600);
			$(".c-hamburger").removeClass("is-active")
		}
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {

			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

(function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
