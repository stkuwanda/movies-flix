import { Link } from 'react-router-dom';
import './Navbar.component.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-brand'>
				<Link to='/'>Movie Flix</Link>
			</div>
			<div className='navbar-links'>
				<Link to='/' className='nav-link'>
					Home
				</Link>
				<Link to='/favorites' className='nav-link'>
					Favorites
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
