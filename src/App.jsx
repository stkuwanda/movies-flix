import './App.css';
import MovieCard from './components/MovieCard.component';

function App() {
	return (
		<>
			<MovieCard movie={{title: "Simba's film", release_date: '2025'}}/>
			<MovieCard movie={{title: "Chichie's film", release_date: '2024'}}/>
		</>
	);
}

export default App;
