$(function () {
	$("#play-btn").click(function () {
		window.location.href = "/play";
	});

	$("#help-btn").click(function() {
		$('html, body').animate({scrollTop: 1600}, 1000);
	});

	$("#back-btn").click(function() {
		$('html, body').animate({scrollTop: $("#content").offset().top}, 1000);
	});

	skrollr.init({
		forceHeight: false
	});
});