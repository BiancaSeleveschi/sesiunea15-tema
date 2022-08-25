// Afisati de fiecare data cand trebuie sa verificati rezultatul (in afara functiei)
//a. Declara un obiect product1 cu urmatoarele atribute si afiseaza-l: title, calories, price, isExpired
let product1 = {
  title: "Mozzarella",
  calories: 200,
  price: 4,
  isExpired: false,
}

// b.Adauga un atribut nou: category la product
product1.category = "chesse";

// c.Schimba valoarea atributului price a produsului
product1.price = 6;

// d Adauga un atribut nou: fabricationYear
product1.fabricationYear = 2022;

// e Schimba valoarea atributului calories
product1.calories = 212;

// f Verifica daca a trecut mai mult de 2 ani de la anul fabricatiei, atunci modifica atributul isExpired a produsului.
if ((2022 - product1.fabricationYear) > 2) {
  product1.isExpired = true;
}


// g Creaza un alt obiect product2 cu alte valori (bineinteles cu toate atributele de mai sus: title, calorie, price, isExpired, category, fabricationYear)
let product2 = {
  title: "Chocolate",
  calories: 500,
  price: 7,
  isExpired: false,
  category: "sweets",
  fabricationYear: 2018,
}

// h Creaza un array de produse (products) cu cele 2 obiecte: product1 si product2
let products = [
  product1,
  product2
]
console.log(products)

// j Scrie o functie: addProduct care adauga un produs nou (dat ca parametru) in array-ul products
function addProduct(title, calories, price, isExpired, category, fabricationYear) {
  products[products.length] = { title, calories, price, isExpired, category, fabricationYear }
}
addProduct('Milk', 62, 6, false, 'dairy products', 2022);
console.log(products)

// let product3 = {
//   title: 'Milk',
//   calories: 75,
//   price: 6,
//   isExpired: false,
//   category: 'dairy products',
//   fabricationYear: 2022
// }
// products[products.length] = product3;
// console.log(products)

// k Scrie o functie: changeProductPrice care schimba pretul unui podus  identificat dupa titlu
function changeProductPrice(title, newPrice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === title) {
      products[i].price = newPrice;
    }
  }
}
changeProductPrice('Chocolate', 9)
console.log(products)

// l Scrie o functie: verifyProductsExpiration care verifica toate produsele iar daca un produs a depasit fabricationYear cu mai mult de 2 ani, marcheaza-l ca expirat
function verifyProductsExpiration() {
  for (let i = 0; i < products.length; i++) {
    if ((2022 - products[i].fabricationYear) > 2) {
      products[i].isExpired = true;
    }
  }
}
verifyProductsExpiration()
console.log(products)

// m Scrie o functie: verifyProductsCalories care verifica toate produsele iar daca un produs a depasit un anumit nr de calorii (dat ca param) va fi afisat la consola
function verifyProductsCalories(kcal) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].calories > kcal) {
      console.log("m. ", products[i])
    }
  }
}
verifyProductsCalories(300)

// n. Scrie o functie: applyProductsDiscount care reduce pretul produselor dintr-o anumita categorie (data ca param, ex: patiserie) la jumatate
function applyProductsDiscount(category) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      products[i].price /= 2
    }
  }
}
applyProductsDiscount('chesse')
console.log(products)


// o. Scrie o functie: changeProductCalories care schimba caloriile unui podus identificat dupa titlu
function changeProductCalories(title) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === title) {
      products[i].calories += 30
    }
  }
}
changeProductCalories("Milk")
console.log(products)


function changeProductCalories(title, newCalories) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === title) {
      products[i].calories = newCalories
    }
  }
}
changeProductCalories("Milk", 75)


// p.Scrie o functie: updateProductTitle care schimba titlul unui podus  identificat dupa titlu vechi
function updateProductTitle(title, newTitle) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === title) {
      products[i].title = newTitle;
    }
  }
}
updateProductTitle('Chocolate', "Dark chocolate")
console.log(products)


//q. Scrie o functie: displayProductsWithPriceBiggerThan care afiseaza toate produsele care au pretul mai mare decat un pret dat
function displayProductsWithPriceBiggerThan(price) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > price) {
      console.log(products[i])
    }
  }
}
displayProductsWithPriceBiggerThan(5)


