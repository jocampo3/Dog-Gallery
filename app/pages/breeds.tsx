import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useDogGallery } from '../api';
import styles from '../../assets/styles/generalStyles';
import breedStyles from '../../assets/styles/breedStyles';

interface breedsScreenProps {
    navigateToImages: (images: string[]) => void;
}

export const BreedScreen: React.FC<breedsScreenProps> = ({navigateToImages}) => {
    const { data, selectedBreeds, toggleBreedSelection, fetchImages } = useDogGallery();
    const [images, setImages] = useState<string[]>([]);

    const handleFetchImages = async () => {
        const fetchedImages = await fetchImages();
        if (fetchedImages.length > 0) {
            setImages(fetchedImages);
            navigateToImages(fetchedImages);
        } else {
            alert('Please select at least one breed to fetch images');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Select a dog breed and click "Fetch" to return images of selected breeds
            </Text>

            <FlatList
                showsVerticalScrollIndicator
                style={styles.nameContainer}
                data={data}
                keyExtractor={({ breed }) => breed}
                renderItem={({ item }) => (
                    <View>
                        <Pressable onPress={() => toggleBreedSelection(item.breed)}>
                            <Text
                                style={[
                                    breedStyles.breedName,
                                    selectedBreeds.includes(item.breed) && breedStyles.selectedBreed,
                                ]}
                            >
                                {item.breed}
                            </Text>
                        </Pressable>
                        {item.subBreeds.map((subBreed) => (
                            <Pressable
                                key={subBreed}
                                onPress={() => toggleBreedSelection(item.breed, subBreed)}
                            >
                                <Text
                                    style={[
                                        breedStyles.subBreedName,
                                        selectedBreeds.includes(`${item.breed}-${subBreed}`) &&
                                        breedStyles.selectedBreed,
                                    ]}
                                >
                                    {subBreed}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                )}
                numColumns={10} />

            <Pressable style={styles.button} onPress={handleFetchImages}>
                <Text style={styles.buttonText}>Fetch</Text>
            </Pressable>
        </View>
    );
}
