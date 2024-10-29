/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S']
const special = ['A', 'J', 'Q', 'K']

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
    console.log(deck);
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

