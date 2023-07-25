import { Image, StyleSheet, Text, View } from 'react-native';
import { AppIcons, AppImages } from '../constant/AppAsset';
import QRCode from 'react-native-qrcode-svg';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PoppinsText } from './text/StyledText';
const StudentCard = () => {
  const [showQr, setShowQr] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            setShowQr(!showQr);
          }}
          style={{ width: 100 }}>
          {!showQr ? (
            <Image
              style={[styles.avatar]}
              source={require('../assets/img/anhthesv.jpg')}
            />
          ) : (
            <QRCode
              logo={AppIcons.poly}
              logoSize={20}
              logoBackgroundColor="white"
              value="https://www.facebook.com/luvmbdev/"
            />
          )}

          <PoppinsText style={{ fontSize: 12, fontWeight: '700' }}>
            {!showQr
              ? 'Chạm để hiển thị mã QR'
              : 'Chạm để hiển thị ảnh sinh viên'}
          </PoppinsText>
        </TouchableOpacity>
        <View style={{ marginLeft: 30 }}>
          <NameView />
          <InfoView infoType="MSSV/StudentId" value="PS25812" />
          <InfoView infoType="Giá trị đến/Valid to" value="12/2024" />
          <View style={styles.webSchoolContainer}>
            <PoppinsText
              style={{
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
              }}>
              Caodang.fpt.edu.vn
            </PoppinsText>
          </View>
        </View>
      </View>
      {/* <Image
        style={{
          resizeMode: 'center',
          position: 'absolute',
          width: 90,
          height: 90,
          bottom: 30,
          right: 10,
        }}
        source={AppIcons.poly}
      /> */}
    </View>
  );
};
const NameView = () => {
  return (
    <View>
      <PoppinsText style={styles.infoTypeLabel}>Họ và tên/Name</PoppinsText>
      <PoppinsText style={{ color: '#f27126', fontWeight: '900' }}>HOÀNG VĂN THÀNH</PoppinsText>
    </View>
  );
};
type InfoViewProp = {
  infoType: string;
  value: string;
};
const InfoView = ({ infoType, value }: InfoViewProp): React.JSX.Element => {
  return (
    <View>
      <PoppinsText style={styles.infoTypeLabel}>{infoType}</PoppinsText>
      <PoppinsText style={{ color: 'black', fontWeight: '700' }}>{value}</PoppinsText>
    </View>
  );
};
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.polyImage} source={AppImages.poly} />
      <View style={styles.schoolInfoContainer}>
        <PoppinsText style={styles.schoolName}>Trường Cao đẳng FPT Polytechnic</PoppinsText>
        <View style={styles.cardNameContainer}>
          <PoppinsText style={styles.cardName}>THẺ SINH VIÊN</PoppinsText>
        </View>
        <PoppinsText style={[styles.schoolName]}>StudentCard</PoppinsText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoTypeLabel: { color: 'black', fontWeight: '400' },
  webSchoolContainer: {
    height: 25,
    fontWeigh: '400',
    justifyContent: 'center',
    backgroundColor: '#1975be',
    marginVertical: 10,
    width: 150,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  avatar: {
    height: 110,
    borderRadius: 10,
    width: 100,
  },
  cardName: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardNameContainer: {
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 25,
    justifyContent: 'center',
    backgroundColor: '#f27126',
  },
  schoolInfoContainer: {
    width: 220,
    justifyContent: 'center',
    marginLeft: 10,
  },
  schoolName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
    color: 'black',
  },
  container: {
    padding: 10,
    marginTop: 50,
    width: '95%',
    height: 230,
    alignSelf: 'center',
    borderRadius: 18,
    backgroundColor: 'white',
    elevation: 5,
  },
  polyImage: {
    resizeMode: 'center',
    width: 100,
    height: 50,
  },
  headerContainer: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
});
export default StudentCard;
{
  /* <View
style={{
  borderRadius: 7,
  width: 70,
  height: 100,
  backgroundColor: 'red',
}}></View> */
}
