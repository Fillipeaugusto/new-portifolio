/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Teste() {
	return (
		<div>
			<section className="pb-16 2xl:pb-20 overflow-hidden">
				<div className="relative bg-blueGray-100 rounded-b-10xl">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap items-center -mx-4 pt-16 pb-20">
							<div className="w-full lg:w-1/2 px-4 mb-24 lg:mb-0">
								<span className="block mb-9 font-medium tracking-widest uppercase text-sm text-gray-300">
									Front End Dev
								</span>
								<h1 className="max-w-xl mb-16 font-heading font-medium text-9xl md:text-10xl xl:text-13xl leading-none">
									<span>Fillipe Augusto</span>
								</h1>
								<p className="mb-16 lg:mb-24 text-xl text-darkBlueGray-400 leading-snug">
									Fusce sem lectus, pretium at pellentesque a sagittis non.
								</p>
							</div>
							<div className="w-full lg:w-1/2 px-4">
								<div className="relative max-w-sm xl:max-w-none mx-auto">
									<img
										className="relative xl:max-w-max z-10"
										src="https://avatars.githubusercontent.com/u/55332682?s=400&u=b7c344b960fec4a099a5cca57fbca6f1a7e172ee&v=4"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
