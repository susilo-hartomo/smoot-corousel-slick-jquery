$(document).ready(() => {
	$('.slider').slick({
		dots: false,
		arrows: true,
		centerMode: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: false,
		draggable: false,
		touch: false,
		appendArrow: $('.slider-button'),
		prevArrow: '.slider-prev',
		nextArrow: '.slider-next',
	});
});
