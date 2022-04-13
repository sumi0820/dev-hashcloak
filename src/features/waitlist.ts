/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type WaitlistState = {
  currentPriority: number;
  totalWaitersCurrently: number;
  joinedWaitlist: boolean;
};

const initialState: WaitlistState = {
  currentPriority: 0,
  totalWaitersCurrently: 0,
  joinedWaitlist: false,
};

export const waitlistSlice = createSlice({
  name: 'waitlist',
  initialState,
  reducers: {
    waitlistGotten: (
      state,
      action: PayloadAction<{
        currentPriority: number;
        totalWaitersCurrently: number;
        joinedWaitlist: boolean;
      }>,
    ) => ({
      ...state,
      currentPriority: action.payload.currentPriority,
      totalWaitersCurrently: action.payload.totalWaitersCurrently,
      joinedWaitlist: action.payload.joinedWaitlist,
    }),
  },
});
