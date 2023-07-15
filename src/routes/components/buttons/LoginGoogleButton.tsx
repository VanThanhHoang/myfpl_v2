import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const LoginGoogleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Logingg</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
  },
});
export default LoginGoogleButton;
