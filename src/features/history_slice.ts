import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommandHistory {
  original: string; 
  optimized: string;
  date: string; 
  beforeState: Record<string, any>; 
  afterState: Record<string, any>; 
}

interface HistoryState {
  history: CommandHistory[];
}

const initialState: HistoryState = {
  history: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<CommandHistory>) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;
