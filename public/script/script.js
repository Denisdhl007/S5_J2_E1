//1

let nombre = 8.56
console.log(nombre)

//2
console.log(Math.round(nombre));

//3
console.log(Math.ceil(nombre));

//4
console.log(Math.floor(nombre));

//5
console.log(Math.trunc(nombre));






//6
console.log(Math.random(nombre));

function getRandomInt(max) {
    return Math.floor(Math.random());
}
console.log(getRandomInt(1));



//7

/*

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 100)
  console.log(rndInt)

  */


//8
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rndInt = randomIntFromInterval(1, 100)
  console.log(rndInt)


//9

let y = 5;
let x = y ** 2;
console.log(x);

//10
let z = Math.sqrt(9);
console.log(z);

//11
console.log(Math.abs(-1));

//12
console.log(Math.max(-2, 1000, 8, 57));

//13
console.log(Math.min(-2, 1000, 8, 57));