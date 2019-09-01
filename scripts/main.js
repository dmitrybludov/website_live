$(document).ready(function(){
	var $header = $('header');
	var $sticky = $header.before($header.clone().addClass("sticky"));

	$(window).on('scroll', function() {
		var scrollFromTop = $(window).scrollTop();
		$("body").toggleClass("scroll", (scrollFromTop > 350));
	})

	// MASONRY

	$('.grid').masonry({
		// options
		itelSelector: '.grid-item',
		columnWidth: 120,
		fitWidth: true,
		gutter: 0
	});

	// SLICK SLIDER

	$('.slider').slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		slidesToShow: 3,
		prevArrow:'<button type="button" class="slick-prev">Previous</button>',
		nextArrow:'<button type="button" class="slick-next">Next</button>'
	});

});