function removeClass() {
	let wrapper = document.querySelector('#wrapper');
	wrapper.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == "accordion__close-img") {
			target.closest('.accordion__item').remove();
		} else {
			return;
		}

	});
}

document.addEventListener('DOMContentLoaded', removeClass);