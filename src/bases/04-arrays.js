const newArray = [1, 2, 3, 4];

newArray.push(5);

newArray[5] = 6;

const newArray2 = [...newArray];

newArray2.push(7);

const newArray3 = newArray2.map( function(n){
    return n * 2
})

console.log(newArray, newArray2, newArray3);