import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types/User';
import AxiosInstance from '../helper/axiosInstance';
export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  // Declare the type your function argument here:
  async () => {
    try {
      const response = await AxiosInstance().get('users');
      const userInfo = response.data;
      console.log(userInfo);

      return {
        fullName: userInfo.name,
        email: userInfo.email,
        picture: userInfo.picture,
        facility: userInfo.facility,
        phone: userInfo.phone,
        classCode: userInfo.classCode,
      };
      // Inferred return type: Promise<MyData>
    } catch (err) {
      console.log(err);
    }
  },
);
export type LoadingModalSliceState = {
  userInfo: User | undefined;
};
const userSliceInitialState: LoadingModalSliceState = {
  userInfo: undefined,
};
export const UserSlice = createSlice({
  name: 'user',
  initialState: userSliceInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, state => {})
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {});
  },
});
export default UserSlice.reducer;
