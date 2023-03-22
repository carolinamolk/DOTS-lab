/*
 * DOTS: Level One
 *
 */

let score = 0

const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

const clicked = () => {
    score += 10
    scoreDisplay.innerText = score

    if (score >= 30){
        levelWinner.style.opacity = 1}
}

ball.addEventListener('click', clicked)