//r. Scrie o functie: displayProductsTitleWithCategory care afiseaza titlul tuturor produselor dintr-o anumita categorie
function displayProductsTitleWithCategory(category) {
  for (let i = 0; i < products.length; i++) {
    let obj = {
      title: products[i].title,
    }
    if (products[i].category === category) {
      console.log("r. ", obj)
    }
  }
}
displayProductsTitleWithCategory("chesse")


//s. Scrie o functie: getMediumPrice care returneaa media preturilor tuturor produselor
function getMediumPrice() {
  let contor = 0;
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
    contor++;
  }
  return sum / contor
}
console.log("Media preturilor este ", getMediumPrice())


//t. Scrie o functie: displayProductsWithFabricationYearLessThan care afiseaza titlul si pretul tuturor produselor a caror an de fabricatie este mai mic decat un anume an
function displayProductsWithFabricationYearLessThan(year) {
  for (let i = 0; i < products.length; i++) {
    let obj = {
      title: products[i].title,
      price: products[i].price,
    }
    if (products[i].fabricationYear < year) {
      console.log("t. ", obj)
    }
  }
}
displayProductsWithFabricationYearLessThan(2020)


//u. Scrie o functie: displayExpiredProductsPrice care afiseaza pretul produselor expirate
function displayExpiredProductsPrice() {
  for (let i = 0; i < products.length; i++) {
    let obj = {
      price: products[i].price,
    }
    if (products[i].isExpired === true) {
      console.log('u. ', obj)
    }
  }
}
displayExpiredProductsPrice()


//v. Scrie o functie: changeProductByTitle care schimba produsul gasit dupa titlu cu un alt obiect produs primit ca param
function changeProductByTitle(title, prod) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === title) {
      products[i] = prod
    }
  }
}
changeProductByTitle("Milk", product2)
console.log("v. ", products)

//w. Scrie o functie: changeProductByIndex care schimba produsul gasit de la un anumit index cu un alt obiect produs primit ca param
function changeProductByIndex(j, product) {
  if (j < 0 || j > products.length - 1) {
    return;
  }
  products[j] = product
}
changeProductByIndex(2, product1);
console.log("w. ", products)


//x. Scrie o functie: displayProductsWithPriceAndCategory care afiseaza toate produsele au pretul mai mare decat pretul specificat si fac parte din categoria specificata
function displayProductsWithPriceAndCategory(price, category) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > price && products[i].category === category) {
      console.log('x. ', products[i])
    }
  }
}
displayProductsWithPriceAndCategory(5, 'dairy products')


//y. Scrie o functie: getMostRecentProduct care returneaza produsul a carui an de fabricatie e cel mai recent
function getMostRecentProduct() {
  let mostRecent = products[0].fabricationYear;
  for (let i = 0; i < products.length; i++) {
    if (products[i].fabricationYear > mostRecent) {
      mostRecent = products[i];
    }
  }
  return mostRecent;
}
console.log("y. ", getMostRecentProduct())


//z. Scrie o functie: getProductsWithPriceBetween care returneaza produsele care au pretul cuprins intre 2 preturi specificate
function getProductsWithPriceBetween(p1, p2) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= p1 && products[i].price <= p2) {
      res[contor++] = products[i]
    }
  }
  return res
}
console.log(getProductsWithPriceBetween(6, 10))


//aa. Scrie o functie:getProductsTitle care returneaza o lista cu titlurile produselor
function getProductsTitle() {
  let li = [];
  let contor = 0;
  for (let i = 0; i < products.length; i++) {
    li[contor++] = products[i].title
  }
  return li
}
console.log(getProductsTitle())


//bb. Scrie o functie: getProductsPrices care returneaza un array cu titlul si pretul fiecarui produs
function getProductsPrices() {
  let arr = [];
  let contor = 0;
  for (let i = 0; i < products.length; i++) {
    let obj = {
      title: products[i].title,
      price: products[i].price,
    }
    arr[contor++] = obj
  }
  return arr
}
console.log("bb. ", getProductsPrices())


//cc. Scrie o functie: getAllCategories care returneaza un array cu categoriile din care fac parte produsele fara sa se repetete categoriile in array
// Exemplu: prod1 - category: lactate, prod2 - category: patiserie, prod3 - category: lactate => categories: [‘lactate’, ‘pastiserie’]
function getAllCategories() {
  let arr = [];
  let contor = 0;
  for (let i = 0; i < products.length; i++) {
    arr[contor++] = products[i].category
  }
  return arr
}
console.log(getAllCategories())


///////////////////////////// Exercitiul 2 ///////////////////////////// 


