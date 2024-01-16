$(function() {

	var $nav = $('#nav'),
		DESKTOP_BREAKPOINT = 960,
		screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	$("#nav-toggle").click(function() {

		$nav.addClass('active');
		$('#nav .nav').addClass('bounceInDown');
		$('#nav .nav').removeClass('bounceOutUp');

		$('.js-nav-close, .nav-overlay').bind('click', function() {
			$nav.removeClass('active');
			$('#nav .nav').removeClass('bounceInDown');
			$('#nav .nav').addClass('bounceOutUp');
			
			$('.js-nav-close, .nav-overlay').unbind();

		});
	});

	$(".btn-scroll-to").click(function() {

	    $('html, body').animate({
	        scrollTop: $($(this).attr("data-scrollTo")).offset().top
	    }, 400);
	});

	ion.sound({
	    sounds: [
	        {
	        	name: "bg-sound",
	        	loop: true
	    	}
	    ],

	    path: "media/",
	    preload: false,
	    multiplay: false,
	    volume: 1
	});

	// ion.sound.play("bg-sound");

	$("#sound-toggler").on('click', function() {
		ion.sound.pause("bg-sound");
		$(this).toggleClass("disabled");
	});

	$("a.fancybox-login").fancybox({
		'hideOnContentClick': true,
		'tpl' : {
	        closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>'
	     }
	});

	// FANCYBOX POP-UPs

	$("a.fancybox-feedback").fancybox({
		'hideOnContentClick': true,
		'tpl' : {
	        closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>'
	     },
		'margin' : 5
	});

	$("a.fancybox-invite").fancybox({
		'hideOnContentClick': true,
		'tpl' : {
	        closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>'
	     },
		'margin' : 5
	});

	$("a.fancybox-congratulations").fancybox({
		'hideOnContentClick' : true,
		'tpl' : {
	        closeBtn : null
	     },
		'margin' : 5
	});

	$("a.fancybox-wrongAnswer").fancybox({
		'hideOnContentClick' : true,
		'tpl' : {
	        closeBtn : null
	     },
		'margin' : 5
	});

	$("a.fancybox-correctAnswer").fancybox({
		'hideOnContentClick' : true,
		'tpl' : {
	        closeBtn : null
	     },
		'margin' : 5
	});

	$("a.fancybox-winner").fancybox({
		'hideOnContentClick' : true,
		'tpl' : {
	        closeBtn : null
	     },
		'margin' : 5
	});

	// PLACEHOLDERS

	// Показать placeholder если инпут пустой и спрятать если нет

	// $(".input-placeholder > input:empty, .input-placeholder > textarea:empty").on("blur", function() {
	// 	if($(this).val()) {
			
	// 		$(this).next().hide();
	// 	} else {
	// 		$(this).next().show();
	// 	}
	// });

	// TABS

	if (screenWidth > DESKTOP_BREAKPOINT) {

		var tabControls = $(".js-tab-control");

		tabControls.click(function() {

			$.each(tabControls, function() {

				if($(this).hasClass("active")) {

					$(this).removeClass("active");
				}
			});

			$(this).addClass("active");
		});
	}
});