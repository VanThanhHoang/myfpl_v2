import React, {memo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AppIcons} from '../../constant/AppAsset';
import 'moment/locale/vi';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/AppNavigator';
import {Text} from '../text/StyledText';
type ListNewsItemProps = {
  name: string;
  timePushlish: string;
  title: string;
  content: string;
  newsType: string;
};
const ListNewsItem: React.FC<ListNewsItemProps> = ({
  name,
  timePushlish,
  title,
  content,
  newsType,
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
      <Text numberOfLines={3} style={styles.content}>
        {content}
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AuthorView name={name} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{width: 12, height: 12}}
            source={AppIcons.time}
          />
          <Text style={styles.timeText}>{datetime.fromNow()}</Text>
        </View>
        <View style={styles.newsTypeContainer}>
          <Text style={{fontSize: 12, fontWeight: '700', color: 'white'}}>
            {newsType}
          </Text>
        </View>
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
  content: {fontSize: 15, color: '#8b9cab', fontWeight: '500'},
  newsTypeContainer: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 20,
    elevation: 2,
    backgroundColor: '#0b85e5',
  },
  timeText: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#7c8b98',
  },
  container: {
    overflow: 'scroll',
    margin: 3,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    height: 155,
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#0e3656',
    fontSize: 17,
    marginRight: 10,
    marginVertical: 5,
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
