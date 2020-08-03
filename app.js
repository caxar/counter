// 29f1c3
// f03434

const result = document.querySelector('.counter'),
	  btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		let currentTarget = e.currentTarget.classList;
		if(currentTarget.contains('increase')) {
			count++;
		} else if(currentTarget.contains('decrease')) {
			count--;
		} else {
			count = 0;
		}

		if(count > 0) {
			result.style.color = '#29f1c3';
		}
		if(count < 0) {
			result.style.color = '#f03434';
		}

		if(count === 0) {
			result.style.color = '#fff';
		}
		result.innerText = count;
	});
});