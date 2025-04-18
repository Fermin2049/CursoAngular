interface AudioPlayer {
	audioVolume: number;
	songDuration: number;
	song: string;
	details: Details;
}

interface Details {
	author: string;
	year: number;
}

const audioPlayer: AudioPlayer = {
	audioVolume: 90,
	songDuration: 36,
	song: 'Mess',
	details: {
		author: 'Ed Sheeran',
		year: 2015,
	},
};

// // Destructuring
// const { audioVolume, songDuration, song, details } = audioPlayer;
// console.log(audioVolume); // 90
// console.log(songDuration); // 36
// console.log(song); // Mess
// console.log(details); // { author: 'Ed Sheeran', year: 2015 }

const [p1, p2, Trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('personaje 3', Trunks); // Trunks
export {};
