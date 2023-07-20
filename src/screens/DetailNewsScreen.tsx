import ScreenContainer from '../components/ScreenContainer';
import ScreenToolBar from '../components/ScreenToolBar';
import {Text, StyleSheet, View, Image} from 'react-native';
import {AppIcons, AppImages} from '../constant/AppAsset';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../navigation/AppNavigator';
const DetailNewsScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const datetime = moment('2023-07-18T17:21:19.791Z', 'YYYYMMDD');
  // Tùy chỉnh ngôn ngữ thành tiếng Việt
  datetime.locale('vi');
  return (
    <ScreenContainer>
      <ScreenToolBar
        onButtonBackPress={() => {
          navigation.goBack();
        }}
        title="Chi tiết bài đăng"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.banner}
          source={require('../assets/img/img_banner.png')}
        />
        <View style={{padding: 24}}>
          <Text style={styles.title}>Bí quyết thành công trong học tập</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.authorContainer}>
              <Image style={styles.image} source={AppIcons.admin} />
              <Text style={styles.nameText}>Hoàng Văn Thành</Text>
            </View>
            <Text style={styles.nameText}>
              {datetime.format('Do MMM  YYYY')}
            </Text>
          </View>
          <Text style={styles.contentText}>
            Phòng Đào Tạo thông báo yêu cầu các bạn sinh viên đang thiếu bằng
            tốt nghiệp THPT vui lòng bổ sung đầy đủ hồ sơ. Nộp bản sao/photo
            công chứng bằng THPT là yêu cầu bắt buộc để lưu trữ hồ sơ sinh viên
            trong suốt quá trình học tập đến khi được xét tốt nghiệp. Sau thời
            hạn bổ sung bên dưới, sinh viên chưa bổ sung bằng THPT sẽ bị đình
            chỉ học tập mức cao nhất: BUỘC THÔI HỌC Hồ sơ nộp: 1 bản sao hoặc
            photo công chứng (trong vòng 6 tháng) bằng THPT. Trường hợp sinh
            viên học trung cấp thì có thể nộp bản sao hoặc photo công chứng
            (trong vòng 6 tháng) bằng tốt nghiệp trung cấp. Địa điểm nộp: - Cơ
            sở Nguyễn Kiệm: Phòng Đào Tạo - Tầng 1 - 778/B1 Nguyễn Kiệm, Phường
            4, Quận Phú Nhuận, TP.HCM. - Cơ sở Quang Trung: Phòng Đào Tạo - Tầng
            trệt Tòa nhà T (QTSC9) - Công viên phần mềm Quang Trung, Phường Tân
            Chánh Hiệp, Quận 12, TP.HCM. Hạn nộp:31/07/2023 Sinh viên có thể
            truy cập TẠI ĐÂY để kiểm tra thông tin cá nhân cũng như thông tin
            nộp bằng THPT (sinh viên chưa bổ sung bằng THPT sẽ được ghi chú
            "Chưa nộp bằng THPT") Trân trọng, Phòng TC&QLDT.
          </Text>
        </View>
        <Image
          style={{
            alignSelf: 'center',
            marginBottom: 20,
            resizeMode: 'center',
            width: 160,
            height: 70,
          }}
          source={AppImages.poly}
        />
      </ScrollView>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  authorContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  title: {
    color: '#323f53',
    fontSize: 23,
    marginRight: 10,
    marginVertical: 2,
    width: '100%',
    fontWeight: '800',
    marginTop: 10,
  },
  nameText: {
    color: '#9f9f9f',
    fontSize: 16,
    fontWeight: '500',
  },
  contentText: {
    fontSize: 18,
    lineHeight: 24,
    color: 'black',
    textAlign: 'justify',
  },
  banner: {
    borderRadius: 20,
    alignSelf: 'center',
    width: '95%',
    height: 200,
    backgroundColor: 'red',
    marginTop: 30,
    resizeMode: 'cover',
  },
});

export default DetailNewsScreen;
