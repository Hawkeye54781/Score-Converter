import { Injectable } from '@angular/core';

export enum TennisScores {
  LOVE = 0,
  FIFTEEN = 1,
  THIRTY = 2,
  FORTHY = 3,
}

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  public calculateTennisScore(
    playerOneScore: number,
    playerTwoScore: number
  ): string {
    if (playerOneScore <= 0 && playerTwoScore <= 0) {
      return 'Goota play the game guy!';
    }

    switch (playerTwoScore > 0 || playerOneScore > 0) {
      case playerOneScore === TennisScores.FORTHY &&
        playerTwoScore === TennisScores.FORTHY:
        return 'Deuce';
      case playerOneScore > TennisScores.THIRTY &&
        playerTwoScore > TennisScores.THIRTY &&
        (playerOneScore > playerTwoScore || playerTwoScore > playerOneScore):
        if (playerOneScore > playerTwoScore) {
          return 'Advantage Player 1';
        } else {
          return 'Advantage Player 2';
        }
        case (playerOneScore <= TennisScores.THIRTY &&
        playerTwoScore > TennisScores.FORTHY) ||
        (playerTwoScore <= TennisScores.THIRTY &&
          playerOneScore > TennisScores.FORTHY):
        if (playerOneScore > playerTwoScore) {
          return 'Player 1 Wins!';
        } else {
          return 'Player 2 Wins!';
        }
      default:
        return `Player 1: ${TennisScores[playerOneScore]} \n Player Two: ${TennisScores[playerTwoScore]}`;
    }
  }
}
