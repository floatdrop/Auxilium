/*
 * GET home page.
 */

exports.index = function (req, res) {
	res.render('index', {
		title: 'Auxilium'
	});
};

exports.play = function (req, res) {
	res.redirect("http://aux-ekb.air-labs.ru/");
};