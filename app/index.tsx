import React, { useState } from 'react';
import { GalleryScreen, ImagesScreen } from './DogGallery';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Gallery');
    const [fetchedImages, setFetchedImages] = useState<string[]>([]);

    // Navigate to Images Screen after fetching images
    const navigateToImages = (images) => {
        setFetchedImages(images); // Store fetched images
        setCurrentScreen('Images'); // Navigate to Images Screen
    };

    const goBack = () => {
        setCurrentScreen('Gallery');
    };

    return (
        <>
            {currentScreen === 'Gallery' ? (
                <GalleryScreen navigateToImages={navigateToImages} />
            ) : (
                <ImagesScreen goBack={goBack} images={fetchedImages} />
            )}
        </>
    );
};

export default App;
