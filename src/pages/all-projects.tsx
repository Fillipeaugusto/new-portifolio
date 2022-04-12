/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';
import React from 'react';
import { Projects } from '../Mocks/Projects';
export default function AllProjects() {
	const bigData = Projects[0];
	const newProjectData = Projects.slice(1);
	return (
		<div>
			<Head>
				<title>Meus projetos</title>
			</Head>
			{/* <h2 className="text-center mt-10 font-header text-3xl font-semibold uppercase text-primary sm:text-3xl lg:text-5xl">
				<span className="text-indigo-500">Meus</span> Projetos
			</h2> */}
			<nav aria-label="Breadcrumb ">
				<ol
					role="list"
					className="max-w-2xl pt-10 mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<li>
						<div className="flex items-center">
							<a href="/" className="mr-2 text-sm font-medium text-gray-900">
								Voltar
							</a>
							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li className="text-sm">
						<span className="font-medium text-gray-500 hover:text-gray-600">
							Projetos
						</span>
					</li>
				</ol>
			</nav>
			<section className="bg-white">
				<div className="w-full px-5 py-6 mx-auto space-y-5  sm:space-y-8 md:space-y-16 max-w-7xl">
					<div className="flex flex-col items-center sm:px-5 md:flex-row">
						<div className="w-full md:w-1/2">
							<a
								href={`http://localhost:3000/projects/${bigData.slug}`}
								className="block"
							>
								<img
									className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
									src={bigData.cover.src}
								/>
							</a>
						</div>
						<div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
							<div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
								<div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
									<svg
										className="w-3.5 h-3.5 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
									<span>Em destaque</span>
								</div>
								<h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
									<a href={`http://localhost:3000/projects/${bigData.slug}`}>
										{bigData.name}.
									</a>
								</h1>
								<p className="pt-2 text-sm font-medium">
									by{' '}
									<a href="#_" className="mr-1 underline">
										Fillipe Augusto
									</a>{' '}
									· <span className="mx-1">April 23rd, 2021</span>
								</p>
							</div>
						</div>
					</div>

					<div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
						{newProjectData.map((project) => {
							return (
								<div
									className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
									key={project.id}
								>
									<a
										href={`http://localhost:3000/projects/${project.slug}`}
										className="block"
									>
										<img
											className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
											src={project.cover.src}
										/>
									</a>
									<div className="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
										<span>{project.technology}</span>
									</div>
									<h2 className="text-lg font-bold sm:text-xl md:text-2xl">
										{project.name}
									</h2>
									<p className="text-sm text-gray-500">{project.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
