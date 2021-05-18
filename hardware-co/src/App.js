import './App.css';
import { useState } from 'react';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Products from './Components/Products.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

function App() {
	// const [queenId, setQueenId] = useState([89]);

	return (
		<div className='App'>
			<Header />
			<About />
			<Products />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
