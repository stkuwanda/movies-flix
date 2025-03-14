import MovieCard from '../components/MovieCard.component';

function Home() {
	const movies = [
		{ id: 1, title: 'Lion King', release_date: '1997' },
		{ id: 1, title: 'Aladdin', release_date: '1996' },
		{ id: 1, title: 'Hercules', release_date: '1995' },
	];

	return (
		<div className='home'>
			<div className='movies-grid'>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default Home;
