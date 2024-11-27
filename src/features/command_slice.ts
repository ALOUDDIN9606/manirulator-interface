import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommandState {
  commands: string[];
}

const initialState: CommandState = {
  commands: [],
};

const commandSlice = createSlice({
  name: 'command',
  initialState,
  reducers: {
    addCommand: (state, action: PayloadAction<string>) => {
      state.commands.push(action.payload);
    },
    removeCommand: (state, action: PayloadAction<number>) => {
      state.commands.splice(action.payload, 1);
    },
    clearCommands: (state) => {
      state.commands = [];
    },
  },
});

export const { addCommand, removeCommand, clearCommands } = commandSlice.actions;

export default commandSlice.reducer;
