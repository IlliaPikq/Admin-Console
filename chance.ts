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
	name: string;
	age: number;
	company: string;
	proffesion: string;
	country: string;

	constructor(
		name: string,
		age: number,
		country: string,
		company: string,
		proffesion: string
	) {
		this.name = name;
		this.age = age;
		this.company = company;
		this.country = country;
		this.proffesion = proffesion;
	}
}

const jsonFIle = {
	users: {},
};

for (let i = 0; i < 100; i++) {
	const uName = chance.name();
	const uAge = chance.age();
	const country = chance.country({ full: true });
	const uProffesion = chance.profession();
	const uCompany = chance.company();
	const user = new User(uName, uAge, country, uCompany, uProffesion);
	jsonFIle.users[i] = user;
}

fs.writeFile('./public/data/userDB.json', JSON.stringify(jsonFIle));
