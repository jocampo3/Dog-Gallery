import { useState, useEffect } from "react";

// Type definition for Dog
export type Dog = {
    breed: string;
    subBreeds: string[];
};

// Function to fetch the breeds
export const getDogs = async (): Promise<Dog[]> => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const json = await response.json();

        const breedsArray = Object.entries(json.message).map(([breed, subBreeds]) => ({
            breed,
            subBreeds: subBreeds as string[],  // Cast subBreeds to an array of strings
        }));

        return breedsArray;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Custom Hook for Dog Gallery logic
export const useDogGallery = () => {
    const [data, setData] = useState<Dog[]>([]);
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const breedsArray = await getDogs();
            setData(breedsArray);
        };
        fetchData();
    }, []);

    const toggleBreedSelection = (breed: string, subBreed?: string) => {
        const selection = subBreed ? `${breed}-${subBreed}` : breed;  // Store breed-subBreed or just breed
    
        setSelectedBreeds((prevSelectedBreeds) => {
            if (prevSelectedBreeds.includes(selection)) {
                return prevSelectedBreeds.filter((selectedBreed) => selectedBreed !== selection);
            } else {
                return [...prevSelectedBreeds, selection];
            }
        });
    };
    

    // Function to generate URLs for breeds and subbreeds
    const generateSelectedBreedsUrl = () => {
        const urls = [];
    
        selectedBreeds.forEach((selection) => {
            const [breed, subBreed] = selection.includes('-') ? selection.split('-') : [selection];
    
            // If a subbreed is selected, generate the breed/subbreed URL
            if (subBreed) {
                const url = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/30`;
                urls.push(url);
            } 
            // Otherwise, generate the URL for the main breed
            else {
                const url = `https://dog.ceo/api/breed/${breed}/images/random/30`;
                urls.push(url);
            }
        });
    
        console.log("Generated URLs: ", urls);
    
        if (urls.length === 0) {
            console.log("No dog breeds selected!");
        }
    
        return urls;
    };
    

    const fetchImages = async (): Promise<string[]> => {
        const urls = generateSelectedBreedsUrl();

        if (urls.length === 0) {
            alert('Please select at least one breed');
            return [];
        }

        const allImages: string[] = [];

        for (const url of urls) {
            try {
                const response = await fetch(url);
                const json = await response.json();
                allImages.push(...json.message);  // Flatten array by spreading json.message
            } catch (error) {
                console.error("Error fetching images for", url, error);
            }
        }
        return allImages;
    };

    return {
        data,
        selectedBreeds,
        toggleBreedSelection,
        fetchImages
    };
};
