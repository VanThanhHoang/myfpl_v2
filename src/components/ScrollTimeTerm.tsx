import {View, Text, Image, StyleSheet, DimensionValue} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {AppIcons} from '../constant/AppAsset';
import {Color} from '../constant/Colors';
const ScrollTimeTerm: React.FC<{width?: DimensionValue}> = ({width}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Spring 2023');
  const [items, setItems] = useState([
    {label: 'Fall 2023', value: 'Fall 2023'},
    {label: 'Summer 2023', value: 'Summer 2023'},
    {label: 'Spring 2023', value: 'Spring 2023'},
    {label: 'Fall 2022', value: 'Fall 2022'},
    {label: 'Summer 2022', value: 'Summer 2022'},
  ]);
  return (
    <View
      style={{
        width: width ? width : '100%',
        marginTop: 20,
        zIndex: 3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DropDownPicker
        style={{
          elevation: 3,
          borderWidth: 0,
          borderColor: Color.MAINCOLOR,
        }}
        containerStyle={{borderWidth: 0}}
        ArrowDownIconComponent={() => (
          <Image style={styles.iconDropDown} source={AppIcons.arr_down} />
        )}
        ArrowUpIconComponent={() => (
          <Image style={styles.iconDropDown} source={AppIcons.arr_up} />
        )}
        dropDownContainerStyle={{
          backgroundColor: '#f2f2f2',
          borderColor: Color.MAINCOLOR,
          marginTop: 15,
          borderWidth: 0,
        }}
        textStyle={{color: Color.MAINCOLOR, fontWeight: '700'}}
        TickIconComponent={() => (
          <Image style={{width: 24, height: 24}} source={AppIcons.poly} />
        )}
        selectedItemContainerStyle={{
          backgroundColor: '#e3e2ff',
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  iconDropDown: {
    marginRight: 10,
    width: 15,
    height: 15,
    tintColor: Color.MAINCOLOR,
  },
});
export default ScrollTimeTerm;
