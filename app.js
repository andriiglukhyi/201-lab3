'use strict';

var countAnsw = 0;

var question1= prompt('Hello jobseeker I are have a couple question for you! You should answer Yes or No. Ok? ');
console.log('1st question', question1);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y' ) {
  alert('Thank You');
  countAnsw++
}

if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n' || question1.toLowerCase === 'none') {
  alert ('I have to ask you any way');
}

var language= prompt('Do you think I am bilingual?');
console.log('bilingual', language);

if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y' ) {
  alert('You are tight. I do speak a couple languages');
  countAnsw++
}

if (language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
  alert('No. I am speak a couple languages');
}

var apart= prompt('Do I live in apartment?');
console.log("apartment : ", apart);

if (apart.toUpperCase() === 'YES' || apart.toUpperCase() === 'Y') {
  alert('Yes. You are right about that');
  countAnsw++
}
if (apart.toUpperCase() === 'NO'|| apart.toUpperCase() === 'N') {
  alert ('Wrong answer');
}

var expir= prompt('Do you I have a job expirience');
console.log('expirience', expir);

if (expir.toLowerCase() === 'yes' || expir.toLowerCase() === 'y') {
  alert('No. I don\'t have any expirience in IT');
  countAnsw++
}

if (expir.toLowerCase() === 'no' || expir.toLowerCase() === 'n') {
  alert('Coret answer');
}

var goal=prompt('Do you think I want to be a developer?');
console.log('goal',goal);

if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {
alert('You are correct. I want to bo a developer');
countAnsw++
}
if (goal.toLowerCase() === 'no' || goal.toLowerCase() === 'n') {
alert('Wrong answer');
}
var number=prompt('how old am i?');
console.log('age', number);
var counter = 0;

while(number != 26) {
  number = parseInt(prompt('How old am I?'));
  if(number<26) {
    alert('Thanks. But I am older than' + number);
    counter++
  } else if (number> 26) {
    alert('Sorry. Not so old.');
    counter++
  } else if (number === NaN || number === null){
    alert('please enter a number');
  } else if (number === 26) {
    alert('You are right')
    countAnsw++
  }
  if (counter === 4){
    alert ('we are done with this question. Sorry. Maybe next time')
    break
  }
}
  var country = ['ukraine','italy','german','france','russia','usa'];
  var flag;
  var count=0;
  while(count<7) {
    var answer = prompt("Where I used to live before?");
    for (var i=0; i < country.length; i++) {
      console.log('country', country[i]);

      if(answer.toLowerCase() === country[i]) {
        alert('U right');
        countAnsw++
        flag = true;
        count++
        break;
      }
    if (!flag) {
      alert('Wrong answer');
      count++
      break;
    }
    if (count === 6) {
      alert('next time')
    }

  }

  }

  alert('You made ' + countAnsw + ' right answers');
