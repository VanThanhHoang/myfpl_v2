import {Image, StyleSheet, Text, View} from 'react-native';
import {AppIcons, AppImages} from '../constant/AppAsset';

const StudentCard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://lh3.googleusercontent.com/a/AAcHTteekTstA5kgs1FHesSYpP7-lUiLXgONjLeDp_-IhzB0=s96-c',
          }}
        />
        <View style={{marginLeft: 30}}>
          <NameView />
          <InfoView infoType="MSSV/StudentId" value="PS25812" />
          <InfoView infoType="Giá trị đến/Valid to" value="12/2024" />
          <View style={styles.webSchoolContainer}>
            <Text
              style={{
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
              }}>
              Caodang.fpt.edu.vn
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={{
          resizeMode: 'center',
          position: 'absolute',
          width: 90,
          height: 90,
          bottom: 30,
          right: 10,
        }}
        source={AppIcons.poly}
      />
    </View>
  );
};
const NameView = () => {
  return (
    <View>
      <Text style={styles.infoTypeLabel}>Họ và tên/Name</Text>
      <Text style={{color: '#f27126', fontWeight: '900'}}>HOÀNG VĂN THÀNH</Text>
    </View>
  );
};
type InfoViewProp = {
  infoType: string;
  value: string;
};
const InfoView = ({infoType, value}: InfoViewProp): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.infoTypeLabel}>{infoType}</Text>
      <Text style={{color: 'black', fontWeight: '700'}}>{value}</Text>
    </View>
  );
};
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.polyImage} source={AppImages.poly} />
      <View style={styles.schoolInfoContainer}>
        <Text style={styles.schoolName}>Trường Cao đẳng FPT Polytechnic</Text>
        <View style={styles.cardNameContainer}>
          <Text style={styles.cardName}>THẺ SINH VIÊN</Text>
        </View>
        <Text style={[styles.schoolName]}>StudentCard</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoTypeLabel: {color: 'black', fontWeight: '400'},
  webSchoolContainer: {
    height: 25,
    justifyContent: 'center',
    backgroundColor: '#1975be',
    marginVertical: 10,
    width: 150,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  avatar: {
    borderRadius: 10,
    width: 100,
    height: 120,
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
    borderRadius: 20,
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
