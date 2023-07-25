import React, {memo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {AppIcons} from '../../constant/AppAsset';
import {TouchableOpacity} from 'react-native-gesture-handler';
import 'moment/locale/vi';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/AppNavigator';
type ListNewsItemProps = {
  name: string;
  timePushlish: string;
  title: string;
  content: string;
};
const ListNewsItem: React.FC<ListNewsItemProps> = ({
  name,
  timePushlish,
  title,
  content,
}) => {
  const navigation = useNavigation<AppNavigationProp>();
  const datetime = moment(timePushlish, 'YYYYMMDD');
  // Tùy chỉnh ngôn ngữ thành tiếng Việt
  datetime.locale('vi');
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailNews');
      }}
      style={styles.container}>
      <Text numberOfLines={2} lineBreakMode="middle" style={[styles.title]}>
        {title}
      </Text>
      <Text numberOfLines={3} style={{fontSize: 14, color: '#7b90a0'}}>
        {content}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AuthorView name={name} />
        <Text style={styles.timeText}>{datetime.fromNow()}</Text>
      </View>
    </TouchableOpacity>
  );
};
const AuthorView: React.FC<{name: string}> = ({name}) => {
  const authorstyles = StyleSheet.create({
    container: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 12,
      height: 12,
      marginRight: 10,
    },
  });
  return (
    <View style={authorstyles.container}>
      <Image style={authorstyles.image} source={AppIcons.admin} />
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  timeText: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#a9aeb6',
  },
  container: {
    overflow: 'scroll',
    margin: 3,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    height: 120,
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#11324e ',
    fontSize: 16,
    marginRight: 10,
    marginVertical: 2,
    width: '100%',
    fontWeight: '700',
  },
  nameText: {
    color: '#0063ac',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 'auto',
  },
});

export default memo(ListNewsItem);
{
  /* <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.BACKGROUND,
          borderStyle: 'dashed',
          marginTop: 6,
        }}></View>
   */
}
