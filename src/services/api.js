const API_KEY = '2bd316441638278309d7ae0c062686cc';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
	const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
	const data = await response.json();
	return data.results;
}

export async function searchMovies(query) {
	const response = await fetch(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
			query
		)}`
	);
	const data = await response.json();
	return data.results;
}
