const progressInput = document.querySelector('#progressInput');
const progressOutput = document.querySelector('#progressOutput');
let currentValue;

progressInput.addEventListener('input', (e) => {
	currentValue = e.target.value;
	progressOutput.textContent = 'Value: ' + currentValue;
});

const filterForm = document.querySelector('#filterForm');
filterForm.addEventListener('submit', () => {
	// if there is not set minimum age, then return without changes
	if (!currentValue) return;
	const userBlocksList = document.querySelectorAll('.user_block');
	userBlocksList.forEach((userBlock) => {
		const parentContainer = userBlock.parentElement;
		const [userAge] = [parentContainer.querySelector('.user_age')];
		const isVisible = parseInt(userAge.textContent.slice(-2)) >= currentValue;
		!isVisible
			? (userBlock.parentElement.style.display = 'none')
			: (userBlock.parentElement.style.display = 'block');
	});
});
