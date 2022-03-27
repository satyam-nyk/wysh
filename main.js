$(document).ready(function()
{
	// ROADMAP CAROUSEL
	if($(".rm-carousel").length)
	{
		$(".rm-carousel").slick({
			arrows: true,
			dots: false,
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			cssEase: 'linear',
			speed: 800,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1,
						adaptiveHeight: true
					}
				}
			]
		});
		
		$('.prev-nav').click(function(){ 
			$(this).parents('.container').find('.rm-carousel').slick('slickPrev');
		});
		
		$('.next-nav').click(function(e){
			e.preventDefault(); 
			$(this).parents('.container').find('.rm-carousel').slick('slickNext');
		});
	}
	
	// HOME-PAGE HEADER NAVIGATION
	if($('.home #header .main-nav').length > 0)
	{
		var topMargin = 160;
		if($('.navbar-toggle').is(':visible')){
			topMargin = 120;
		}
		
		$('.home #header .main-nav li').click(function(e){
			if($('.navbar-toggle').is(':visible')){
				$('.navbar-toggle').removeClass('active');
				$('.nav-bar').fadeOut();
				$('html').removeClass('overflowHidden');
				topMargin = 120;
			}
		});
		
		$('.home #header .main-nav').onePageNav({ currentClass: 'active', marginTop : topMargin, scrollSpeed: 900 });
	}
	
	// FOOTER NAVIGATION
	$('.footer .main-nav li a.gotohash').click(function(e)
	{
		e.preventDefault();
		var thisElement = $(this).attr('href');
		var topMargin = 160;

		$('.footer .main-nav li').removeClass('active');
		$('.footer .main-nav li a[href="'+thisElement+'"]').parent('li').addClass('active');
		
		$('html,body').animate({
		   scrollTop: $(thisElement).offset().top - topMargin
		},900);
	});

	$('.navbar-toggle').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$('.nav-bar').fadeIn();
			$('html').addClass('overflowHidden');
		}else{
			$(this).removeClass('active');
			$('.nav-bar').fadeOut();
			$('html').removeClass('overflowHidden');
		}
	});
	
	$.fancybox.defaults.hash = false;
});

$header = $('#header');
var scrollPx = 50;
$(window).scroll(function() 
{
	var scrollTop  = $(window).scrollTop();
	if ( scrollTop > scrollPx ){ 
		$header.addClass('sticky');
	}else{
		$header.removeClass('sticky');
	}
});

$(document).ready(function()
{
	$("#btnSubmit").on("click", function() {
		if (!$("#signupModal")[0].checkValidity()) {
			$("#signupModal")[0].reportValidity()
		}else{
			alert('Thank you! We will be in touch.');
			$.fancybox.close();
		}
	});
});

$(document).ready(function()
{
	if($(window).width() > 991)
	{
		// starting index
		var currTab = 2;
		
		$(".market-list li").on("click", function(){
			var currentIndex = $(this).index();
			var imgSrc = $(this).attr('data-img');
			$(".market-list li").removeClass('active');
			$(this).addClass('active');
			$('.market-img img').css({'opacity':'0'}).attr('src',imgSrc).animate({'opacity':'1'},1000);
			clearInterval(i);
			currTab = currentIndex + 1;
			i = setInterval(cycle, 3500);
		});
		
		// count of all tabs
		var totalTabs = $(".market-list > li").length;

		// function to pass to setInterval
		function cycle()
		{
			// simulate click on current tab
			$(".market-list > li").eq(currTab).click();

			// reset if we're at the last one
			if (currTab == totalTabs) {
				currTab = 0;
			}
		}

		// go!
		var i = setInterval(cycle, 3500);
	}
	else{
		$(".market-list li").removeClass('active');
	}
});