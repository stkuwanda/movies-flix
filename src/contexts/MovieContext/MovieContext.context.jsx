import { useState, useEffect } from 'react';
import { movieContext as MovieContext } from './MovieContext.tools';

export const MovieProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites');
		if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
	}, []);

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	const addToFavorites = (movie) => {
		setFavorites((favorites) => [...favorites, movie]);
	};

	const removeFromFavories = (id) => {
		setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));
	};

	const isFavorite = (id) => favorites.some((movie) => movie.id === id);

	const value = {
		favorites,
		addToFavorites,
		removeFromFavories,
		isFavorite,
	};

	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
};
