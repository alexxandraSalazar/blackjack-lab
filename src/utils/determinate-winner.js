/**
 * Determines the winner of the game
 * @param {Int} minPoints 
 * @param {Int} computerPoints 
 */
export const determinateWinner = (minPoints, computerPoints) => {
    if (computerPoints === minPoints) {
        return "It's a tie";
    } else if (computerPoints > minPoints && computerPoints <= 21) {
        return "Computer wins";
    } else {
        return "You win!";
    }
};
