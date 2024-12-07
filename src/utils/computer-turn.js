import { askCard } from './ask-cards.js';
import { determinateWinner } from './determinate-winner.js';
import { accumulatePoints } from './accumulate-points.js';
import { createCard } from './create-card.js';
/**
 * Simulates the computer's turn
 * @param {Int} minPoints 
 * @param {Array<String>} deck 
 * @param {Array<Int>} playersPoints 
 */
export const computerTurn = (minPoints, deck, playersPoints,pointsRef, divCardPlayers) => {
    let computerPoints = 0;
    do {
        const card = askCard(deck);
        computerPoints = accumulatePoints(card, playersPoints.length - 1, playersPoints, pointsRef);
        createCard(card, playersPoints.length - 1, divCardPlayers);
        if (minPoints > 21) break;
    } while (computerPoints < minPoints && computerPoints <= 21);

    return determinateWinner(minPoints, computerPoints);
};
