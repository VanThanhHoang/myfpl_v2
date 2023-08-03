import React, {memo, useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import {Alert} from 'react-native';
import {AppIcons} from '../constant/AppAsset';
import {ClassInfo} from '../types/ClassInfo';
import {convertHourAndMinuesToString} from '../helper/convertHourAndMinute';
import moment from 'moment';
import {Text} from '../components/text/StyledText';
import AxiosInstance from '../helper/axiosInstance';

interface ScheduleTimesProps {
  selectedTabQuery: string;
}
const ScheduleTimes: React.FC<ScheduleTimesProps> = ({selectedTabQuery}) => {
  const [schedule, setSchedule] = useState();
  const getSchedule = async () => {
    try {
      console.log(selectedTabQuery);
      const res = await AxiosInstance().get(`/schedule?${selectedTabQuery}`);
      setSchedule(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSchedule();
  }, [selectedTabQuery]);

  const renderDetail = (data: any): JSX.Element => {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.rowTitle]}>
          {`${data.classInfo.subject.name} (${data.classInfo.subject.code})`}
        </Text>
        <View style={styles.descriptionContainer}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Image style={styles.icon} source={AppIcons.des}></Image>
            <Text style={[styles.textDescriptionStyle]}>
              {data.description}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Image style={styles.icon} source={AppIcons.place}></Image>
            {/* <Text style={[styles.textDescriptionStyle]}>
              {data.classInfo.clsasAddress.room +
                '* Tòa nhà ' +
                data.classInfo.clsasAddress.buiding}
            </Text> */}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            {/* <Image
              source={{ uri: data.classInfo.teacher.photo }}
              style={styles.imageStyle}
            /> */}
            <Text
              style={{
                fontWeight: '500',
                marginHorizontal: 5,
                color: 'black',
              }}>
              {`${data.classInfo.teacher.fullName} (${data.classInfo.teacher.username})`}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderTime = (data: ClassInfo): JSX.Element => {
    return (
      <View style={{width: 80, backgroundColor: '#ffffff'}}>
        <Text
          style={{
            fontSize: 14,
            color: '#327ab8',
            fontWeight: '700',
          }}>
          {moment(data.date).subtract(10, 'days').calendar()}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: 'black',
            fontWeight: '700',
          }}>
          {/* {convertHourAndMinuesToString(classInfo.slot.startTime)} */}
          {/* {classInfo.slot.startTime} */}
        </Text>
        <Text
          style={{
            color: '#BCC1CD',
          }}>
          {/* {convertHourAndMinuesToString(classInfo.slot.endTime)} */}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Timeline
        data={schedule}
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
          padding: 10,
          width: '98%',
          marginBottom: 20,
          elevation: 2,
          backgroundColor: '#fafdf5',
          borderRadius: 15,
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
    color: '#327ab8',
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
    margin: 5,
    color: 'black',
  },
  icon: {
    tintColor: 'black',
    width: 12,
    height: 12,
  },
});

export default memo(ScheduleTimes);
