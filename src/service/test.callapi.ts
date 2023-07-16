import AxiosInstance from '../helper/axiosInstance';

export const getData = async () => {
  try {
    console.log('dang lay data');
    const res = await AxiosInstance().get('api/getCategory');
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
