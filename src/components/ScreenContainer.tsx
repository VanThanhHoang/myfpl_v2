import {SafeAreaView, StyleSheet} from 'react-native';

const ScreenContainer = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: 'white',
  },
});
export default ScreenContainer;
