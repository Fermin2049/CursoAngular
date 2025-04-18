function addNumbers(a: number, b: number) {
	return a + b;
}
const addNumberArrow = (a: number, b: number) => {
	return `${a + b}`;
};

function multiply(firtNumber: number, seconNumber?: number, base: number = 2) {
	return firtNumber * base;
}

interface Character {
	name: string;
	hp: number;
	showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
	character.hp += amount;
};

const strider: Character = {
	name: 'strider',
	hp: 50,
	showHp() {
		console.log(`hp: ${this.hp}`);
	},
};

healCharacter(strider, 20);

strider.showHp();

// const result: number = addNumbers(4, 4);
// const result2: string = addNumberArrow(4, 4);
// const result3: number = multiply(5);

// console.log({ result, result2, result3 });

export {};
