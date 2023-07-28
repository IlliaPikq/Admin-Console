const searchBar = document.querySelector('input.searchBar');

// const [userName, userCountry, userAge, userCompnay, userProffesion] = [
//     document.querySelectorAll('.name'),
//     document.querySelector('.user_country'),
//     document.querySelector('.user_age'),
//     document.querySelector('.user_company'),
//     document.querySelector('.user_proffesion'),
// ];
searchBar.addEventListener('input', (e) => {
	const searchValue = e.target.value.toLowerCase();
	console.log(searchValue);

	const userBlocksList = document.querySelectorAll('.user_block');
	userBlocksList.forEach((userBlock) => {
		const parentContainer = userBlock.parentElement;
		const [userName, userCountry, userAge, userCompnay, userProffesion] = [
			parentContainer.querySelector('.name'),
			parentContainer.querySelector('.user_country'),
			parentContainer.querySelector('.user_age'),
			parentContainer.querySelector('.user_company'),
			parentContainer.querySelector('.user_proffesion'),
		];
		const isVisible =
			userName.textContent.toLowerCase().includes(searchValue) ||
			userCountry.textContent.toLowerCase().includes(searchValue) ||
			userAge.textContent.toLowerCase().includes(searchValue) ||
			userCompnay.textContent.toLowerCase().includes(searchValue) ||
			userProffesion.textContent.toLowerCase().includes(searchValue);
		!isVisible
			? (userBlock.parentElement.style.display = 'none')
			: (userBlock.parentElement.style.display = 'block');
	});
});
