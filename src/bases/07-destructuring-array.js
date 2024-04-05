
const characters = ['Goku', 'Vegeta', 'Trunks'];

// const goku = characters[0];
// const trunks = characters[2];

// console.log( goku, trunks );

const [ goku, vegeta ] = characters;

console.log(goku, vegeta);

const returnArray = ([ letters, numbers]) => {
    return [letters, numbers]
}

const [ l, n ] = returnArray(['ERICk', 29]);

console.log(l, n);