//a. Declara si initailieaza un obiect user cu atributele:name, age.
let user = {
  name: "Andrei",
  age: 23,
}

//b. Declara si initializeaza un array de obiecte hobbies. Un obiect hobby are urmatoarele atribute: name, price, levelOfDificulty (poate fi: easy, medium, hard), timeConsumed (cat timp iea acest hobbyin minute, ex: 40 mini, etc)
let hobbies = [
  { name: "gatit", price: 55, levelOfDificulty: "easy", timeConsumed: 50 },
  { name: "pictura", price: 210, levelOfDificulty: "easy", timeConsumed: 48 },
  { name: "pescuit", price: 50, levelOfDificulty: "easy", timeConsumed: 200 },
  { name: "citit", price: 51, levelOfDificulty: "easy", timeConsumed: 30 },
  { name: "sah", price: 48, levelOfDificulty: "medium", timeConsumed: 70 },
  { name: "dans", price: 100, levelOfDificulty: "medium", timeConsumed: 45 },
  { name: "fotbal", price: 30, levelOfDificulty: "medium", timeConsumed: 90 },
  { name: "fitness", price: 130, levelOfDificulty: "medium", timeConsumed: 80 },
  { name: "tenis", price: 120, levelOfDificulty: "hard", timeConsumed: 100 },
  { name: "inot", price: 40, levelOfDificulty: "hard", timeConsumed: 60 },
  { name: "yoga", price: 35, levelOfDificulty: "hard", timeConsumed: 35 },
  { name: "baschet", price: 65, levelOfDificulty: "hard", timeConsumed: 40 },
]


// c.Adauga in obiectul user o noua proprietate hobbies care valoarea: array-ul de hobbies declarat anterior
user.hobbies = hobbies;
console.log(user);


//d. Scrie o functie: displayHobbies care afiseaza toate hobby-urile user-ului
function displayHobbies() {
  for (let i = 0; i < user.hobbies.length; i++) {
    console.log(user.hobbies[i]);
  }
}
displayHobbies()


//e. Scrie o functie: displayHobbiesByLevel care afiseaza toate hobby-urile user-ului cu anumit nivel de dificultate
function displayHobbiesByLevel(levelOfDificulty) {
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].levelOfDificulty === levelOfDificulty) {
      console.log("e.", user.hobbies[i])
    }
  }
}
displayHobbiesByLevel('easy')


// f. Scrie o functie: getNoOfHardHobbies care returneaza numarul de hobby-uri de dificultatea ‘hard’ a userului.
function getNoOfHardHobbies1() {
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].levelOfDificulty === "hard") {
      contor++;
    }
  }
  return contor;
}
console.log("f. ", getNoOfHardHobbies1())


//g.  Scrie o functie: getHobbyPrices care returneaza un array cu titlul si pretul fiecarui hobby => array de obiecte care incorporeza title si price
function getHobbyPrices() {
  let contor = 0;
  let arr = [];
  for (let i = 0; i < user.hobbies.length; i++) {
    let obj = {
      name: user.hobbies[i].name,
      price: user.hobbies[i].price,
    }
    arr[contor++] = obj;
  }
  return arr;
}
console.log("g. ", getHobbyPrices())


//h.  Scrie o functie: getHobbiesByLevel care returneaza toate hobby-urile de o anumita dificultate
function getHobbiesByLevel(levelOfDificulty) {
  let contor = 0;
  let arr = [];
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].levelOfDificulty === levelOfDificulty) {
      arr[contor++] = user.hobbies[i]
    }
  }
  return arr
}
console.log("h.  ", getHobbiesByLevel('medium'))


//i.  Scrie o functie: getNoOfHobbiesByLevel care returneaza numarul de hobby-uri pentru un anumit nivel de dificultate specificat
function getNoOfHobbiesByLevel(levelOfDificulty) {
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].levelOfDificulty === levelOfDificulty) {
      contor++;
    }
  }
  return contor;
}
console.log("i. ", getNoOfHobbiesByLevel('easy'))

function getNoOfHobbiesByLevel2(levelOfDifficulty) {
  let hobbiesByLevel = getHobbiesByLevel(levelOfDifficulty)
  return hobbiesByLevel.length
  // return getHobbiesByLevel(levelOfDifficulty).length
}
console.log("i. ", getNoOfHobbiesByLevel2('easy'))


//j.  Scrie o functie: getTotalConsumedTime care returneaza timpul total consumat pentru toate hobby-urile
function getTotalConsumedTime() {
  let sum = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    sum += user.hobbies[i].timeConsumed;
  }
  return sum;
}
console.log("j. ", getTotalConsumedTime())


