// Global variables
let deck = [];
const types = ['C', 'D', 'H', 'S'];
const special = ['A', 'J', 'Q', 'K'];
let playerPoints = 0,
    computerPoints = 0;
let msg;

// HTML references
const btnAsk = document.querySelector('#btnAsk');
const btnStop = document.querySelector('#btnStop');
const btnNew = document.querySelector('#btnNew');
const pointsRef = document.querySelectorAll('small');
const playerCards = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');

// Create a new deck function
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let esp of special) {
            deck.push(esp + type);
        }
    }
    deck = _.shuffle(deck);
    return deck;
};

createDeck();

// Ask for a card function
const askCard = () => {
    if (deck.length === 0) throw ('No more cards in deck');
    return deck.pop();
};

// Get card value function
const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === 'A' ? 11 : 10) : parseInt(value);
};

// Computer's turn, returns a message
const computerTurn = (minPoints) => {
    do {
        const card = askCard();
        computerPoints += cardValue(card);
        pointsRef[1].innerText = computerPoints;

        const newCard = document.createElement('img');
        newCard.src = `assets/cartas/${card}.png`;
        newCard.classList.add('cards');
        computerCards.append(newCard);

        if (minPoints > 21) break;

    } while (computerPoints < minPoints && computerPoints <= 21);

    if (computerPoints === minPoints) {
        msg = "It's a tie";
    } else if (computerPoints > minPoints && computerPoints <= 21) {
        msg = "Computer wins";
    } else {
        msg = "computer win";
    }

    return msg;
};

// Player turn
btnAsk.addEventListener('click', () => {
    const card = askCard();
    playerPoints += cardValue(card);
    pointsRef[0].innerText = playerPoints;

    const newCard = document.createElement('img');
    newCard.src = `assets/cartas/${card}.png`;
    newCard.classList.add('cards');
    playerCards.append(newCard);

    if (playerPoints > 21) {
        btnAsk.disabled = true;
        btnStop.disabled = true;
        let showMsg;
        showMsg = computerTurn(playerPoints);
        Swal.fire({
            icon: "error",
            title: "You lost...",
            text: showMsg
        });
    } else if (playerPoints === 21) {
        btnAsk.disabled = true;
        btnStop.disabled = true;
        Swal.fire({
            title: "Good job!",
            text: "You win!",
            icon: "success"
        });
    }
});

// Stop button
btnStop.addEventListener('click', () => {
    let showMsg;
    showMsg = computerTurn(playerPoints);
    title = (showMsg === "It's a tie") ? 'Nobody won' : "You lost...";
    Swal.fire({
        icon: "error",
        title: title,
        text: showMsg
    });
    btnAsk.disabled = true;
    btnStop.disabled = true;
});

// New game
btnNew.addEventListener('click', () => {
    deck = [];
    deck = createDeck();
    playerPoints = 0;
    computerPoints = 0;
    pointsRef[0].innerText = playerPoints;
    pointsRef[1].innerText = computerPoints;
    playerCards.innerHTML = '';
    computerCards.innerHTML = '';
    btnAsk.disabled = false;
    btnStop.disabled = false;
});
