import MovieCard from '../../components/MovieCard/MovieCard.component';
import { useMovieContext } from '../../contexts/MovieContext/MovieContext.tools';
import './Favorites.page.css';

function Favorites() {
	const { favorites } = useMovieContext();

	if (favorites.length) {
		return (
			<div className='favorites'>
				<h2>Your Favorites</h2>
				<div className='movies-grid'>
					{favorites.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className='favorites-empty'>
			<h2>No Favorite Movies yet</h2>
			<p>Start adding your favorite movies and they will appear here</p>
		</div>
	);
}

export default Favorites;