//k.  Scrie o functie: getNoOfHobbiesForEveryLevel care returneaza numarul de hobby-uri pentru fiecare nivel de dificultate
function getNoOfHobbiesForEveryLevel() {
  let contor1 = 0;
  let contor2 = 0;
  let contor3 = 0;
  let arr = [];
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].levelOfDificulty === "easy") {
      contor1++;
    }
    if (user.hobbies[i].levelOfDificulty === "medium") {
      contor2++;
    }
    if (user.hobbies[i].levelOfDificulty === "hard") {
      contor3++;
    }
  }
  arr = [contor1, contor2, contor3]
  return arr
}
console.log("k. ", getNoOfHobbiesForEveryLevel())

//k2. returneaza numarul de hobby-uri pentru fiecare nivel. Este functia rezolvata mai sus, la i. Exemplu: h1: easy, h2: easy, h3: hard, h4: easy => [ {level: easy, no: 3}, {level: medium, no: 0}, {level: hard, no: 1}]
function getNoOfHobbiesForEveryLevel3() {
  let noHardHobbies = getNoOfHobbiesByLevel('hard')
  let noMediumHobbies = getNoOfHobbiesByLevel('medium')
  let noEasyHobbies = getNoOfHobbiesByLevel('easy')
  let easyHobbies = {
    levelOfDifficulty: "easy",
    no: noEasyHobbies,
  }
  let mediumHobbies = {
    levelOfDifficulty: "medium",
    no: noMediumHobbies,
  }
  let hardHobbies = {
    levelOfDifficulty: "hard",
    no: noHardHobbies,
  }
  return [easyHobbies, mediumHobbies, hardHobbies]
}
console.log("k2. ", getNoOfHobbiesForEveryLevel3())


// l. Scrie o functie: getNoOfHobbiesWithPriceLessThan care returneaza numarul de hobby-uri pentru care au pretul mai mic decat un pret specificat ca parametru
function getNoOfHobbiesWithPriceLessThan(price) {
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].price < price) {
      contor++;
    }
  }
  return contor;
}
console.log("l. ", getNoOfHobbiesWithPriceLessThan(50))


//m.  Scrie o functie: getHobbiesThatStartWith care returneaza toate hobby-urile care incep cu o litera specificata
function getHobbiesThatStartWith(char) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].name[0] == char) {
      res[contor++] = user.hobbies[i]
    }
  }
  return res
}
console.log("m.", getHobbiesThatStartWith('p'));


//n.  Scrie o functie: getHobbiesPriceAndLevel care returneaza pentru fiecare produs, pretul si nivelul de dificultate
function getHobbiesPriceAndLevel() {
  let res = [];
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    let obj = {
      price: user.hobbies[i].price,
      levelOfDificulty: user.hobbies[i].levelOfDificulty,
    }
    res[contor++] = obj
  }
  return res
}
console.log("n. ", getHobbiesPriceAndLevel())


// o. Scrie o functie: getHobbiesTitleAndLevelWithTimeConsumedLessThan care returneaza pentru fiecare produs, titlul si nivelul de dificultate a carui timp consumat este mai mic decat un timp specificat
function getHobbiesTitleAndLevelWithTimeConsumedLessThan(time) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    let obj = {
      name: user.hobbies[i].name,
      levelOfDificulty: user.hobbies[i].levelOfDificulty,
    }
    if (user.hobbies[i].timeConsumed < time) {
      res[contor++] = obj;
    }
  }
  return res;
}
console.log("o. ", getHobbiesTitleAndLevelWithTimeConsumedLessThan(65))


//p. Scrie o functie: getMostTimeConsumedHobbyForLevel care returneaza hobby-ul care consuma cel mai mult timp pentru un anumit nivel de dificultate specificat
function getMostTimeConsumedHobbyForLevel(levelOfDifficulty) {
  let max = Number.MIN_SAFE_INTEGER;
  let res;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].timeConsumed > max && user.hobbies[i].levelOfDificulty === levelOfDifficulty) {
      max = user.hobbies[i].timeConsumed;
      res = user.hobbies[i];
    }
  }
  return res;
}
console.log("p. ", getMostTimeConsumedHobbyForLevel('hard'))


