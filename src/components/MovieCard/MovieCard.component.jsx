import { useMovieContext } from '../../contexts/MovieContext/MovieContext.tools';
import './MovieCard.component.css';

function MovieCard({ movie }) {
	const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
	const isSetAsFavorite = isFavorite(movie.id);

	function handleFavoriteClick(e) {
		e.preventDefault();

		if (isSetAsFavorite) {
			removeFromFavorites(movie.id);
		} else {
			addToFavorites(movie);
		}
	}

	return (
		<div className='movie-card'>
			<div className='movie-poster'>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className='movie-overlay'>
					<button
						className={`favorite-btn ${isSetAsFavorite ? 'active' : ''}`}
						onClick={handleFavoriteClick}
					>
						♥
					</button>
				</div>
			</div>
			<div className='movie-info'>
				<h3>{movie.title}</h3>
				<p>{movie.release_date}</p>
			</div>
		</div>
	);
}

export default MovieCard;
