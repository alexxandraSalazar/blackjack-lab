import './assets/style.css';
import { askCard,createDeck, computerTurn, accumulatePoints, createCard} from './utils/index.js';

const myModule = (() => {
    'use strict';
    // Global variables
    let deck;
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
        deck = createDeck(types, special);
        playersPoints = Array(cantPlayers).fill(0);

        pointsRef.forEach(elem => elem.innerText = 0);
        divCardPlayers.forEach(elem => elem.innerHTML = '');

        btnAsk.disabled = false;
        btnStop.disabled = false;
    };


    btnAsk.addEventListener('click', () => {
        const card = askCard(deck);
        const playerPoints = accumulatePoints(card, 0,playersPoints,pointsRef);
        createCard(card, 0, divCardPlayers);

        if (playerPoints > 21) {
            btnAsk.disabled = true;
            btnStop.disabled = true;
            Swal.fire({
                icon: "error",
                title: "You lost...",
                text: computerTurn(playerPoints,deck, playersPoints, pointsRef, divCardPlayers)
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
        const showMsg = computerTurn(playerPoints,deck, playersPoints, pointsRef, divCardPlayers);
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