//q. Scrie o functie: getLessExpensiveHobbyForLevel care returneaza hobby-ul cel mai ieftin pentru un anumit nivel de dificultate specificat
function getLessExpensiveHobbyForLevel2(levelOfDifficulty) {
  let minHobbyPrice = Number.MAX_SAFE_INTEGER;
  let minHobby;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].levelOfDificulty === levelOfDifficulty && user.hobbies[i].price < minHobbyPrice) {
      minHobbyPrice = user.hobbies[i].price;
      minHobby = user.hobbies[i];
    }
  }
  return minHobby;
}
console.log("q. ", getLessExpensiveHobbyForLevel2('easy'))


//r. Scrie o functie: getHobbiesTitle care returneaza un string care contine toate tilurile hobby-urilor separate prin virgula
function getHobbiesTitle() {
  let str = "";
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    str += user.hobbies[i].name + ", "
  }
  return str
}
console.log("r. ", getHobbiesTitle())


//s. Scrie o functie: getHobbiesTitleAndLevel care returneaza un string care contine titlul si hobby-ul separate cu liniuta pentru fiecare hobby, separate prin virgula.
// Exemplu: “tennis-hard, dans-medium, arta-easy”
function getHobbiesTitleAndLevel() {
  let str = "";
  for (let i = 0; i < user.hobbies.length; i++) {
    str += user.hobbies[i].name + "-"
    str += user.hobbies[i].levelDificulty + ", "
  }
  return str
}
console.log("s. ", getHobbiesTitleAndLevel())


//t. Scrie o functie: getHobbiesByLevelAndTimeAndPriceAndTile care returneaza hobby-urile a caror titlu nu incepe cu anumita litera, timp consumat este mai mic decat cel specificat, are un anumit nivel si pretul e mai mare decat cel specificat. 
function getHobbiesByLevelAndTimeAndPriceAndTile(char, time, levelOfDificulty, price) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].name[0] !== char && user.hobbies[i].timeConsumed < time && user.hobbies[i].levelOfDificulty === levelOfDificulty && user.hobbies[i].price > price) {
      res[contor++] = user.hobbies[i]
    }
  }
  return res;
}
console.log("t. ", getHobbiesByLevelAndTimeAndPriceAndTile('d', 90, 'easy', 53))


//u.  Scrie o functie: getHobbiesByUserAge care returneaza hobby-urile a care au cel mult nivelul de dificultate medium si pretul mai mic decat unul specificat daca userul e minor, iar daca e major, hobby-urile cu dificultate hard si orice pret 
function getHobbiesByUserAge(price) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < user.hobbies.length; i++) {
    if ((user.hobbies[i].levelOfDificulty === 'easy' || user.hobbies[i].levelOfDificulty === 'medium') && user.hobbies[i].price < price && user.age < 18) {
      res[contor++] = user.hobbies[i]
    }
    else if (user.hobbies[i].levelOfDificulty == 'hard') {
      res[contor++] = user.hobbies[i];
    }
  }
  return res
}
console.log("u. ", getHobbiesByUserAge(55))


//v. Scrie o functie: getCheapest3Hobbies care returneaza primele 3 hobby-uri cele mai ieftine
function getCheapest3Hobbies33() {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  let min3 = Number.MAX_SAFE_INTEGER;
  let minHobby1;
  let minHobby2;
  let minHobby3;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].price < min1) {
      min3 = min2;
      min2 = min1;
      min1 = user.hobbies[i].price;
      minHobby3 = minHobby2;
      minHobby2 = minHobby1;
      minHobby1 = user.hobbies[i]
    }
    else if (user.hobbies[i].price < min2) {
      min3 = min2;
      min2 = user.hobbies[i].price;
      minHobby3 = minHobby2;
      minHobby2 = user.hobbies[i]
    }
    else if (user.hobbies[i].price < min3) {
      min3 = user.hobbies[i].price;
      minHobby3 = user.hobbies[i]
    }
  }
  return [minHobby1, minHobby2, minHobby3]
}
console.log("--------------------------------------")
console.log("v. ", getCheapest3Hobbies33())
console.log("--------------------------------------")


