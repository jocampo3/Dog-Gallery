import {StyleSheet, Dimensions} from "react-native";

const { width } = Dimensions.get('window');

const breedStyles = StyleSheet.create({
    breedName: {
        marginTop: 10,
        marginLeft: 5,
        width: "auto",
        padding: 10,
        backgroundColor: '#FFB52E',
        borderRadius: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 20.5,
        color: 'black',
        fontFamily: 'sans-serif'
    },
    subBreedName: {
        marginTop: 10,
        marginLeft: 5,
        width: "auto",
        padding: 10,
        backgroundColor: '#68BBE3',
        borderRadius: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    selectedBreed: {
        backgroundColor: '#B34270',
        color: 'white',
    },
})

export default breedStyles;
