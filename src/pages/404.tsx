/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Custom404() {
	return (
		<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
			<img
				src="/img/beams.jpg"
				alt=""
				className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
				width="1308"
			/>
			<div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
			<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
				<div className="mx-auto max-w-md">
					<img src="/img/logo.svg" className="h-6" alt="Tailwind Play" />
					<div className="divide-y divide-gray-300/50">
						<div className="space-y-6 py-8 text-base leading-7 text-gray-600">
							<p>Ops algum erro ocorrou isso pode ter sido causado por:</p>
							<ul className="space-y-4">
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 flex-none fill-red-100 stroke-red-500 stroke-2"
										viewBox="0 0 24 24"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<p className="ml-4">Você está acessando uma página que não existe</p>
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 flex-none fill-red-100 stroke-red-500 stroke-2"
										viewBox="0 0 24 24"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<p className="ml-4">O conteúdo não existe mais</p>
								</li>
								<li className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 flex-none fill-red-100 stroke-red-500 stroke-2"
										viewBox="0 0 24 24"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<p className="ml-4">A sua busca não foi encontrada</p>
								</li>
							</ul>
							<p>
								Tente recarregar a página ou volte para a página inicial caso este erro
								continue.
							</p>
						</div>
						<div className="pt-8 text-base font-semibold leading-7">
							<p className="text-gray-900">O erro ainda continua ?</p>
							<p>
								<a href="/" className="text-sky-500 hover:text-sky-600">
									Voltar para página inicial &rarr;
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
