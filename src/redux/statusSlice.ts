import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StatusState {
  value: string;
}

const initialState: StatusState = {
  value: 'normal',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setExceededStatus: (state: StatusState) => {
      return { ...state, value: 'exceeded' };
    },
    setNormalStatus: (state: StatusState) => {
      return { ...state, value: 'normal' };
    },
  },
});

export const { setExceededStatus, setNormalStatus } = statusSlice.actions;
export const selectStatus = (state: { status: StatusState }) => {
  return state.status.value;
};

export default statusSlice.reducer;
