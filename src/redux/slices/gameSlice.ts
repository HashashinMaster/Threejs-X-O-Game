import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Player {
  name: string;
  moves: number[];
}
export interface GameState {
  player1: Player;
  player2: Player;
  currentPlayer: Player;
  winPatterns: number[][];
  winner: {
    player: Player | undefined;
    winPattern: number[];
  };
  restart: boolean;
  draw: boolean;
}

const initialState: GameState = {
  player1: {
    name: "",
    moves: [],
  },
  player2: {
    name: "",
    moves: [],
  },
  currentPlayer: {
    name: "",
    moves: [],
  },
  winPatterns: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ],
  winner: {
    player: undefined,
    winPattern: [],
  },
  restart: false,
  draw: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initialStart(
      state,
      action: PayloadAction<{ player1Name: string; player2Name: string }>
    ) {
      state.player1.name = action.payload.player1Name;
      state.player2.name = action.payload.player2Name;
      state.player1.moves = [];
      state.player2.moves = [];
      state.winner = {
        player: undefined,
        winPattern: [],
      };
      state.draw = false;

      state.currentPlayer = Math.random() < 0.5 ? state.player1 : state.player2;
    },
    addPlayerMove(
      state,
      action: PayloadAction<{ player: "player1" | "player2"; move: number }>
    ) {
      const { player, move } = action.payload;
      state[player].moves.push(move);
      gameSlice.caseReducers.checkForWinner(state);
    },
    toggleCurrentPlayer(state) {
      if (state.currentPlayer.name === state.player1.name) {
        state.currentPlayer = state.player2;
      } else {
        state.currentPlayer = state.player1;
      }
    },
    checkForWinner(state) {
      const totalMoves =
        state.player1.moves.length + state.player2.moves.length;

      for (let winPattern of state.winPatterns) {
        const player1WinMatch = winPattern.every((pt) =>
          state.player1.moves.includes(pt)
        );
        if (player1WinMatch) {
          state.winner.player = state.player1;
          state.winner.winPattern = winPattern;
          return;
        }
        const player2WinMatch = winPattern.every((pt) =>
          state.player2.moves.includes(pt)
        );
        if (player2WinMatch) {
          state.winner.player = state.player2;
          state.winner.winPattern = winPattern;

          return;
        }
      }
      if (totalMoves === 9) {
        state.draw = true;
      }
    },
    toggleRestart(state) {
      state.restart = !state.restart;
    },
  },
});

export const {
  initialStart,
  addPlayerMove,
  toggleCurrentPlayer,
  checkForWinner,
  toggleRestart,
} = gameSlice.actions;
export default gameSlice.reducer;
