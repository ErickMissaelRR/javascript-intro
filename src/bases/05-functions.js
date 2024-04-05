
// function sayHi(username) {
//     return `Hola ${username}`
// }

const hi = function sayHi(username) {
    return `Hola ${username}`
}

const hiArrow = (name) => `Hi ${name}`

const username = 'Erick'

// console.log( hiArrow( username ) );

const getUser = () => ({
    uid: 'jhgjfgj0907',
    username: 'Erick2894'
});

const heroesArray = [{
    id: 1,
    name: 'batman'
}, {
    id: 2,
    name: 'superman'
}]

const exist = (heroes) => {
    // const heroSelected = heroes.filter( hero => {
    //     console.log(hero);
    //     if(hero.id === 1){
    //         console.log(hero);
    //         return hero;
    //     }
    // }) 

    // return heroSelected;
    return heroes.find( hero => hero.id === 1);
}

console.log(exist( heroesArray ));