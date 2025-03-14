import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.page';
import Favorites from './pages/Favorites/Favorites.page';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';

function App() {
	return (
		<>
			<Navbar />
			<main className='main-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
