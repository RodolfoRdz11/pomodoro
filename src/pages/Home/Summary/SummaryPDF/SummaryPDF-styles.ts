import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        padding: 24
    },
    h1: {
        fontSize: 24,
        fontWeight: 500
    },
    h5: {
        fontSize: 12,
        fontWeight: 500
    },
    h6: {
        fontSize: 9,
        fontWeight: 500,
        lineHeight: 1.5
    },
    body1: {
        fontSize: 9,
        lineHeight: 1.5
    },
    body2: {
        fontSize: 8,
        lineHeight: 1.5
    },
    mb1: {
        marginBottom: 4
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    pageNumber: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'right',
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    subheader: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 500,
        color: "#999"
    },
    divider: {
        borderBottomWidth: 1.5,
        borderBottomStyle: 'solid',
    },
    spaceBetween: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    headerText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 500,
    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    taskContainer: {
        borderBottomWidth: 1.5,
        borderBottomStyle: 'solid',
        padding: 8
    }
});

export default styles;