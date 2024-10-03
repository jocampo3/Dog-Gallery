import {StyleSheet} from "react-native";

const galleryStyles = StyleSheet.create({
    imageContainer: {
        marginRight: "auto",
        paddingLeft: 10,
        paddingTop: 10
    },
    dogImage: {
        width: 215,
        height: 215,
        resizeMode: 'cover',
        marginRight: 15,
        marginBottom: 10,
    },
    expandedImage: {
        width: '90%',
        height: '70%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Semi-transparent background
    },
    modalCloseButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    modalCloseButtonText: {
        color: 'black',
        fontSize: 16,
    },
    leftArrow: {
        position: 'absolute',
        top: '50%',
        left: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
    },
    rightArrow: {
        position: 'absolute',
        top: '50%',
        right: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
    },
    arrowText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default galleryStyles;
