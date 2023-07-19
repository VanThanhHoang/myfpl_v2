import {View, StyleSheet, Text} from 'react-native';
import {Color} from '../constant/Colors';

type ScreenToolBar = {
  title: string;
};
const ScreenToolBar = ({title}: ScreenToolBar) => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabBarTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tabBarTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Color.MAINCOLOR,
    elevation: 3,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
export default ScreenToolBar;
