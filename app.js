const secretNum = Math.ceil(Math.random() * 5)
let tries = 0
let points = 0

function guessNum(num) {
    if (tries >= 3) alert('Game Over')

        if (num === secretNum) {
            points++
            alert(`You recieve a point! Your score:${points}`)
            tries = 0
        }
        else {
            points <= 0 ? points = 0 : points--
            alert(`You miss! Your score:${points}`)
            tries++
        }

}