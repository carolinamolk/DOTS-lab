/*
 * DOTS: Level Two
 *
 */

let score = 0

const ball = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

const clicked = () => {
    score += 10
    scoreDisplay.innerText = score

    if (score >= 30){
        levelWinner.style.opacity = 1}
}

ball.forEach((b) => {b.addEventListener('click', clicked) })