//w. Scrie o functie: getFastestHobbiesForEveryLevel care returneaza primele 3 hobby-uri cele mai rapide pentru un nivel de dificultate dat.
function getFastestHobbiesForASingleLevel(levelOfDifficulty) {
  let minTimeConsumed1 = Number.MAX_SAFE_INTEGER
  let minHobby1;
  let minTimeConsumed2 = Number.MAX_SAFE_INTEGER
  let minHobby2;
  let minTimeConsumed3 = Number.MAX_SAFE_INTEGER
  let minHobby3;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].timeConsumed < minTimeConsumed1 && user.hobbies[i].levelOfDificulty == levelOfDifficulty) {
      minTimeConsumed3 = minTimeConsumed2;
      minTimeConsumed2 = minTimeConsumed1;
      minTimeConsumed1 = user.hobbies[i].timeConsumed
      minHobby3 = minHobby2;
      minHobby2 = minHobby1;
      minHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumed2 && user.hobbies[i].levelOfDificulty == levelOfDifficulty) {
      minTimeConsumed3 = minTimeConsumed2;
      minTimeConsumed2 = user.hobbies[i].timeConsumed;
      minHobby3 = minHobby2;
      minHobby2 = user.hobbies[i]
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumed3 && user.hobbies[i].levelOfDificulty == levelOfDifficulty) {
      minTimeConsumed3 = user.hobbies[i].timeConsumed
      minHobby3 = user.hobbies[i]
    }
  }
  return [minHobby1, minHobby2, minHobby3]
}
console.log("--------------------------------------")
console.log("w. Cele mai rapide 3 hobby-uri pentru un nivel de dificultate: ", getFastestHobbiesForASingleLevel('hard'))
console.log("--------------------------------------")


//w2. Scrie o functie: getFastestHobbiesForEveryLevel care returneaza primele 2 hobby-uri cele mai rapide pentru fiecare nivel de dificultate.
function getFastestHobbiesForEveryLevel323(levelOfDifficulty) {
  let minTimeConsumedEasyLevel1 = Number.MAX_SAFE_INTEGER
  let minEasyHobby1;
  let minTimeConsumedEasyLevel2 = Number.MAX_SAFE_INTEGER;
  let minEasyHobby2;
  let minTimeConsumedMediumLevel1 = Number.MAX_SAFE_INTEGER
  let minMediumHobby1;
  let minTimeConsumedMediumLevel2 = Number.MAX_SAFE_INTEGER
  let minMediumHobby2;
  let minTimeConsumedHardLevel1 = Number.MAX_SAFE_INTEGER
  let minHardHobby1;
  let minTimeConsumedHardLevel2 = Number.MAX_SAFE_INTEGER
  let minHardHobby2;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].timeConsumed < minTimeConsumedEasyLevel1 && user.hobbies[i].levelOfDificulty === "easy") {
      minTimeConsumedEasyLevel2 = minTimeConsumedEasyLevel1;
      minTimeConsumedEasyLevel1 = user.hobbies[i].timeConsumed;
      minEasyHobby2 = minEasyHobby1
      minEasyHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedEasyLevel1 && user.hobbies[i].levelOfDificulty === "easy") {
      minTimeConsumedEasyLevel2 = user.hobbies[i].timeConsumed;
      minEasyHobby2 = user.hobbies[i];
    }
    if (user.hobbies[i].timeConsumed < minTimeConsumedMediumLevel1 && user.hobbies[i].levelOfDificulty === "medium") {
      minTimeConsumedMediumLevel2 = minTimeConsumedMediumLevel1;
      minTimeConsumedMediumLevel1 = user.hobbies[i].timeConsumed;
      minMediumHobby2 = minMediumHobby1;
      minMediumHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedMediumLevel2 && user.hobbies[i].levelOfDificulty === "medium") {
      minTimeConsumedMediumLevel2 = user.hobbies[i].timeConsumed;
      minMediumHobby2 = user.hobbies[i];
    }
    if (user.hobbies[i].timeConsumed < minTimeConsumedHardLevel1 && user.hobbies[i].levelOfDificulty === "hard") {
      minTimeConsumedHardLevel2 = minTimeConsumedHardLevel1;
      minTimeConsumedHardLevel1 = user.hobbies[i].timeConsumed;
      minHardHobby2 = minHardHobby1;
      minHardHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedHardLevel2 && user.hobbies[i].levelOfDificulty === "hard") {
      minTimeConsumedHardLevel2 = user.hobbies[i].timeConsumed;
      minHardHobby2 = user.hobbies[i];
    }
  }
  return [minEasyHobby1, minEasyHobby2, minMediumHobby1, minMediumHobby2, minHardHobby1, minHardHobby2]
}
console.log("--------------------------------------")
console.log("w2. Primele 2 hobby-uri cele mai rapide pentru fiecare nivel de dificultate sunt : ", getFastestHobbiesForEveryLevel323())
console.log("--------------------------------------")


