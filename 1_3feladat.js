const x = ["", 4, true];

//üres tömb deklarálása
const types = [];

//whichType függvény bemenő paramétere egy tömb
//a függvény belsejében egy for ciklussal iterálunk végig a paraméterként megadott tömb elemein
//mindegyik elemnek megnézzük a típusát és azt belerakjuk a types tömbbe
//a függvény visszatérése értékének a tömböt adjuk, és kiíratjuk a konzolra a függvényt a példa tömbre
function whichType(array) {
  for (let i = 0; i < array.length; i++) {
    types.push(typeof array[i]);
  }
  return types;
}

console.log(whichType(x));

//vagy még a függvény belsejében használjuk a consol.log-ot és kiíratjuk a types tömböt
//ekkor elég csak a függvényt meghívni a végén

// function whichType(array) {
//   for (let i = 0; i < array.length; i++) {
//     types.push(typeof array[i]);
//   }
//   console.log(types);
// }
// whichType(x);
