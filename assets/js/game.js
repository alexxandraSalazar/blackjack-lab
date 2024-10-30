/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
*/

//Global variables
let deck = [];
const types = ['C', 'D', 'H', 'S']
const special = ['A', 'J', 'Q', 'K']
let playerPoints = 0,
    computerPoints = 0;

let msg;

// HTML's references
const btnAsk = document.querySelector('#btnAsk');
const btnStop = document.querySelector('#btnStop');
const btnNew = document.querySelector('#btnNew');
const pointsRef = document.querySelectorAll('small');
const playerCards = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');

//This function creates a new deck 
const createDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let type of types){
        deck.push(i + type);
        }
    }

    for(let type of types){
        for(let esp of special){
            deck.push(esp + type)
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

createDeck();

//This functions allows me to ask for a card
const askCard = () =>{
    if(deck.length === 0){
        throw('no more cards in deck')
    }
    const card = deck.pop();
    return card;
}

//This funtions return the value of the card
const cardValue = (card) =>{
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ? ((value === 'A') ? 11 : 10) : parseInt(value) 
}

// Computers turn
const computerTurn = (minPoints) => {
    do{
            const card = askCard();
            computerPoints = computerPoints + cardValue(card);
            pointsRef[1].innerHTML = computerPoints;
            const newCard = document.createElement('img');
            newCard.src = `assets/cartas/${card}.png`;
            newCard.classList.add('cards');
            computerCards.append(newCard);

            if(minPoints > 21){
                break;
            }

    }while(minPoints > computerPoints && minPoints <= 21)
    
        setTimeout(() => {
            if(computerPoints === minPoints){
                msg = "It's a tie";
            } else if(computerPoints > minPoints && computerPoints < 21){
                msg = "Computer wins";
            } else{
                msg = "You win";
            }
        }, 1000);
    
    console.log(msg)
}



//Events
btnAsk.addEventListener('click',() =>{
    const card = askCard();
    playerPoints = playerPoints + cardValue(card);
    pointsRef[0].innerText = playerPoints;
    const newCard = document.createElement('img');
    newCard.src = `assets/cartas/${card}.png`;
    newCard.classList.add('cards');
    playerCards.append(newCard);

    msg = (playerPoints > 21 ) ? ('You lost', btnAsk.disabled = true) : 'You win';
    if(playerPoints > 21 ){
        msg = 'You lost';
        btnAsk.disabled = true;
        console.log(msg);
        computerTurn(playerPoints)
    } else if (playerPoints === 21 ){
        msg = 'You win';
        btnAsk.disabled = true;
        console.log(msg)
    }
    else{
        console.log('')
    }
});

btnStop.addEventListener('click', () => {
    computerTurn(playerPoints);
    btnAsk.disabled = true;
    btnNew.disabled = true;
});

btnNew.addEventListener('click', () => {

})

