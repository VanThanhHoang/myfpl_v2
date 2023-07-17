import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color } from '../constant/Colors';

type ListItemProps = {
    name: string;
    time: string;
    title: string;
};

const ListItem: React.FC<ListItemProps> = ({ name, time, title }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <Text style={[styles.time, { width: '80%', fontWeight: '500' }]}>{title}</Text>
            <View style={{ borderWidth: 0.5, borderColor: Color.BACKGROUND, borderStyle: 'dashed', marginTop: 6 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    time: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        marginRight: 10,
        marginVertical: 2,
    },
    container: {
        height: 100,
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

export default ListItem;
