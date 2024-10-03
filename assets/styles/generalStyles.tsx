import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    nameContainer: {
        margin: "auto",
        padding: 0
    },
    breedName: {
        margin: "auto",
        width: "auto",
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 50,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 20,
    },
    subBreedName: {
        margin: "auto",
        width: "auto",
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 50,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 15,
    },
    selectedBreed: {
        backgroundColor: 'orange',
        color: 'white',
    },
    dogImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginRight: 30,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'darkblue',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        width: 200,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    imageContainer: {
        margin: "auto"
    },
});

export default styles
