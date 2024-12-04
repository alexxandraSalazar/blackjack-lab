import '../css/styles.css';
import _ from 'underscore';

const myModule = (() => {
    'use strict';

    // Global variables
    let deck = [];
    const types = ['C', 'D', 'H', 'S'],
        special = ['A', 'J', 'Q', 'K'];
    let playersPoints = [];
    let msg;

    // HTML references
    const btnAsk = document.querySelector('#btnAsk'),
        btnStop = document.querySelector('#btnStop'),
        btnNew = document.querySelector('#btnNew'),
        pointsRef = document.querySelectorAll('small'),
        divCardPlayers = document.querySelectorAll('.divCards');

    const inicializeGame = (cantPlayers = 2) => {
        deck = createDeck();
        playersPoints = Array(cantPlayers).fill(0);

        pointsRef.forEach(elem => elem.innerText = 0);
        divCardPlayers.forEach(elem => elem.innerHTML = '');

        btnAsk.disabled = false;
        btnStop.disabled = false;
    };

    const createDeck = () => {
        deck = [];
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
        return _.shuffle(deck);
    };

    const askCard = () => {
        if (deck.length === 0) throw ('No more cards in deck');
        return deck.pop();
    };

    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1);
        return isNaN(value) ? (value === 'A' ? 11 : 10) : parseInt(value);
    };

    const accumulatePoints = (card, turn) => {
        playersPoints[turn] += cardValue(card);
        pointsRef[turn].innerText = playersPoints[turn];
        return playersPoints[turn];
    };

    const createCard = (card, turn) => {
        const newCard = document.createElement('img');
        newCard.src = `../cartas/${card}.png`;
        newCard.classList.add('cards');
        divCardPlayers[turn].append(newCard);
    };

    const determinateWinner = () => {
        const [minPoints, computerPoints] = playersPoints;
        if (computerPoints === minPoints) {
            msg = "It's a tie";
        } else if (computerPoints > minPoints && computerPoints <= 21) {
            msg = "Computer wins";
        } else {
            msg = "Computer wins";
        }
    };

    const computerTurn = (minPoints) => {
        let computerPoints;
        do {
            const card = askCard();
            computerPoints = accumulatePoints(card, playersPoints.length - 1);
            createCard(card, playersPoints.length - 1);
            if (minPoints > 21) break;
        } while (computerPoints < minPoints && computerPoints <= 21);
        determinateWinner();
        return msg;
    };

    btnAsk.addEventListener('click', () => {
        const card = askCard();
        const playerPoints = accumulatePoints(card, 0);
        createCard(card, 0);

        if (playerPoints > 21) {
            btnAsk.disabled = true;
            btnStop.disabled = true;
            Swal.fire({
                icon: "error",
                title: "You lost...",
                text: computerTurn(playerPoints)
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

    btnStop.addEventListener('click', () => {
        const [playerPoints] = playersPoints;
        const showMsg = computerTurn(playerPoints);
        Swal.fire({
            icon: showMsg === "It's a tie" ? "info" : "error",
            title: showMsg === "It's a tie" ? 'Nobody won' : "You lost...",
            text: showMsg
        });
        btnAsk.disabled = true;
        btnStop.disabled = true;
    });

    btnNew.addEventListener('click', () => {
        inicializeGame();
    });
    return {
        newGame: inicializeGame 
    };
})();