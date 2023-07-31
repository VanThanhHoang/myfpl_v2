import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { memo } from 'react';
import { ItemTerm } from '../types/ItemTerm';
import { Text } from './text/StyledText';

interface Props {
    item: ItemTerm;
    onPress: () => void;
}

const Term = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image style={{ width: 60, height: 60 }} source={item.icon} />

                    <View style={styles.textContainer}>
                        <View style={[styles.row, { justifyContent: 'space-between' }]}>
                            <Text style={styles.subjectName}>{item.subjectName}</Text>
                            <Text style={styles.mark}>{item.mark.toFixed(1)}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between' }]}>
                            <Text style={styles.subjectCode}>{item.subjectCode}</Text>
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
                                ]}
                            >
                                {item.status}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default memo(Term);

const styles = StyleSheet.create({
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
        alignItems: 'center', // Aligns items vertically in the center
        padding: 10,
    },
    textContainer: {
        flex: 1, // Takes up all available space and pushes the text elements to the right
        justifyContent: 'space-between', // Aligns text elements vertically with space between them
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
});
