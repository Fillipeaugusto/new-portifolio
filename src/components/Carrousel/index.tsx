/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function Carrousel() {
	return (
		<div style={{ marginTop: '10px', maxWidth: '50%' }}>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				// ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				// containerClass="bg-black"
				// sliderClass="bg-black"
				// dotListClass="bg-black"
				// itemClass="bg-black"
			>
				<div style={{ width: '100%' }}>
					<img
						src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						style={{ borderRadius: '10px' }}
					/>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						style={{ borderRadius: '10px' }}
					/>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						style={{ borderRadius: '10px' }}
					/>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						style={{ borderRadius: '10px' }}
					/>
				</div>
			</Carousel>
		</div>
	);
}
