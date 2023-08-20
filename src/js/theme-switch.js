const htmlTag = document.querySelector('html');

(window.matchMedia('(prefers-color-scheme: dark)').matches)
	? htmlTag.className = 'dark-mode'
	: htmlTag.className = 'light-mode'

const themeSwitch = document.querySelector('.switch input');
themeSwitch.addEventListener('click', () => {
	(htmlTag.className == 'light-mode') 
		? htmlTag.className = 'dark-mode'
		: htmlTag.className = 'light-mode';
});
