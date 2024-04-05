import superheroes, { owners } from '../data/heroes';

const [ dc, marvel ] = owners;

export const getHeroById = ( id ) => superheroes.find( hero => hero.id === id);

export const getHeroesByOwner = ( owner ) => superheroes.filter( hero => hero.owner === owner);

//#region in other file import this functions
/* 

import { getHeroById, getHeroesByOwner } from "./bases/08-imports-exports";

console.log( getHeroById(2) );

console.log( getHeroesByOwner('Marvel'));

*/

//#endregion