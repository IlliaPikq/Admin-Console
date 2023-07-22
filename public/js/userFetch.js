const url = '../data/userDB.json';

const user_section = document.querySelector('.user_section');
function fetchUsers(url, header = {}) {
	fetch(url, header)
		.then((res) => {
			console.log('count');
			return res.json();
		})
		.then((data) => {
			data.forEach((user) => {
				if (user.id < 5) {
					const temp = document.getElementsByTagName('template')[0];
					const clon = temp.content.cloneNode(true);
					const uName = clon.querySelector('.name');
					uName.textContent = user.name;
					const uID = clon.querySelector('.user_id');
					uID.textContent += user.id;
					const uAge = clon.querySelector('.user_age');
					uAge.textContent += user.age;
					const uCompany = clon.querySelector('.user_company');
					uCompany.textContent += user.company;

					user_section.appendChild(clon);
				}
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
