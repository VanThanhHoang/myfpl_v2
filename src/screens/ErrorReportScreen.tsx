import ScreenContainer from '../components/ScreenContainer';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import {Text} from '../components/text/StyledText';
import ScreenToolBar from '../components/ScreenToolBar';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../navigation/AppNavigator';
import {StyleSheet, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {AppAnimations} from '../constant/AppAsset';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Color} from '../constant/Colors';
const ErorReportScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <ScreenContainer>
      <ScreenToolBar
        onButtonBackPress={() => {
          navigation.goBack();
        }}
        title="Báo lỗi ứng dụng"
      />
      <View style={{flex: 1, padding: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              height: 150,
            }}>
            <AnimatedLottieView autoPlay loop source={AppAnimations.eror} />
          </View>
          <Text style={styles.content}>
            Mong bạn thông cảm với sự cố không mong muốn hoặc trải nghiệm không
            tốt của ứng dung, bạn có thể gửi báo cáo cho đội ngũ phát triển,
            chúng tôi sẽ xem xét và cải thiện ứng dụng trong thời gian nhanh
            nhất. Cảm ơn.
          </Text>
          <TextInput multiline style={styles.textInput} />
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Gửi phản hồi</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  buttonLabel: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
  button: {
    elevation: 3,
    borderRadius: 15,
    backgroundColor: Color.MAINCOLOR,
    width: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  content: {
    textAlign: 'justify',
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
  },
  textInput: {
    padding: 20,
    elevation: 2,
    marginVertical: 20,
    width: '98%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#faf1e6',
  },
});

export default ErorReportScreen;
