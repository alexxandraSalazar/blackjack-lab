/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S']
const special = ['A', 'J', 'Q', 'K']

const createDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let type of types){
        deck.push(i + type);
        }
    }
    console.log(deck);
}

createDeck();