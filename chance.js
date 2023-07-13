import Chance from 'chance';
import { promises as fs } from 'fs';

const chance = Chance();

// async function deleteFile() {
// 	const deletingFiles = fs.unlink('C:/Users/Illia/Desktop/faker/userDB.json');

// 	await Promise.resolve(deletingFiles);

// 	console.log('files deleted');
// }

// deleteFile();

class User {
	static id = -1;

	constructor(name, age, company) {
		this.id = ++User.id;
		this.name = name;
		this.age = age;
		this.company = company;
	}
}

const arrayOfUsers = [];

for (let i = 0; i < 100; i++) {
	let uName = chance.name();
	let uAge = chance.age();
	let uCompany = chance.company();
	let user = new User(uName, uAge, uCompany);
	arrayOfUsers.push(user);
}

fs.writeFile('./userDB.json', JSON.stringify(arrayOfUsers));
