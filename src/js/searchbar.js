const searchBar = document.querySelector('input.searchBar');
searchBar.addEventListener('input', (e) => {
	const searchValue = e.target.value.toLowerCase();
	const userBlocksList = document.querySelectorAll('.user_block');
	userBlocksList.forEach((userBlock) => {
		const parentContainer = userBlock.parentElement;
		const [uName, uCountry, uAge, uCompnay, uProfession] = [
			parentContainer.querySelector('.name'),
			parentContainer.querySelector('.user_country'),
			parentContainer.querySelector('.user_age'),
			parentContainer.querySelector('.user_company'),
			parentContainer.querySelector('.user_profession'),
		];
		const isVisible =
		uName.textContent.toLowerCase().includes(searchValue) ||
		uCountry.textContent.toLowerCase().includes(searchValue) ||
		uAge.textContent.toLowerCase().includes(searchValue) ||
		uCompnay.textContent.toLowerCase().includes(searchValue) ||
		uProfession.textContent.toLowerCase().includes(searchValue);
		!isVisible
			? (userBlock.parentElement.style.display = 'none')
			: (userBlock.parentElement.style.display = 'block');
	});
});
