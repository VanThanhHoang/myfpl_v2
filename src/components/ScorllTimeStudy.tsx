import {View, Text, Image, StyleSheet} from 'react-native';
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {AppIcons} from '../constant/AppAsset';
import {Color} from '../constant/Colors';
const ScrollTimeStudy = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Hôm nay');
  const [items, setItems] = useState([
    {label: '15 ngày trước', value: '15 ngày trước'},
    {label: '7 ngày trước', value: '7 ngày trước'},
    {label: 'Hôm nay', value: 'Hôm nay'},
    {label: '7 ngày tới', value: '7 ngày tới'},
    {label: '15 ngày tới', value: '15 ngày tơi'},
  ]);
  return (
    <View
      style={{
        marginTop: 20,
        zIndex: 3,
        height: 50,
        padding: 20,
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
  iconDropDown: {width: 18, height: 18, tintColor: Color.MAINCOLOR},
});
export default ScrollTimeStudy;
