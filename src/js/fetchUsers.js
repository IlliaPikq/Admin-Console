class Database {
    constructor(start, end) {
        this.start = start
        this.end = end
    }
    async loadUsers() {
        const apiURL = window.location.origin + '/api'
        const users = await fetch(apiURL + `?start=${this.start}&end=${this.end}`).then(res => res.json())
        const user_section = document.querySelector('.user_section')
        users.forEach((user) => {
            const temp = document.getElementsByTagName('template')[0];
            const clon = temp.content.cloneNode(true);
            const uName = clon.querySelector('.name');
            uName.textContent = user.name;
            const uCountry = clon.querySelector('.user_country');
            uCountry.textContent += user.country;
            const uAge = clon.querySelector('.user_age');
            uAge.textContent += user.age;
            const uProffesion = clon.querySelector('.user_profession');
            uProffesion.textContent += user.profession;
            const uCompany = clon.querySelector('.user_company');
            uCompany.textContent += user.company;
            user_section.appendChild(clon);
        });
        this.showButton()
        this.start += this.end
        this.end += this.end
    }
    showButton() {
        const btn = document.createElement('button');
        btn.className = 'loadMore';
        btn.textContent = 'Load More...';
        const user_section = document.querySelector('.user_section')
        user_section.appendChild(btn);
        const loadBtn = document.querySelector('.loadMore');
        loadBtn.addEventListener('click', (e) => {
            e.target.remove();
            Databse.loadUsers();
        })
    }
}   


const Databse = new Database(0, 25)
Databse.loadUsers()

