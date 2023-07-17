import React, {memo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {AppIcons} from '../../constant/AppAsset';

type ListNewsItemProps = {
  name: string;
  time: string;
  title: string;
};
const ListNewsItem: React.FC<ListNewsItemProps> = ({name, time, title}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} lineBreakMode="middle" style={[styles.title]}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AuthorView name={name} />
        <Text style={styles.timeText}>* {time}</Text>
      </View>
    </View>
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
  title: {
    color: '#323f53',
    fontSize: 16,
    marginRight: 10,
    marginVertical: 2,
    width: '100%',
    fontWeight: '700',
    marginTop: 10,
  },
  timeText: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#a9aeb6',
  },
  container: {
    margin: 3,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'column',
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginBottom: 10,
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
