console.log('app.js');

var navigation = responsiveNav(".js-nav", {
	customToggle: "#js-nav-btn"
});

var slideout = new Slideout({
	'panel': document.getElementById('js-panel'),
	'menu': document.getElementById('js-menu'),
	'padding': 256,
	'tolerance': 70
});

// Toggle button
// document.querySelector('.js-slide-btn').addEventListener('click', function () {
// 	slideout.toggle();
// });

// function close(eve) {
// 	eve.preventDefault();
// 	slideout.close();
// }

// slideout
// 	.on('beforeopen', function () {
// 		this.panel.classList.add('m-panel-open');
// 	})
// 	.on('open', function () {
// 		this.panel.addEventListener('click', close);
// 	})
// 	.on('beforeclose', function () {
// 		this.panel.classList.remove('m-panel-open');
// 		this.panel.removeEventListener('click', close);
// 	});

// translate the fixed header
// var fixed = document.querySelector('.js-header');
// slideout.on('translate', function (translated) {
// 	fixed.style.transform = 'translateX(' + translated + 'px)';
// });
// slideout.on('beforeopen', function () {
// 	fixed.style.transition = 'transform 300ms ease';
// 	fixed.style.transform = 'translateX(256px)';
// });
// slideout.on('beforeclose', function () {
// 	fixed.style.transition = 'transform 300ms ease';
// 	fixed.style.transform = 'translateX(0px)';
// });
// slideout.on('open', function () {
// 	fixed.style.transition = '';
// });
// slideout.on('close', function () {
// 	fixed.style.transition = '';
// });