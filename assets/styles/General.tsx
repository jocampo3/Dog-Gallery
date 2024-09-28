import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    breedName: {
        backgroundColor: 'lightblue',
        borderRadius: 50,
        textTransform: 'capitalize',
        fontSize: 16,
        margin: 5,
        padding: 10,
        textAlign: 'center',
    },
    subBreedName: {
        backgroundColor: 'lightgreen',
        borderRadius: 50,
        textTransform: 'capitalize',
        fontSize: 16,
        margin: 5,
        padding: 10,
        textAlign: 'center',
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
    container: {
        flex: 1,
        padding: 10,
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
});

export default styles
