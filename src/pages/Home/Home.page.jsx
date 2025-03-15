import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard.component';
import { searchMovies, getPopularMovies } from '../../services/api';
import './Home.page.css';

function Home() {
	// const movies = [
	// 	{ id: 1, title: 'Lion King', release_date: '1997' },
	// 	{ id: 2, title: 'Aladdin', release_date: '1996' },
	// 	{ id: 3, title: 'Hercules', release_date: '1995' },
	// ];

	const [searchQuery, setSearchQuery] = useState('');
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadPopularMovies() {
			try {
				const popularMovies = await getPopularMovies();
				setMovies(popularMovies);
			} catch (error) {
				console.error(error);
				setError('Failed to load!');
			} finally {
				setLoading(false);
			}
		}

		loadPopularMovies();
	}, []);

	async function handleSearch(e) {
		e.preventDefault();
		if (!searchQuery.trim()) return; // do nothing if search query is empty space
		if (loading) return;// do nothing if app is already loading
		setLoading(true);

		try {
			const searchResults = await searchMovies(searchQuery);
			setMovies(searchResults);
			setError(null);
		} catch (error) {
			console.error(error);
			setError('Failed to load search results!');
		} finally {
			setLoading(false);
			setSearchQuery('');
		}
	}

	return (
		<div className='home'>
			<form onSubmit={handleSearch} className='search-form'>
				<input
					type='text'
					className='search-input'
					placeholder='Search for movies...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button type='submit' className='search-button'>
					Search
				</button>
			</form>

			{loading ? (
				<div className='loading'>Loading...</div>
			) : error ? (
				<div className='error-message'>{error}</div>
			) : (
				<div className='movies-grid'>
					{movies.map(
						(movie) =>
							movie.title.toLowerCase().startsWith(searchQuery) && (
								<MovieCard key={movie.id} movie={movie} />
							)
					)}
				</div>
			)}
		</div>
	);
}

export default Home;
