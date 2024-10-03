import { useState, useEffect } from "react";

// Type definition for Dog
export type Dog = {
    breed: string;
    subBreeds: string[];
};

// Fetches the list of dog breeds
export const getDogs = async (): Promise<Dog[]> => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const json = await response.json();
        return Object.entries(json.message).map(([breed, subBreeds]) => ({
            breed,
            subBreeds: subBreeds as string[],
        }));
    } catch (error) {
        console.error("Error fetching dog breeds:", error);
        throw error;
    }
};

// Custom Hook for Dog Gallery logic
export const useDogGallery = () => {
    const [data, setData] = useState<Dog[]>([]);
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const breedsArray = await getDogs();
                setData(breedsArray);
            } catch (error) {
                console.error("Error setting dog data:", error);
            }
        };
        fetchData();
    }, []);

    const toggleBreedSelection = (breed: string, subBreed?: string) => {
        const selection = subBreed ? `${breed}-${subBreed}` : breed;
        setSelectedBreeds((prevSelectedBreeds) =>
            prevSelectedBreeds.includes(selection)
                ? prevSelectedBreeds.filter((selectedBreed) => selectedBreed !== selection)
                : [...prevSelectedBreeds, selection]
        );
    };

    const generateSelectedBreedsUrl = () => {
        const urls = selectedBreeds.map((selection) => {
            const [breed, subBreed] = selection.includes('-') ? selection.split('-') : [selection];
            return subBreed
                ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/30`
                : `https://dog.ceo/api/breed/${breed}/images/random/30`;
        });

        if (!urls.length) console.log("No dog breeds selected!");
        return urls;
    };

    const fetchImages = async (): Promise<string[]> => {
        const urls = generateSelectedBreedsUrl();
        if (!urls.length) return [];

        const allImages: string[] = [];
        await Promise.all(
            urls.map(async (url) => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    allImages.push(...json.message);
                } catch (error) {
                    console.error("Error fetching images for", url, error);
                }
            })
        );
        return allImages;
    };

    return {
        data,
        selectedBreeds,
        toggleBreedSelection,
        fetchImages,
    };
};
