import _ from 'underscore';

/**
 * This function create a new deck of cards.
 * @param {Array<String>} cardTypes 
 * @param {Array<String>} especialTypes 
 * @returns {Array<String>} Return a new deck of cards.
 */
export const createDeck = (cardTypes, especialTypes) => {

    if(!cardTypes) throw new Error('Card types is needed');
    if(cardTypes.length === 0) throw new Error('Card types is empty');
    if(!especialTypes) throw new Error('Especial types is needed');
    if(especialTypes.length === 0) throw new Error('Especial types is empty');  

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let type of cardTypes) {
            deck.push(i + type);
        }
    }
    for (let type of cardTypes) {
        for (let esp of especialTypes) {
            deck.push(esp + type);
        }
    }
    return _.shuffle(deck);
};