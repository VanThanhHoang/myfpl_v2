import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import _ from 'lodash';
import { AppIcons } from '../constant/AppAsset';

interface GradeItem {
    name: string;
    weight: number;
    result: number;
}

interface TranscriptItem {
    subjectCode: string;
    grades: GradeItem[];
    _id: string;
}

const Transcript: React.FC = () => {
    const [columns, setColumns] = useState<string[]>(['Tên đầu điểm', 'Trọng số', 'Điểm']);

    const calculateAverage = (grades: GradeItem[]) => {
        const totalMarks = grades.reduce((acc, item) => acc + item.result, 0);
        return (totalMarks / grades.length).toFixed(2);
    };

    const getStatus = (grades: GradeItem[]) => {
        const average = parseFloat(calculateAverage(grades));
        return average >= 5.0 ? 'Passed' : 'Failed';
    };

    const tableFooter = (grades: GradeItem[]) => (
        <View style={styles.tableFooter}>
            <Text style={styles.footerText}>Điểm trung bình: {calculateAverage(grades)}</Text>
            <Text style={styles.footerText}>Trạng thái: {getStatus(grades)}</Text>
        </View>
    );

    const [direction, setDirection] = useState<string | null>(null);
    const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
    const [transcript, setTranscripts] = useState<TranscriptItem>({
        subjectCode: "COM108",
        grades: [
            {
                name: "Đánh giá cuối học phần 1",
                weight: 40,
                result: 8.5,
            },
            {
                name: "Đánh giá Assignment GĐ 1",
                weight: 10,
                result: 8,
            },
            {
                name: "Lab 1",
                weight: 3.5,
                result: 8,
            },
            {
                name: "Quiz 7",
                weight: 1.5,
                result: 10,
            },
        ],
        _id: "64bd43269f4201da8a2dd84b",
    });

    const sortTable = (column: string) => {
        const newDirection = direction === 'desc' ? 'asc' : 'desc';
        const columnMap: { [key: string]: string } = {
            'Tên đầu điểm': 'name',
            'Trọng số': 'weight',
            'Điểm': 'result',
        };
        const propertyName = columnMap[column];
        const sortedData = _.orderBy(transcript.grades, [propertyName], [newDirection]);
        setSelectedColumn(column);
        setDirection(newDirection);
        setTranscripts({ ...transcript, grades: sortedData });
    };

    const tableHeader = () => (
        <View style={styles.tableHeader}>
            {columns.map((column, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.columnHeader} onPress={() => sortTable(column)}>
                        <View style={styles.columnHeaderContent}>
                            <Text style={styles.columnHeaderTxt}>{column + ' '}</Text>{selectedColumn === column && (
                                <Image
                                    source={
                                        direction === 'desc'
                                            ? AppIcons.asc
                                            : AppIcons.desc
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
                data={transcript.grades}
                style={{ width: '90%' }}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={tableHeader}
                ListFooterComponent={() => tableFooter(transcript.grades)}
                stickyHeaderIndices={[0]}
                renderItem={({ item, index }) => {
                    const formattedMark = item.result.toFixed(1);
                    return (
                        <View
                            style={{
                                ...styles.tableRow,
                                backgroundColor: index % 2 === 1 ? '#F0FBFC' : 'white',
                            }}>
                            <Text style={{ ...styles.columnRowTxt, fontWeight: 'bold' }}>{item.name}</Text>
                            <Text style={styles.columnRowTxt}>{item.weight}</Text>
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
        backgroundColor: "#37C2D0", borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        height: 50,
        marginBottom: 30
    },
    footerText: {
        color: "white",
        fontWeight: "bold",
    },
});