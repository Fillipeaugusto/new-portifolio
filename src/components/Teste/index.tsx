/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Teste() {
	return (
		<div>
			<section className="w-full bg-gray-50 pt-7 pb-7 md:pt-20 md:pb-24">
				<div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
					<div className="box-border  relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
						{/* <img
							src="https://avatars.githubusercontent.com/u/55332682?s=400&u=b7c344b960fec4a099a5cca57fbca6f1a7e172ee&v=4"
							className="p-2 rounded-lg pl-6 pr-5 xl:pl-16 xl:pr-20  "
						/> */}
						<img
							className="mx-auto  sm:max-w-sm lg:max-w-xl rounded-md"
							src="https://avatars.githubusercontent.com/u/55332682?s=400&u=b7c344b960fec4a099a5cca57fbca6f1a7e172ee&v=4"
							alt="feature image"
						/>
					</div>

					<div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
						<h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
							Fillipe Augusto
						</h2>
						<p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
							eu me chamo Fillipe Augusto e tenho 20 anos sou programador junior focado
							em React js, Next js é um prazer ter você por aqui, moro em Brasília-DF
							atualmente cursando o 8º semestre de Engenharia de software , na minha
							ultima atuação tive participação no desenvolvimento de aplicações web e
							aplicativos PWA usando React no front-end e node no back-end, criando
							APIs rest, e configurando banco de dados em MySQL.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
