export interface Passanger {
	name: string;
	childrens?: string[];
}

const passanger1: Passanger = {
	name: 'Fermin',
	childrens: ['Tomas', 'Alma'],
};
const passanger2: Passanger = {
	name: 'Jhon',
};

const printChildren = (passanger: Passanger) => {
	// Optional chaining
	const childrens = passanger.childrens?.length || 0;
	console.log(childrens);
};

printChildren(passanger2); // 2
