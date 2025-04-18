function classDecotaror<T extends { new (...args: any[]): {} }>(
	constructor: T
) {
	return class extends constructor {
		newProperty = 'new property';
		hello = 'override';
	};
}

@classDecotaror
export class SiperClass {
	public myProperty: string = 'Hello world!';
	print() {
		console.log(this.myProperty);
	}
}

console.log('SiperClass', SiperClass);

const myClass = new SiperClass();
console.log('myClass', myClass);
