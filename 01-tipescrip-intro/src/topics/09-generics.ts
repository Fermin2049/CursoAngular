export function whatMyTipe<T>(argument: T): T {
	return argument;
}

let amiString = whatMyTipe<string>('Hello world!');
let amiNumber = whatMyTipe<number>(123);
let amiBoolean = whatMyTipe<boolean>(true);
let amiArray = whatMyTipe<number[]>([1, 2, 3, 4, 5]);

console.log(amiString.split('')); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
console.log(amiNumber.toFixed()); // 123
console.log(amiBoolean.valueOf()); // true
console.log(amiArray.join('-')); // 1-2-3-4-5
