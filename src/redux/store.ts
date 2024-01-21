import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import statusReducer, { StatusState } from './statusSlice';

interface RootState {
  status: StatusState;
}

export const store = configureStore({
  reducer: {
    status: statusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;
