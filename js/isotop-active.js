//isotope active code

$('.gallery').isotope({
	itemSelector: '.photo',
	layoutMode: 'fitRows'
});



$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector=$(this).attr('data-filter');
	$('.gallery').isotope({
		filter: selector
	});
	return false;
});