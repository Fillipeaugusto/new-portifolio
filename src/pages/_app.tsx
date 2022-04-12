/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Carousel from '../components/Carrousel';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Testando from '../components/Testando';
import Teste from '../components/Teste';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<div>
				{/* <Carousel /> */}
				{/* <Teste /> */}
			</div>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