//w3 Scrie o functie: getFastestHobbiesForEveryLevel care returneaza primele 3 hobby-uri cele mai rapide pentru fiecare nivel de dificultate.
//cu apelul functiei getFastestHobbiesForASingleLevel
function getFastestHobbiesForEveryLevel23() {
  let fastes3HobbiesEasyLevel = getFastestHobbiesForASingleLevel("easy")
  let fastes3HobbiesMediumLevel = getFastestHobbiesForASingleLevel("medium")
  let fastes3HobbiesHardLevel = getFastestHobbiesForASingleLevel("hard")
  return [fastes3HobbiesEasyLevel, fastes3HobbiesMediumLevel, fastes3HobbiesHardLevel]
}
console.log("*****************************************")
console.log("w.3.a ", getFastestHobbiesForEveryLevel23())
console.log("*****************************************")

//w.3.b. getFastestHobbiesForEveryLevel rezolvata fara apelul functiei.
function getFastestHobbiesForEveryLevel3234(levelOfDifficulty) {
  let minTimeConsumedEasyLevel1 = Number.MAX_SAFE_INTEGER
  let minEasyHobby1;
  let minTimeConsumedEasyLevel2 = Number.MAX_SAFE_INTEGER;
  let minEasyHobby2;
  let minTimeConsumedEasyLevel3 = Number.MAX_SAFE_INTEGER;
  let minEasyHobby3;
  let minTimeConsumedMediumLevel1 = Number.MAX_SAFE_INTEGER
  let minMediumHobby1;
  let minTimeConsumedMediumLevel2 = Number.MAX_SAFE_INTEGER
  let minMediumHobby2;
  let minTimeConsumedMediumLevel3 = Number.MAX_SAFE_INTEGER
  let minMediumHobby3;
  let minTimeConsumedHardLevel1 = Number.MAX_SAFE_INTEGER
  let minHardHobby1;
  let minTimeConsumedHardLevel2 = Number.MAX_SAFE_INTEGER
  let minHardHobby2;
  let minTimeConsumedHardLevel3 = Number.MAX_SAFE_INTEGER
  let minHardHobby3;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].timeConsumed < minTimeConsumedEasyLevel1 && user.hobbies[i].levelOfDificulty === "easy") {
      minTimeConsumedEasyLevel3 = minTimeConsumedEasyLevel2;
      minTimeConsumedEasyLevel2 = minTimeConsumedEasyLevel1;
      minTimeConsumedEasyLevel1 = user.hobbies[i].timeConsumed;
      minEasyHobby3 = minEasyHobby2;
      minEasyHobby2 = minEasyHobby1;
      minEasyHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedEasyLevel2 && user.hobbies[i].levelOfDificulty === "easy") {
      minTimeConsumedEasyLevel3 = minTimeConsumedEasyLevel2;
      minTimeConsumedEasyLevel2 = user.hobbies[i].timeConsumed;
      minEasyHobby3 = minEasyHobby2;
      minEasyHobby2 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedEasyLevel3 && user.hobbies[i].levelOfDificulty === "easy") {
      minTimeConsumedEasyLevel3 = user.hobbies[i].timeConsumed;
      minEasyHobby3 = user.hobbies[i];
    }
    if (user.hobbies[i].timeConsumed < minTimeConsumedMediumLevel1 && user.hobbies[i].levelOfDificulty === "medium") {
      minTimeConsumedMediumLevel3 = minTimeConsumedMediumLevel2;
      minTimeConsumedMediumLevel2 = minTimeConsumedMediumLevel1;
      minTimeConsumedMediumLevel1 = user.hobbies[i].timeConsumed;
      minMediumHobby3 = minMediumHobby2;
      minMediumHobby2 = minMediumHobby1;
      minMediumHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedMediumLevel2 && user.hobbies[i].levelOfDificulty === "medium") {
      minTimeConsumedMediumLevel3 = minTimeConsumedMediumLevel2;
      minTimeConsumedMediumLevel2 = user.hobbies[i].timeConsumed;
      minMediumHobby3 = minMediumHobby2;
      minMediumHobby2 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedMediumLevel3 && user.hobbies[i].levelOfDificulty === "medium") {
      minTimeConsumedMediumLevel3 = user.hobbies[i].timeConsumed;
      minMediumHobby3 = user.hobbies[i];
    }
    if (user.hobbies[i].timeConsumed < minTimeConsumedHardLevel1 && user.hobbies[i].levelOfDificulty === "hard") {
      minTimeConsumedHardLevel3 = minTimeConsumedHardLevel2;
      minTimeConsumedHardLevel2 = minTimeConsumedHardLevel1;
      minTimeConsumedHardLevel1 = user.hobbies[i].timeConsumed;
      minHardHobby3 = minHardHobby2;
      minHardHobby2 = minHardHobby1;
      minHardHobby1 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedHardLevel2 && user.hobbies[i].levelOfDificulty === "hard") {
      minTimeConsumedHardLevel3 = minTimeConsumedHardLevel2;
      minTimeConsumedHardLevel2 = user.hobbies[i].timeConsumed;
      minHardHobby3 = minHardHobby2;
      minHardHobby2 = user.hobbies[i];
    }
    else if (user.hobbies[i].timeConsumed < minTimeConsumedHardLevel3 && user.hobbies[i].levelOfDificulty === "hard") {
      minTimeConsumedHardLevel3 = user.hobbies[i].timeConsumed;
      minHardHobby3 = user.hobbies[i];
    }
  }
  return [minEasyHobby1, minEasyHobby2, minEasyHobby3, minMediumHobby1, minMediumHobby2, minMediumHobby3, minHardHobby1, minHardHobby2, minHardHobby3]
}
console.log("--------------------------------------")
console.log("w3.b. Primele 3 hobby-uri cele mai rapide pentru fiecare nivel de dificultate sunt : ", getFastestHobbiesForEveryLevel3234())
console.log("--------------------------------------")


