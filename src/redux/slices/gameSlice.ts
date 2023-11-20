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
  winner: Player | undefined;
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
  winner: undefined,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialStart(
      state,
      action: PayloadAction<{ player1Name: string; player2Name: string }>
    ) {
      state.player1.name = action.payload.player1Name;
      state.player2.name = action.payload.player2Name;
      state.currentPlayer = Math.random() < 0.5 ? state.player1 : state.player2;
    },
    addPlayerMove(
      state,
      action: PayloadAction<{ player: "player1" | "player2"; move: number }>
    ) {
      const { player, move } = action.payload;
      state[player].moves.push(move);
    },
  },
});

export const { initialStart, addPlayerMove } = counterSlice.actions;
export default counterSlice.reducer;
