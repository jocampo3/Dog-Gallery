import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable, Modal } from 'react-native';
import styles from '../../assets/styles/generalStyles';
import galleryStyles from '@/assets/styles/galleryStyles';


// Define the type for props
interface GalleryScreenProps {
    goBack: () => void; 
    images: string[];
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({ goBack, images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const closeModal = () => setSelectedImageIndex(null);

    const showNextImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const showPreviousImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gallery</Text>

            <FlatList
                showsVerticalScrollIndicator
                style={galleryStyles.imageContainer}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => setSelectedImageIndex(index)}>
                        <Image source={{ uri: item }} style={galleryStyles.dogImage} />
                    </Pressable>
                )}
                numColumns={5}
            />

            <Pressable style={styles.button} onPress={goBack}>
                <Text style={styles.breedsButton}>Back to breeds</Text>
            </Pressable>

            {selectedImageIndex !== null && (
                <Modal visible transparent onRequestClose={closeModal}>
                    <View style={galleryStyles.modalContainer}>
                        <Pressable style={galleryStyles.modalCloseButton} onPress={closeModal}>
                            <Text style={galleryStyles.modalCloseButtonText}>Close</Text>
                        </Pressable>

                        {selectedImageIndex > 0 && (
                            <Pressable style={galleryStyles.leftArrow} onPress={showPreviousImage}>
                                <Text style={galleryStyles.arrowText}>{"<"}</Text>
                            </Pressable>
                        )}

                        <Image
                            source={{ uri: images[selectedImageIndex] }}
                            style={galleryStyles.expandedImage}
                        />

                        {selectedImageIndex < images.length - 1 && (
                            <Pressable style={galleryStyles.rightArrow} onPress={showNextImage}>
                                <Text style={galleryStyles.arrowText}>{">"}</Text>
                            </Pressable>
                        )}
                    </View>
                </Modal>
            )}
        </View>
    );
};
