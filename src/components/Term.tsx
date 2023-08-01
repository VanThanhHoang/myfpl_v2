import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {ItemTerm} from '../types/ItemTerm';
import {Text} from './text/StyledText';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Color} from '../constant/Colors';

interface Props {
  item: ItemTerm;
  onPress: () => void;
}

const Term = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image style={{width: 60, height: 60}} source={item.icon} />
          <View style={styles.textContainer}>
            <View style={[{justifyContent: 'space-between', marginLeft: 15}]}>
              <Text style={styles.subjectName}>{item.subjectName}</Text>
              <Text
                style={[styles.subjectName, {color: '#0b51a1', fontSize: 15}]}>
                {item.subjectCode}
              </Text>
              <Text style={[styles.mark, {color: '#f36f25'}]}>
                {item.mark.toFixed(1)}
              </Text>
            </View>

            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
              <Text
                style={[
                  styles.status,
                  {
                    color:
                      item.status === 'passed'
                        ? '#2bc246'
                        : item.status === 'failed'
                        ? '#e90000'
                        : '#ffb330',
                  },
                ]}>
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Term2 = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container2}>
      <CircularProgress
        activeStrokeWidth={20}
        inActiveStrokeWidth={20}
        value={item.mark}
        radius={30}
        duration={500}
        activeStrokeColor={'#8590c8'}
        inActiveStrokeColor={'#c2caf2'}
        progressValueColor={'#383d54'}
        maxValue={10}
        progressValueStyle={{fontSize: 10, fontWeight: '900'}}
        titleColor={'#ff9934'}
        progressFormatter={(value: number) => {
          'worklet';

          return value.toFixed(1); // 2 decimal places
        }}
      />
      <Text
        style={[
          styles.subjectName2,
          {color: '#383d54'},
        ]}>{`${item.subjectName}`}</Text>
      <Text style={[styles.subjectName2, {color: '#383d54', fontSize: 13}]}>
        {item.subjectCode}
      </Text>
    </TouchableOpacity>
  );
};
export default memo(Term);

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    margin: 10,
  },
  container2: {
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    margin: 10,
    width: '45%',
  },
  card: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns items vertically in the center
    padding: 5,
  },
  textContainer: {
    marginTop: 15,
    flex: 1, // Takes up all available space and pushes the text elements to the right
    justifyContent: 'space-between', // Aligns text elements vertically with space between them
  },
  subjectName: {
    marginBottom: 5,
    fontSize: 18,
    width: '90%',
    fontWeight: 'bold',
    color: 'black',
  },
  subjectName2: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  mark: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subjectCode: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginRight: 15,
  },
=======
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    card: {
        borderWidth: 1,
        borderColor: '#e9e9e9',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    subjectName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    mark: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    subjectCode: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginRight: 10,
    },
>>>>>>> fb521ab1d88df5b232eb0a0eef2bff8d9afe7aa3
});
