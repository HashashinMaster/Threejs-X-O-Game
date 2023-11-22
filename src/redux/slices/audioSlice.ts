import { createSlice } from "@reduxjs/toolkit";

export interface AudioState {
  playAudio: boolean;
  selectAudioTrigger: boolean;
  successAudioTrigger: boolean;
}

const initialState: AudioState = {
  playAudio: false,
  selectAudioTrigger: false,
  successAudioTrigger: false,
};

const audioSlice = createSlice({
  name: "audios",
  initialState,
  reducers: {
    toggleMusic(state) {
      state.playAudio = !state.playAudio;
    },
    triggerSelectAudio(state) {
      state.selectAudioTrigger = !state.selectAudioTrigger;
    },
    triggerSuccessAudio(state) {
      state.successAudioTrigger = !state.successAudioTrigger;
    },
  },
});

export const { toggleMusic, triggerSelectAudio } = audioSlice.actions;

export default audioSlice.reducer;