//x. Scrie o functie: getFastestHobbiesForEveryLevel care returneaza primul hobby cel mai rapid pentru un nivel de dificultate.
function getFastestHobbyByLevel3(levelOfDifficulty) {
  let res = [];
  let minTimeConsumed = Number.MAX_SAFE_INTEGER
  let minHobby;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].timeConsumed < minTimeConsumed && user.hobbies[i].levelOfDificulty == levelOfDifficulty) {
      minTimeConsumed = user.hobbies[i].timeConsumed
      minHobby = user.hobbies[i]
    }
  }
  return minHobby
}
console.log("x. Primul hobby cel mai rapid pentru un nivel de dificultate este: ", getFastestHobbyByLevel3('medium'))

//y Scrie o functie: getFastestHobbiesForEveryLevel care returneaza primul hobby cel mai rapid pentru fiecare nivel de dificultate.
function getFastestHobbyForEveryLevel4() {
  let easyLevel = getFastestHobbyByLevel3('easy');
  let mediumLevel = getFastestHobbyByLevel3('medium');
  let hardLevel = getFastestHobbyByLevel3('hard');
  return [easyLevel, mediumLevel, hardLevel];
}
console.log("**************************************");
console.log("y. ", getFastestHobbyForEveryLevel4());
console.log("**************************************");

//z. Functia getFastestHobbyForEveryLevel rezolvata intr-un singur pas, fara apelul functiei.
function getFastestHobbyForEveryLevel43() {
  let minTimeConsumedEasyLevel = Number.MAX_SAFE_INTEGER
  let minEasyHobby;
  let minTimeConsumedMediumLevel = Number.MAX_SAFE_INTEGER
  let minMediumHobby;
  let minTimeConsumedHardLevel = Number.MAX_SAFE_INTEGER
  let minHardHobby;
  for (let i = 0; i < user.hobbies.length; i++) {
    if (user.hobbies[i].timeConsumed < minTimeConsumedEasyLevel && user.hobbies[i].levelOfDificulty === "easy") {
      minTimeConsumedEasyLevel = user.hobbies[i].timeConsumed;
      minEasyHobby = user.hobbies[i];
    }
    if (user.hobbies[i].timeConsumed < minTimeConsumedMediumLevel && user.hobbies[i].levelOfDificulty === "medium") {
      minTimeConsumedMediumLevel = user.hobbies[i].timeConsumed;
      minMediumHobby = user.hobbies[i];
    }
    if (user.hobbies[i].timeConsumed < minTimeConsumedHardLevel && user.hobbies[i].levelOfDificulty === "hard") {
      minTimeConsumedHardLevel = user.hobbies[i].timeConsumed;
      minHardHobby = user.hobbies[i];
    }
  }
  return [minEasyHobby, minMediumHobby, minHardHobby]
}
console.log("--------------------------------------")
console.log("z. ", getFastestHobbyForEveryLevel43());
console.log("--------------------------------------")
