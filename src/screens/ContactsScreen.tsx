import ScreenContainer from '../components/ScreenContainer';
import {StyleSheet} from 'react-native';
import ScreenToolBar from '../components/ScreenToolBar';
import {Text, View, Image} from 'react-native';
import ContactInfoItem from '../components/ContactInfoItem';
import {ScrollView} from 'react-native-gesture-handler';
import {AppIcons, AppImages} from '../constant/AppAsset';
const ContactInfos = [
  {
    name: 'Phòng Dịch vụ sinh viên',
    info: 'dvsvpoly.hcm@poly.edu.vn',
  },
  {
    name: 'Phòng Đào tạo',
    info: 'dvsvpoly.hcm@poly.edu.vn',
  },
  {
    name: 'Phòng Hành chính',
    info: 'taichinhfplhcm@fe.edu.vn',
  },
  {
    name: 'Phòng Quan hệ doanh nghiệp',
    info: 'qhdn.fplhcm@fe.edu.vn',
  },
  {
    name: 'Phòng Công tác sinh viên',
    info: 'ctsv.fplhcm@fe.edu.vn',
  },
];
const ContactScreen = () => {
  return (
    <ScreenContainer>
      <ScreenToolBar title="Cổng thông tin liên hệ FPOLY" />
      <ScrollView>
        <View
          style={{
            padding: 24,
            paddingTop: 0,
          }}>
          <View
            style={{
              marginTop: 30,
            }}>
            {ContactInfos.map(item => (
              <ContactInfoItem
                key={item.name}
                name={item.name}
                info={item.info}
              />
            ))}
          </View>
        </View>
      </ScrollView>
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
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({});
export default ContactScreen;
