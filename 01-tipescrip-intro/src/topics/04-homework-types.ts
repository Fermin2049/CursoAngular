interface SuperHero {
	name: string;
	age: number;
	address: Address;
	showAddress: () => string;
}

interface Address {
	street: string;
	contry: string;
	city: string;
}

const superHeroe: SuperHero = {
	name: 'Spiderman',
	age: 30,
	address: {
		street: 'Main St',
		contry: 'USA',
		city: 'NY',
	},
	showAddress() {
		return this.name + ', ' + this.address.city + ', ' + this.address.contry;
	},
};

const address = superHeroe.showAddress();
console.log(address);

export {};
