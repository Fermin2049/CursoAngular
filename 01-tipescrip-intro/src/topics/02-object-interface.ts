const skills: string[] = ['bash', 'Counter', 'healing'];

interface Character {
	name: string;
	hp: number;
	skills: string[];
	hometown?: string;
}

const strider: Character = {
	name: 'strider',
	hp: 100,
	skills: ['bash', 'conuter'],
};

strider.hometown = 'Revendell';

console.table(strider);

export {};
