$(document).ready(function() {

	$('aside .right a').click(function () {
		$('#learn_more').slideToggle();
	});

	$('#readMore1').click(function () {
		$('#readMore1').hide();
		$('#read_more1').slideDown();
		$('#readLess1').slideDown();
	});

	$('#readLess1').click(function () {
		$('#readLess1').slideUp();
		$('#read_more1').slideUp();
		$('#readMore1').show();
	});

	$('#readMore2').click(function () {
		$('#readMore2').hide();
		$('#read_more2').slideDown();
		$('#readLess2').slideDown();
	});

	$('#readLess2').click(function () {
		$('#readLess2').slideUp();
		$('#read_more2').slideUp();
		$('#readMore2').show();
	});

});