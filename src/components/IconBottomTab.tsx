import {View, StyleSheet, Image, ImageSourcePropType, Text} from 'react-native';
import {Color} from '../constant/Colors';
type IconBottomTabProps = {
  color: string;
  name: string;
  icon: ImageSourcePropType;
  focused: boolean;
};
const IconBottomTab = ({color, name, icon, focused}: IconBottomTabProps) => {
  return (
    <View
      style={[
        styles.container,
        focused && {backgroundColor: Color.MAINCOLOR, elevation: 2},
      ]}>
      <Image style={[styles.icon, {tintColor: color}]} source={icon} />
      {focused && <Text style={[styles.label, {color: color}]}>{name}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    tintColor: 'black',
    width: 17,
    height: 17,
  },
  container: {
    width: 65,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
  },
});
export default IconBottomTab;
