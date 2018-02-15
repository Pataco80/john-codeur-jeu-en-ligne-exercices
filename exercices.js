/* Exercice 4 - Numbers et Strings
// Variables List
var name = 'Ricardo';
var a = 33.89;
var b = "44";
var aTostring = a.toString();
var nameLength = name.length;

var cString = "88";
var cNumber = parseInt(cString);

var dString = "55.43";
var dNumber = parseInt(dString);

var eString = "33.47";
var nuberFloat = parseFloat(eString);

var myString = "Salut Ricardo";
var positionString = myString.indexOf("Ricardo");
var myNewString = myString.replace("Ricardo", "Natacha");

var helloString = "Hello";
var nameString = "Ricardo";
var concatString = helloString + " " + nameString;


// Console log list
console.log(name);
console.log(a);
console.log(b);
console.log(aTostring);
console.log(nameLength);
console.log(cNumber);
console.log(dNumber);
console.log(nuberFloat);
console.log(positionString);
console.log(myNewString);
console.log(concatString);

Fin exercice 4 */




/* Exercice 5 - Operators
// Variables List
var a = 333;
var b = 77;
var resultAdd = a + b;
var resultSoustraction = a - b;
var resultMulti = a * b;
var resultDiv = a / b;
var resultModulo = a % b;

var plusplus = ++a;



// Console log list
console.log(resultAdd);
console.log(resultSoustraction);
console.log(resultMulti);
console.log(resultDiv);
console.log(resultModulo);
console.log(plusplus);

//Fin exercice 5 */



/* Exercice 6 - Boleans et Comparateurs
// Variables List
var a = 5;
var b = 12;
var myBoolean = (a <= 2 && b === 12); // Si (a est inférieur ou égal à 2) et (b est strictement égal à 12) Réponse false car une des 2 conditions n'est pas correcte
var myBoolean2 = (a <= 3 || b < 23); // Si (a est inférieur ou égal à 3) ou (b est inférieur à 23) Réponse true car une des 2 coditions est exacte. La 2ème en locurence


// Console log list
console.log(myBoolean); // Comparation "AND"
console.log(myBoolean2); // Comparation "OR"
*/

// Tableau
console.log("Tableau AND");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Tableau OR");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Not
console.log("Tableau NOT");
console.log(!true);
console.log(!false);

//Fin exercice 6