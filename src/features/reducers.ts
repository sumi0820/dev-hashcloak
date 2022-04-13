import { combineReducers } from 'redux';
import { isErrorSlice } from './error';
import { waitlistSlice } from './waitlist';

const reducers = combineReducers({
  waitlist: waitlistSlice.reducer,
  isError: isErrorSlice.reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
