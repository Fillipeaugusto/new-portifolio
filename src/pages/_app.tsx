import { AppProps } from 'next/app';
import Carousel from '../components/Carrousel';

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
		</>
	);
}

export default MyApp;
