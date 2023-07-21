import {View, StyleSheet, Text} from 'react-native';
type UserInfoCardProps = {
  infoLabel: string;
  info: string;
};
const UserInfoCard = ({info, infoLabel}: UserInfoCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoLabel}>{infoLabel}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '100%',
  },
  info: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 30,
    color: '#595151',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: '#bababa',
  },
  infoLabel: {
    marginVertical: 5,
    fontWeight: '700',
    color: 'black',
    fontSize: 19,
  },
});
export default UserInfoCard;
