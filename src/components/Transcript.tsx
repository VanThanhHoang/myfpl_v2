import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import _ from 'lodash';

interface TranscriptItem {
    Name: string;
    Weighting: number;
    Mark: number;
}

const Transcript: React.FC = () => {
    const [columns, setColumns] = useState<string[]>(['Tên đầu điểm', 'Trọng số', 'Điểm']);

    const calculateAverage = () => {
        const totalMarks = transcript.reduce((acc, item) => acc + item.Mark, 0);
        return (totalMarks / transcript.length).toFixed(2);
    };

    const getStatus = () => {
        const average = parseFloat(calculateAverage());
        return average >= 5.0 ? 'Passed' : 'Failed';
    };

    const tableFooter = () => (
        <View style={styles.tableFooter}>
            <Text style={styles.footerText}>Average Score: {calculateAverage()}</Text>
            <Text style={styles.footerText}>Status: {getStatus()}</Text>
        </View>
    );

    const [direction, setDirection] = useState<string | null>(null);
    const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
    const [transcript, setTranscripts] = useState<TranscriptItem[]>([
        {
            Name: "Bảo vệ Assignment",
            Weighting: 40,
            Mark: 8.5,
        },
        {
            Name: "Đánh giá Assignment GĐ 2",
            Weighting: 10,
            Mark: 9.0,
        },
        {
            Name: "Lab 5",
            Weighting: 3.5,
            Mark: 10,
        },
        {
            Name: "Lab 6",
            Weighting: 3.5,
            Mark: 10,
        },
        {
            Name: "Lab 7",
            Weighting: 3.5,
            Mark: 10,

        },
        {
            Name: "Lab 8",
            Weighting: 3.5,
            Mark: 10,

        },
        {
            Name: "Đánh giá Asignment GĐ 1",
            Weighting: 10,
            Mark: 9,

        },
        {
            Name: "Quiz 5",
            Weighting: 1.5,
            Mark: 10,

        },
        {
            Name: "Quiz 6",
            Weighting: 1.5,
            Mark: 10,

        },
        {
            Name: "Quiz 7",
            Weighting: 1.5,
            Mark: 10,

        },
        {
            Name: "Quiz 8",
            Weighting: 1.5,
            Mark: 10,

        },
        {
            Name: "Quiz 4",
            Weighting: 1.5,
            Mark: 10,
        },
        {
            Name: "Quiz 3",
            Weighting: 1.5,
            Mark: 10,
        },
        {
            Name: "Quiz 2",
            Weighting: 1.5,
            Mark: 10,
        },
        {
            Name: "Quiz 1",
            Weighting: 1.5,
            Mark: 10,
        },
        {
            Name: "Lab 1",
            Weighting: 3.5,
            Mark: 10,
        },
        {
            Name: "Lab 2",
            Weighting: 3.5,
            Mark: 10,
        },
        {
            Name: "Lab 3",
            Weighting: 3.5,
            Mark: 10,
        },
        {
            Name: "Lab 4",
            Weighting: 3.5,
            Mark: 10,
        },
    ]);

    const sortTable = (column: string) => {
        const newDirection = direction === 'desc' ? 'asc' : 'desc';
        const columnMap: { [key: string]: string } = {
            'Tên đầu điểm': 'Name',
            'Trọng số': 'Weighting',
            'Điểm': 'Mark'
        };
        const propertyName = columnMap[column];
        const sortedData = _.orderBy(transcript, [propertyName], [newDirection]);
        setSelectedColumn(column);
        setDirection(newDirection);
        setTranscripts(sortedData);
    };

    const tableHeader = () => (
        <View style={styles.tableHeader}>
            {columns.map((column, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.columnHeader} onPress={() => sortTable(column)}>
                        <View style={styles.columnHeaderContent}>
                            <Text style={styles.columnHeaderTxt}>{column + ' '}</Text>
                            {selectedColumn === column && (
                                <Image
                                    source={
                                        direction === 'desc'
                                            ? require('./up-arrow.png')
                                            : require('./down-arrow.png')
                                    }
                                    style={styles.arrowIcon}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={transcript}
                style={{ width: '90%' }}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={tableHeader}
                ListFooterComponent={tableFooter}
                stickyHeaderIndices={[0]}
                renderItem={({ item, index }) => {
                    const formattedMark = item.Mark.toFixed(1);
                    return (
                        <View
                            style={{
                                ...styles.tableRow,
                                backgroundColor: index % 2 === 1 ? '#F0FBFC' : 'white',
                            }}>
                            <Text style={{ ...styles.columnRowTxt, fontWeight: 'bold' }}>{item.Name}</Text>
                            <Text style={styles.columnRowTxt}>{item.Weighting}</Text>
                            <Text style={styles.columnRowTxt}>{formattedMark}</Text>
                        </View>
                    )
                }} />
        </View>
    );
};

export default Transcript;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "10%",
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#37C2D0",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        height: 50
    },
    tableRow: {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
    },
    columnHeader: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    },
    columnHeaderTxt: {
        color: "white",
        fontWeight: "bold",
    },
    columnRowTxt: {
        width: "33%",
        textAlign: "center",
    },
    columnHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowIcon: {
        width: 10,
        height: 10,
        marginLeft: 5,
    },
    tableFooter: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#37C2D0",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        height: 50,
        marginBottom: 30
    },
    footerText: {
        color: "white",
        fontWeight: "bold",
    },
});
