console.log("%cVariables", "color: #3913B8; font-size: 20px;");

console.log("%c1. Declaration", "color: #229179; font-size: 16px;");

var firstVar = "Hello World";
let secondVar = "I 'm Lucas";
const ID_PERSON = "28934289D";

console.log(firstVar);
console.log(secondVar);
console.log(ID_PERSON);

// declaración en una misma linea
let nombre = "Lucas",
  apellido = "Fernandez",
  edad = 27;

// declaración "coma first"
let nombre2 = "Lucas",
  apellido2 = "Fernandez",
  edad2 = 27;

console.log("%c2. Var vs Let", "color: #229179; font-size: 16px;");

console.log("%c2.1. Regals de Scope", "color: #cf694a; font-size: 14px;");

function scopeRules() {
  var hello = "Hello";
  let world = "World";

  console.log(hello, world); // Hello World

  {
    var name = "Lucas";
    let surname = "Fernandez";
    console.log(name, surname); // Lucas Fernandez
  }

  console.log(name); // Lucas
  //console.log(surname); // ReferenceError
  console.log("Reference Error");
}

scopeRules();

console.log("%c2.2. Hoisting", "color: #cf694a; font-size: 14px;");

// hoisted
console.log(hoisted);
var hoisted = "hoisted";
console.log(hoisted);

// not hoisted
//console.log(notHoisted); //ReferenceError
console.log("Reference Error");
let notHoisted = "not hoisted";
console.log(notHoisted);

console.log("%c2.3. Propiedad Global", "color: #cf694a; font-size: 14px;");

var globalVar = "Global";
let notGlobalVar = "Not global";

console.log(window.globalVar);
console.log(window.notglobalVar);

console.log("%c2.4. Re-declaración", "color: #cf694a; font-size: 14px;");

var redeclare = "hello";
var redeclare = "world";
console.log(redeclare);

let notRedeclare = "hello";
//let notRedeclare = "bar2";
console.log("Sintax Error");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("testForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Defineți răspunsurile corecte pentru fiecare întrebare
    const correctAnswers = {
      q1: "a",
      q2: ["a", "b", "c"],
      q3: "a",
      q4: "a",
      q5: "a",
      q6: "b",
      q7: "b",
      q8: "a",
      q9: "b",
      q10: "a",
      q11: "a",
      q12: "a",
      q13: "b",
      q14: "b",
      q15: "a",
      q16: "b",
      q17: "c",
      q18: "b",
      q19: "c",
      q20: "b",
    };

    let score = 0; // Punctajul utilizatorului

    // Iterăm prin fiecare întrebare și verificăm răspunsurile
    for (let i = 1; i <= 20; i++) {
      const questionName = "q" + i; // Numele întrebării
      const userAnswers = document.querySelectorAll(
        'input[name="' + questionName + '"]:checked'
      );

      // Verificăm dacă utilizatorul a ales un răspuns
      if (userAnswers.length > 0) {
        const userAnswerValues = Array.from(userAnswers).map(
          (input) => input.value
        );

        // Verificăm dacă răspunsurile utilizatorului coincid cu răspunsurile corecte
        if (Array.isArray(correctAnswers[questionName])) {
          if (
            userAnswerValues.every((value) =>
              correctAnswers[questionName].includes(value)
            )
          ) {
            score++; // Incrementăm punctajul dacă răspunsul este corect
          }
        } else {
          if (userAnswerValues[0] === correctAnswers[questionName]) {
            score++; // Incrementăm punctajul dacă răspunsul este corect
          }
        }
      }
    }

    // Afisăm punctajul utilizatorului
    alert("Ai răspuns corect la " + score + " din 20 de întrebări.");
  });
});
