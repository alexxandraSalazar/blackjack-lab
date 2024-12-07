/**
 * Ask a card from the deck
 * @param {Array<String>} deck 
 * @returns The card that was asked.
 */
export const askCard = (deck) => {
    if (deck.length === 0) throw ('No more cards in deck');
    return deck.pop();
};