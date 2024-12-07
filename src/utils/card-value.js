/**
 * This function return the value of a card.
 * @param {String} card 
 * @returns the value of the card.
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === 'A' ? 11 : 10) : parseInt(value);
};