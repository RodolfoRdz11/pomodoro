import React from "react";
import Box from "@material-ui/core/Box";
import Dialog from "src/components/Dialog";
import { PDFViewer } from '@react-pdf/renderer';
import SummaryPDF from "../SummaryPDF/SummaryPDF";
import Task from "src/models/Task";

interface Props {
    open: boolean;
    handleOpen: () => void;
    username: string;
    finishedTasks: Array<Task>;
    totalWorked: string;
    totalRested: string;
}

function HojaFalloDialog({ 
    open, 
    handleOpen, 
    username,
    finishedTasks, 
    totalWorked,
    totalRested  
} : Props) {
    return (
        <Dialog 
            open={open}
            handleOpen={handleOpen}
            title="Summary"
            showCloseIcon
            fullScreen
            maxWidth="xl"
            content={
                <Box height="100%" display="flex" flexDirection="column">
                    <Box flexGrow={1}>
                        <PDFViewer
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                        >
                            <SummaryPDF 
                                username={username}
                                finishedTasks={finishedTasks}
                                totalWorked={totalWorked}
                                totalRested={totalRested}
                            />
                        </PDFViewer>
                    </Box>
                </Box>
            }
        />
    )
}

export default HojaFalloDialog;