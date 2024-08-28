// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let value = document.querySelector('.guess').value;
// let message = document.querySelector('.message');

let number 

document.querySelector('.check').addEventListener('click', function(number){
    console.log(document.querySelector('.guess').value);
    number = document.querySelector('.guess').value;

})

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function (){
   // console.log(document.querySelector('.guess').value);
    const guess = Number (document.querySelector('.guess').value)
    console.log(typeof guess);
    if (guess === secretNumber){
        if (guess <= 20 && guess >= 1)
        console.log('if');
        document.querySelector('.message').textContent = 'Bonne réponse.'
    }
    else if (guess < secretNumber)
        document.querySelector('.message').textContent = 'Valeur entrée en dessous'
    else if (guess > secretNumber)
        document.querySelector('.message').textContent = 'Valeur entrée au dessus'
    else
        document.querySelector('.message').textContent = 'Une erreur est survenue'
    console.log('bye');
}
)
