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



/* Exercice 7 - Boleans et Comparateurs
// Variables List
var a = 5;
var b = 12;
var myBoolean = (a <= 2 && b === 12); // Si (a est inférieur ou égal à 2) et (b est strictement égal à 12) Réponse false car une des 2 conditions n'est pas correcte
var myBoolean2 = (a <= 3 || b < 23); // Si (a est inférieur ou égal à 3) ou (b est inférieur à 23) Réponse true car une des 2 coditions est exacte. La 2ème en locurence


// Console log list
console.log(myBoolean); // Comparation "AND"
console.log(myBoolean2); // Comparation "OR"


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

//Fin exercice 7*/



/* Exercice 8 - Conditions

// Mon test perso
if (30 == 60) {
    console.log("30 est bien plus petit que 60, la condition est remplie !"); // 30 n'étant pas égal à 60, il passe à la condition 2
} else if (60 >= 30) {
    console.log("60 est bien supérieur à 30, la condition est remplie !"); // La condition 2 est bien remplie, c'est ce message qui s'affiche
} else {
    console.log("Acune condition n'est respectée !"); // Si aucunes conditions si dessus n'est respectée, il affichera ce message
}

// L'exemple de John
var speed = 121,
    limiteVitesse = 80,
    limiteLenteur = 60,
    lenteurDangereuse = 40,
    vitesseDangereuse = 120;

if (speed > vitesseDangereuse) {
    console.log("Tu roules dangereusement! Ralentis vite!");
} else if (speed > limiteVitesse && speed <= vitesseDangereuse) {
    console.log("Tu roules trop vite! Ralentis!");
} else if (speed <= limiteLenteur && speed > lenteurDangereuse) {
    console.log("Tu roules un peu lentement! Accélère un petit peu.");
} else if (speed <= lenteurDangereuse) {
    console.log("Tu roules trop lentement! Accélère!");
} else {
    console.log("Tu à une bonne vitesse.");
}


// Switch
var couleurDuMonde = "red";
switch (couleurDuMonde) {
    case "blue":
        console.log("Le bleu est la couleur du ciel");
        break;
    case "red":
    case "rose":
        console.log("Mes roses préférées sont de couleur rose ou rouge");
        break;
    case "yellow":
        console.log("Le jaune est la couleur du soleil");
        break;
    default:
        console.log("Le monde est plein de couleurs");

}
// Fin exercice 8*/



// Exercice 9 - Boucles
/* While
console.log("While");

var nombre = 3;
while (nombre < 8) {
    console.log(nombre);
    nombre++;
}

console.log("le Do While");
//Do While
var number = 0;
var monAge = 37;
do {
    console.log(number);
    number++;
}
while (number > 0 && number <= monAge)


console.log("le For");
// For
var number = 0;
for (number; number < 10; number++) {
    console.log(number);
}
 Fin exercice 9 */




/* Exercice 10 - Les Fonctions
// Déclaration des variables

var a = 4;
var b = 3;
var c = 8;
var resultat = calcul(a, b, a, c);

function calcul(number1, number2, number3, number4) {
    return number1 * number2 * number3 / number4;
}

// Liste des console.log
console.log(resultat);
Fin exercice 10*/




/* Exercice 11 - Les Scope
// Déclaration des variables
var a = 4;
var b = 3;
var c = 8;
var resultat = calculDeconseille(a, b, a, c);

// Liste des console.log
/*function calcul(number1, number2, number3, number4) {
    var resultatCalcul = number1 * number2 * number3 / number4;
    return resultatCalcul * 5;
}

function calculDeconseille(number1, number2, number3, number4) {
    resultatCalcul = number1 * number2 * number3 / number4;
    return resultatCalcul;
}

// Liste des console.log
//console.log(resultat);
console.log(resultatCalcul);
//Fin exercice 11*/



/* Exercice 12 - Les Arrays
// Déclaration des variables
var fruits = ["pomme", "Bannane", "orange", "citron", "poire"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);


var agrumes = fruits.slice(2, 4);
console.log(agrumes);


var arayMultistype = [16, "poire", false, [4, true], "orange", 24];
console.log(arayMultistype);

console.log(arayMultistype[3][1]);
//Fin exercice 12*/



// Exercice 13 - Les Objets
/*var objet = {
    propertyName1: propertyValue1,
    propertyName2: propertyValue2,
    propertyName3: propertyValue3,
    method1: function(parametre) { // Les paramètres sont optionels.
        // code de la fonction
    }
};

var dateUnity = " ans";
var dog = {
    name: "choupette",
    color: "blanc",
    age: 4 + dateUnity
};
console.log(dog.color);

console.log("----------------------------");
for (var property in dog) {
    console.log(dog[property]);
}
console.log("----------------------------");

var cat = new Object();
cat.name = "Fiona";
cat.color = "Brown";
cat.age = 6 + dateUnity;
cat.miaou = function(quantity) {
    while (quantity) {
        console.log(quantity + " Miaou Miaou"); // J'ai fait le test sans le toString et ça fonctionne pareil
        console.log(quantity.toString() + " Miaou");
        quantity--;
    }
};

cat.miaou(4);

//Fin exercice 13*/



// Exercice 14 - fonctions Constructeur
function Cat(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.miaou = function() {
        console.log("Miaou " + this.name);
    };
}

var petitChat = new Cat("Fiona", "Brown", 6),
    grosChat = new Cat("Horatio", "Red", 3);


console.log(petitChat);
console.log(grosChat);

petitChat.miaou();
grosChat.miaou();

//Fin exercice 14