import React from "react";
import { Document, Page, View, Text } from '@react-pdf/renderer';
import styles from "./SummaryPDF-styles";
import Task from "src/models/Task";
import { timeConversion } from "src/utils";

interface Props {
    username: string;
    finishedTasks: Array<Task>;
    totalWorked: string;
    totalRested: string;
}


function SummaryPDF({ 
    username,
    finishedTasks, 
    totalWorked,
    totalRested   
}: Props) {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header} fixed>
                    <View style={styles.logoContainer}>
                        <Text style={styles.headerText}> POMODORO APP </Text>
                        <Text style={styles.subheader}> Summary - {username} </Text>
                    </View>

                    <View style={styles.dataContainer}>
                        <Text style={styles.h5}> Finished tasks: {finishedTasks.length} </Text>
                        <Text style={styles.h5}> Worked time: {totalWorked} </Text>
                        <Text style={styles.h5}> Rested time: {totalRested} </Text>
                    </View>

                    <Text style={styles.h5}> Tasks  </Text>
                    {finishedTasks.map((task: Task) => (
                        <View style={styles.taskContainer}  wrap={false}>
                            <Text style={styles.h6}> {task.description} </Text>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.h6}> Worked time: {timeConversion(task.time ? task.time : 0)} </Text>
                                <Text style={styles.h6}> Rested time: {timeConversion(task.restedTime ? task.restedTime : 0)} </Text>
                            </View>
                        </View>
                    ))}
                </View>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) => `Summary - page ${pageNumber} / ${totalPages}`}
                    fixed
                />
            </Page>
        </Document >
    )
}

export default SummaryPDF;