import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

type NewsTabItem = {
  isSelected: boolean;
  name: string;
  onPress: Function;
};

export const NewsTabItem = ({name, isSelected, onPress}: NewsTabItem) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(name);
      }}
      style={[styles.container]}>
      <Text style={isSelected && {color: 'red'}}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 'auto',
  },
});
export default NewsTabItem;
