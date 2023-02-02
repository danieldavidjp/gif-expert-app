import { GetGifs } from "../apis/GetGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = ({ category }) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await GetGifs(category);
		setImages(newImages);
		setIsLoading(false);
	};
	useEffect(() => {
		getImages();
	}, []);
	return {
		images: images,
		isLoading: isLoading,
	};
};
