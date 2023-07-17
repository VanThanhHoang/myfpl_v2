import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Color} from '../constant/Colors';

const ScreenContainer = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.MAINCOLOR} />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    flex: 1,
    backgroundColor: 'white',
  },
});
export default ScreenContainer;
