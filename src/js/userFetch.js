const url = '../../public/data/userDB.json';

const user_section = document.querySelector('.user_section');
function fetchUsers(url, header = {}) {
	fetch(url, header)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			Object.values(data.users).forEach((user) => {
				const temp = document.getElementsByTagName('template')[0];
				const clon = temp.content.cloneNode(true);
				const uName = clon.querySelector('.name');
				uName.textContent = user.name;
				const uCountry = clon.querySelector('.user_country');
				uCountry.textContent += user.country;
				const uAge = clon.querySelector('.user_age');
				uAge.textContent += user.age;
				const uProffesion = clon.querySelector('.user_proffesion');
				uProffesion.textContent += user.proffesion;
				const uCompany = clon.querySelector('.user_company');
				uCompany.textContent += user.company;
				user_section.appendChild(clon);
			});
			const btn = document.createElement('button');
			btn.className = 'loadMore';
			btn.textContent = 'Load More...';
			user_section.appendChild(btn);
			const loadBtn = document.querySelector('.loadMore');
			loadBtn.addEventListener('click', (e) => {
				e.target.remove();
				fetchUsers(url);
			});
		});
}
fetchUsers(url);
