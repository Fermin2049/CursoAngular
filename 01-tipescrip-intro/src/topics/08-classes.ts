export class Person {
	// public name: string;
	// public address: string;

	// constructor() {
	// 	this.name = 'John Doe';
	// 	this.address = '123 Main St';
	// }

	constructor(public name: string, private address: string) {}
}

export class Hero extends Person {
	constructor(
		public alterEgo: string,
		public age: number,
		public realNAme: string
	) {
		super(realNAme, 'New York'); // Call the constructor of the Person class
	}
}

const person = new Hero('Aironman', 45, 'Tony Stark');
console.log(person);
