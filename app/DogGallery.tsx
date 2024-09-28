import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useDogGallery } from './Api';
import styles from '../assets/styles/General';

// Gallery Screen (Breed Selection)
export const GalleryScreen = ({ navigateToImages }) => {
    const { data, selectedBreeds, toggleBreedSelection, fetchImages } = useDogGallery();
    const [images, setImages] = useState<string[]>([]);  // State to store fetched images

    const handleFetchImages = async () => {
        const fetchedImages = await fetchImages();  // Fetch images from selected breeds
        setImages(fetchedImages);  // Store images in state
        navigateToImages(fetchedImages);  // Optionally navigate with images
    };

    return (
        <View style={styles.container}>
            <Text>Select a breed to fetch images:</Text>
            <FlatList
                data={data}
                keyExtractor={({ breed }) => breed}
                renderItem={({ item }) => (
                    <View>
                        {/* Display the breed */}
                        <Pressable onPress={() => toggleBreedSelection(item.breed)}>
                            <Text
                                style={[
                                    styles.breedName,
                                    selectedBreeds.includes(item.breed) && styles.selectedBreed,
                                ]}
                            >
                                {item.breed}
                            </Text>
                        </Pressable>

                        {/* Display subbreeds if they exist */}
                        {item.subBreeds.map((subBreed) => (
                            <Pressable key={subBreed} onPress={() => toggleBreedSelection(item.breed, subBreed)}>
                                <Text
                                    style={[
                                        styles.subBreedName,
                                        selectedBreeds.includes(`${item.breed}-${subBreed}`) && styles.selectedBreed,
                                    ]}
                                >
                                    {subBreed}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                )}
            />

            <Pressable style={styles.button} onPress={handleFetchImages}>
                <Text style={styles.buttonText}>Fetch Images</Text>
            </Pressable>
        </View>
    );
};

// Images Screen (Image Display)
export const ImagesScreen = ({ goBack, images, breedName }) => {
    return (
        <View style={styles.container}>
            <Text>Dog Images</Text>
            <Text>Breed: {breedName}</Text>
            <FlatList
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (                   
                        <Image source={{ uri: item }} style={styles.dogImage} />
                )}
                numColumns={5}
                horizontal={false}
                showsHorizontalScrollIndicator={true}
            />
            <Pressable style={styles.button} onPress={goBack}>
                <Text style={styles.buttonText}>Back to Gallery</Text>
            </Pressable>
        </View>
    );
};
