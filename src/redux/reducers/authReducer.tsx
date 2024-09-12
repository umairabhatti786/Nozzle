import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface AuthState {
  user: any;
  token: string;
}
export const initialState: AuthState = {
  user: null,
  token: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, {payload}: PayloadAction<AuthState>) => {
      state.user = payload;
    },
    setToken: (state, {payload}: PayloadAction<AuthState>) => {
      state.token = payload;
    },
 
  },
});

export const {setUserData, setToken,setUserCapturePicture} = authSlice.actions;
export default authSlice.reducer;
export const getUserData = (state: RootState) => state?.auth.user;
export const getToken = (state: RootState) => state?.auth.token;

