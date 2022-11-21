'use strict';


const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.roll_game');
const divActive1 = document.querySelector('.div_1');
const divNonActive = document.querySelector('.div_2');
const player_score_1 = document.querySelector('.score_player_1');
const player_score_2 = document.querySelector('.score_player_2');
const hold_btn = document.querySelector('.hold');
// const playerScore1 = document.querySelector('.score_player_1');
// const playerScore2 = document.querySelector('.score_player_2');
const newBtn = document.querySelector('.new_game');


player_score_1.textContent = 0;
player_score_2.textContent = 0;


const score = [0, 0];

let currentScore = 0;
let currentPlayer = 1;
let playing = true;
dice.classList.add('hidden');


const chageRoll = function () {

    currentScore = 0;
    document.querySelector(`.current_score_${currentPlayer}`).textContent = currentScore;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    divActive1.classList.toggle('back_1');
    divNonActive.classList.toggle('back_1');
}


rollDice.addEventListener('click', function () {
    if (playing) {


        const randomeDice = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `img/dice-${randomeDice}.png`;

        if (randomeDice !== 1) {
            currentScore += randomeDice;
            document.querySelector(`.current_score_${currentPlayer}`).textContent = currentScore;



        } else {

            chageRoll();
        }
    }
});




hold_btn.addEventListener('click', function () {
    if (playing) {


        score[currentPlayer - 1] += currentScore;

        document.querySelector(`.score_player_${currentPlayer}`).textContent = score[currentPlayer - 1];

        if (score[currentPlayer - 1] >= 20) {
            playing = false;
            console.log(currentPlayer);
            document.querySelector(`.div_${currentPlayer}`).classList.add('wine');
            dice.classList.add('hidden');


        } else {
            chageRoll();
        }

    }
});

newBtn.addEventListener('click', function () {
    document.querySelector(`.div_${currentPlayer}`).classList.remove('wine');
    currentPlayer = 1;
    currentScore = 0;
    score[0] = 0;
    score[1] = 0;
    player_score_1.textContent = '0';
    player_score_2.textContent = '0';
    document.querySelector(`.current_score_1`).textContent = '0';
    document.querySelector(`.current_score_2`).textContent = '0';
    dice.classList.add('hidden');
    playing = true;






});













