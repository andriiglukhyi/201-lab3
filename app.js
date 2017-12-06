'use strict';


var question1= prompt('Hello jobseeker I are have a couple question for you! You should answer Yes or No. Ok? ');
console.log('1st question', question1);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y' ) {
  alert('Thank You');
}

if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n' || question1.toLowerCase === 'none') {
  alert ('I have to ask you any way');
}

var language= prompt('Do you think I am bilingual?');
console.log('bilingual', language);

if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y' ) {
  alert('You are tight. I do speak a couple languages');
}

if (language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
  alert('No. I am speak a couple languages');
}

var apart= prompt('Do I live in apartment?');
console.log("apartment : ", apart);

if (apart.toUpperCase() === 'YES' || apart.toUpperCase() === 'Y') {
  alert('Yes. You are right about that');
}
if (apart.toUpperCase() === 'NO'|| apart.toUpperCase() === 'N') {
  alert ('Wrong answer');
}

var expir= prompt('Do you I have a job expirience');
console.log('expirience', expir);

if (expir.toLowerCase() === 'yes' || expir.toLowerCase() === 'y') {
  alert('No. I don\'t have any expirience in IT');
}

if (expir.toLowerCase() === 'no' || expir.toLowerCase() === 'n') {
  alert('Coret answer');
}

var goal=prompt('Do you think I want to be a developer?');
console.log('goal',goal);

if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {
alert('You are correct. I want to bo a developer');
}
if (goal.toLowerCase() === 'no' || goal.toLowerCase() === 'n') {
alert('Wrong answer');
}
