// console.log("inicio");

import { getHeroById } from "../bases/08-imports-exports";

// new Promise((resolve, reject) => {
//   console.log("cuerpo");

//   reject("Promesa resuelta con errores");
//   resolve('Promesa resuelta');
// })
//   .then( console.log )
//   .catch( console.log )

// console.log("fin");

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject("No existe el heroe");
    }, 1000);
  });
};

getHeroByIdAsync(100)
    .then(console.log)
    .catch(console.log);
