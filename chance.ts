import Chance from 'chance';
import { promises as fs } from 'node:fs';

const chance = Chance();

// async function deleteFile() {
// 	const deletingFiles = fs.unlink('C:/Users/Illia/Desktop/faker/userDB.json');

// 	await Promise.resolve(deletingFiles);

// 	console.log('files deleted');
// }

// deleteFile();


class User {
	constructor(
		public name: string,
		public age: number,
		public country: string,
		public company: string,
		public profession: string
	) {
		this.name = name;
		this.age = age;
		this.company = company;
		this.country = country;
		this.profession = profession;
	}
}

const jsonFile = {
	users: {},
};

for (let i = 0; i < 100; i++) {
	const uName = chance.name();
	const uAge = chance.age();
	const uCountry = chance.country({ full: true });
	const uProfession = chance.profession();
	const uCompany = chance.company();
	const user = new User(uName, uAge, uCountry, uCompany, uProfession);
	jsonFile.users[i] = user;
}

fs.writeFile('./userDB.json', JSON.stringify(jsonFile));