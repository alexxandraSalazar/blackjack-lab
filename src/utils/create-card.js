/**
 * This function creates a card and appends it to the player's div
 * @param {String} card 
 * @param {Int} turn 
 * @param {Array<Int>} divCardPlayers 
 */
export const createCard = (card, turn, divCardPlayers) => {
    if(!card) throw new Error("Card is required");
    const newCard = document.createElement('img');
    newCard.src = `/assets/cartas/${card}.png`;

    newCard.classList.add('cards');
    divCardPlayers[turn].append(newCard);
};