import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(249 247 242)"
    },
    nameContainer: {
        marginRight: "auto",
    },
    button: {
        backgroundColor: '#B34270',
        borderRadius: 360,
        height: "31.5%",
        alignItems: 'center',
        width: "15%",
        position: 'absolute',
        right: 60,
        top: '45%',
        transform: [{ translateY: -50 }],
    },
    buttonText: {
        color: 'white',
        fontSize: 40,
        paddingTop: 85,
        fontWeight: "bold",
        fontFamily: 'syne'
    },
    breedsButton: {
        color: 'white',
        fontSize: 40,
        paddingLeft: 50,
        paddingTop: 65,
        fontWeight: "bold",
        fontFamily: 'syne'
    },
    title: {
        backgroundColor: "#713770",
        fontSize: 25,
        padding: 10,
        color: "white",
        fontFamily: "sans-serif"
    },
});


export default styles
