import { cardValue } from './card-value.js';
/**
 * This function accumulates the points of the player
 * @param {String} card 
 * @param {Int} turn 
 * @param {Array<Int>} playerPoints 
 * @param {Array<Int>} pointsRef 
 * @returns the points of the player
 */
export const accumulatePoints = (card, turn,playersPoints,pointsRef) => {
    playersPoints[turn] += cardValue(card);
    pointsRef[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
};