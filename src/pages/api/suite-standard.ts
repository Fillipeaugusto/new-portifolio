/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const suite = {
		name: 'Suite Standard',
		description:
			'Cama King Size, Frigobar, Ar-condicionado, TV LCD 32, TV a Cabo, Som com CD e Iluminação Especial.',
		id: 'suiteStandard',
		images: [
			{
				url: 'https://www.motelcountry.com/wp-content/uploads/2014/04/country-suite-standard-01.jpg',
				alt: 'country-suite-standard-01',
			},
			{
				url: 'https://www.motelcountry.com/wp-content/uploads/2014/04/country-suite-standard-02.jpg',
				alt: 'country-suite-standard-02',
			},
			{
				url: 'https://www.motelcountry.com/wp-content/uploads/2014/04/country-suite-standard-03.jpg',
				alt: 'country-suite-standard-03',
			},
			{
				url: 'https://www.motelcountry.com/wp-content/uploads/2014/04/country-suite-standard-04.jpg',
				alt: 'country-suite-standard-04',
			},
		],
		price: [
			{
				hour: '1h',
				price: 'R$ 50,00',
			},
			{
				hour: '2h',
				price: 'R$ 70,00',
			},
			{
				hour: '3h',
				price: 'R$ 79,00',
			},
			{
				hour: '4h',
				price: 'R$ 90,00',
			},
			{
				hour: '5h',
				price: 'R$ 105,00',
			},
			{
				hour: '6h',
				price: 'R$ 135,00',
			},
			{
				hour: '7h',
				price: 'R$ 167,00',
			},
			{
				hour: '8h',
				price: 'R$ 200,00',
			},
			{
				hour: '9h',
				price: 'R$ 239,00',
			},
			{
				hour: '10h',
				price: 'R$ 259,00',
			},
			{
				hour: '11h',
				price: 'R$ 285,00',
			},
			{
				hour: '12h',
				price: 'R$ 309,00',
			},
		],
		perNight: 'R$ 149,00',
		features: [
			{
				type: 'bed',
				name: 'Cama King Size',
			},
			{
				type: 'Frigobar',
				name: 'Frigobar',
			},
			{
				type: 'ar-condicionado',
				name: 'Ar-condicionado',
			},
			{
				type: 'tv',
				name: 'TV LCD 32',
			},
			{
				type: 'tv-pg',
				name: 'TV a Cabo',
			},
			{
				type: 'sound',
				name: 'Som com CD',
			},
			{
				type: 'light',
				name: 'Iluminação Especial',
			},
		],
	};

	return response.json(suite);
};
