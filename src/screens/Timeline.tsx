import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import {Alert} from 'react-native';
import {AppIcons} from '../constant/AppAsset';

// asdasdasdasd
interface DataItem {
  time: string;
  timeEnd: string;
  title: string;
  description: string;
  imageUrl: string;
  lecturers: string;
}

const ScheduleTimes: React.FC = () => {
  const data: DataItem[] = [
    {
      time: '09:00',
      timeEnd: '10:30',
      title: 'Lập trình React Native',
      description: 'Room: T11—06 *Toà T',
      imageUrl:
        'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      lecturers: 'Hoàng Văn Thành',
    },
    {
      time: '10:45',
      timeEnd: '12:15',
      title: 'Lập trình C#',
      description: 'Room: T11—06 *Toà T',
      imageUrl:
        'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      lecturers: 'Nguyễn Tuấn Kiệt',
    },
    {
      time: '12:30',
      timeEnd: '14:00',
      title: 'Lập trình PHP',
      description: 'Room: T11—06 *Toà T',
      imageUrl:
        'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      lecturers: 'Văn Nam Phúc',
    },
    {
      time: '14:15',
      timeEnd: '15:45',
      title: 'Lập trình Java',
      description: 'Room: T11—06 *Toà T',
      imageUrl:
        'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      lecturers: 'Nguyễn Định',
    },
    {
      time: '16:00',
      timeEnd: '17:30',
      title: 'Lập trình Python',
      description: 'Room: P05—06 *Toà P',
      imageUrl:
        'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
      lecturers: 'Nguyễn Chấn',
    },
  ];

  const renderDetail = (rowData: DataItem): JSX.Element => {
    let title = <Text style={[styles.rowTitle]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingBottom: 8,
            }}>
            <Image source={AppIcons.place}></Image>
            <Text style={[styles.textDescriptionStyle]}>
              {rowData.description}
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image source={{uri: rowData.imageUrl}} style={styles.imageStyle} />
            <Text
              style={{
                marginHorizontal: 5,
                color: '#ffffff',
              }}>
              {rowData.lecturers}
            </Text>
          </View>
        </View>
      );

    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
  };

  const renderTime = (rowData: DataItem): JSX.Element => {
    var desc = null;
    if (rowData.time && rowData.timeEnd)
      desc = (
        <View>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 16,
              color: 'black',
              fontWeight: '700',
            }}>
            {rowData.time}
          </Text>

          <Text
            style={{
              marginHorizontal: 10,
              color: '#BCC1CD',
            }}>
            {rowData.timeEnd}
          </Text>
        </View>
      );

    return <View style={{width: 80, backgroundColor: '#ffffff'}}>{desc}</View>;
  };

  return (
    <View style={styles.container}>
      <Timeline
        data={data}
        circleSize={20}
        circleColor="rgba(0,0,0,0)"
        lineColor="#BCC1CD"
        timeStyle={{
          textAlign: 'center',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'white', fontWeight: '400'}}
        detailContainerStyle={{
          marginBottom: 20,
          backgroundColor: '#4DC591',
          borderRadius: 15,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
        onEventPress={(item: any) =>
          Alert.alert(`${item.title} at ${item.time}`)
        }
        renderDetail={renderDetail}
        renderTime={renderTime}
        options={{
          showsVerticalScrollIndicator: false,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  descriptionContainer: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 25,
  },
  textDescriptionStyle: {
    marginLeft: 5,
    color: '#ffffff',
  },
});

export default ScheduleTimes;
