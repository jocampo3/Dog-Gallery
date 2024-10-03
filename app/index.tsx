import React, { useState } from 'react';
import { BreedScreen } from './pages/breeds';
import { GalleryScreen } from './pages/gallery';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Gallery');
    const [fetchedImages, setFetchedImages] = useState<string[]>([]);

    // Navigate to Images Screen after fetching images
    const navigateToImages = (images: React.SetStateAction<string[]>) => {
        setFetchedImages(images); // Store fetched images
        setCurrentScreen('Images'); // Navigate to Images Screen
    };

    const goBack = () => {
        setCurrentScreen('Gallery');
    };

    return (
        <>
            {currentScreen === 'Gallery' ? (
                <BreedScreen navigateToImages={navigateToImages} />
            ) : (
                <GalleryScreen goBack={goBack} images={fetchedImages}/>
            )}
        </>
    );
};

export default App;
