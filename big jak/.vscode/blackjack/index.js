let player = {
    name:"peer",
    chips:200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
//console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips

// Function to generate a random card value
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber > 10 ? 10 : (randomNumber === 1 ? 11 : randomNumber)
}

// Start the game by resetting state and drawing two cards
function startGame() {
    isAlive = true
    hasBlackJack = false
    cards = [getRandomCard(), getRandomCard()]
    sum = cards.reduce((acc, card) => acc + card, 0)  // sum the initial cards
    renderGame()
}

// Render the game state to the UI
function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ")  // Join cards for display
    sumEl.textContent = "Sum: " + sum

    if (sum === 21) {
        message = "You have got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    } else {
        message = "Do you want to draw a new card?"
    }

    messageEl.textContent = message
}

// Add a new card if the player is still in the game and hasn't won
function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
