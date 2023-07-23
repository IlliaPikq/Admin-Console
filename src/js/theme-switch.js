console.log('hello from ts');
const themeSwitch = document.querySelector('.switch input');

themeSwitch.addEventListener('click', () => {
	const htmlTag = document.querySelector('html');
	if (htmlTag.className == 'light-mode') {
		htmlTag.className = 'dark-mode';
	} else {
		htmlTag.className = 'light-mode';
	}
	themeSwitch.classList.toggle('dark-mode', htmlTag.className == 'light-mode');
});
