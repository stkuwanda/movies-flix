import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard.component';
import './Home.page.css';

function Home() {
	const [searchQuery, setSearchQuery] = useState('');

	const movies = [
		{ id: 1, title: 'Lion King', release_date: '1997' },
		{ id: 2, title: 'Aladdin', release_date: '1996' },
		{ id: 3, title: 'Hercules', release_date: '1995' },
	];

	function handleSearch(e) {
		e.preventDefault();
		alert(searchQuery);
		setSearchQuery('');
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

			<div className='movies-grid'>
				{movies.map(
					(movie) =>
						movie.title.toLowerCase().startsWith(searchQuery) && (
							<MovieCard key={movie.id} movie={movie} />
						)
				)}
			</div>
		</div>
	);
}

export default Home;
