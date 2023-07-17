import {google} from 'googleapis';
import auth from '@react-native-firebase/auth';
export const getEmail = async () => {
  // Lấy mã thông báo truy cập từ người dùng đã đăng nhập
  const currentUser = auth().currentUser;
  console.log('==============', currentUser);
  if (currentUser) {
  }
};
