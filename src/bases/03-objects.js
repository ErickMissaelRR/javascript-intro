
const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: '40',
    address: {
        city: 'New York',
        zip: 546578,
        lng: 153.0192,
        lat: 89.0811
    }
}

const otherPerson = { ...person };
otherPerson.name = 'Peter';

console.log( person )
console.log( otherPerson )


