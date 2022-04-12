/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import {
	BriefcaseIcon,
	CalendarIcon,
	CurrencyDollarIcon,
	LocationMarkerIcon,
	LightningBoltIcon,
	TagIcon,
} from '@heroicons/react/solid';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ProjectInformation from '../../components/ProjectInformation';
import ProjectSpecs from '../../components/ProjectSpecs';
import { api } from '../../services/api';

import { Projects as ProjectMock } from '../../Mocks/Projects';
import Link from 'next/link';

interface Features {
	name: string;
	description: string;
}

interface Functions {
	name: string;
}

interface Images {
	src: string;
	alt: string;
}

interface Project {
	id: number;
	name: string;
	description: string;
	technology: string;
	cover?: {
		src?: string;
		alt?: string;
	};
	features?: Features[];
	images: Images[];
	downloadUrl?: string;
	instructions: string;
	functions: Functions[];
}

interface Data {
	project: Project;
}

export default function Projects({ project }: Data) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	return (
		<div className="mt-10">
			{/* <ProjectSpecs name={project.name} description={project.description} /> */}

			<div className="bg-white">
				<Head>
					<title>{project.name}</title>
				</Head>
				<div className="pt-6">
					<nav aria-label="Breadcrumb">
						<ol
							role="list"
							className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
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
									{project.name}
								</span>
							</li>
						</ol>
					</nav>

					<div className="mt-6 max-w-2xl mx-auto pl-4 pr-4 sm:px-8  lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8 ">
						<div className="rounded-lg overflow-hidden w-full max-w-3xl">
							<img
								src={project.images[activeImageIndex]?.src}
								alt={project.images[activeImageIndex]?.src}
								className="w-full h-full object-center object-cover"
							/>
						</div>
						<div className="mt-4 lg:mt-0 lg:row-span-3 lg:max-w-5xl">
							<h2 className="sr-only">Product information</h2>
							<p className="text-3xl mt-6 text-gray-900">Galeria</p>

							<div className="mt-10">
								{/* Colors */}

								{/* Sizes */}
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gridTemplateColumns: 'repeat(3,1fr)',
										alignItems: 'center',
										maxWidth: 'auto',
										// justifyContent: 'center',
										margin: '10px',
									}}
									className="images"
									// display={['grid', 'flex']}
									// flexWrap={['nowrap', 'wrap']}
									// gridTemplateColumns="repeat(3,1fr)"
									// alignItems="center"
									// maxW="auto"
									// m={4}
								>
									{project.images?.map((image, index) => {
										return (
											<div style={{ display: 'flex', maxWidth: '200px' }} key={image.src}>
												<button
													key={image.src}
													style={{ margin: '8px', maxWidth: '154.33px' }}
													className={activeImageIndex === index ? 'active' : ''}
													type="button"
													onClick={() => {
														setActiveImageIndex(index);
													}}
												>
													<img
														// height={['77px', 'auto']}
														src={image.src}
														alt={`imagem + ${image.src}`}
														style={{
															boxShadow: '-2px 6px 22px -3px rgba(0,0,0,0.75)',
															height: 'auto',
														}}
													/>
												</button>
											</div>
										);
									})}
								</div>
								<div className="flex items-center justify-center  max-w-3xl">
									<button className="mt-10 w-full max-w-lg bg-neutral-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="30"
											height="30"
											viewBox="0 0 172 172"
											style={{ fill: '#000000', marginRight: '10px' }}
										>
											<g
												fill="none"
												fillRule="nonzero"
												stroke="none"
												strokeWidth="1"
												strokeLinecap="butt"
												strokeLinejoin="miter"
												strokeMiterlimit="10"
												strokeDasharray=""
												strokeDashoffset="0"
												fontFamily="none"
												fontWeight="none"
												fontSize="none"
												textAnchor="none"
												style={{ mixBlendMode: 'normal' }}
											>
												<path d="M0,172v-172h172v172z" fill="none"></path>
												<g fill="#ffffff">
													<path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"></path>
												</g>
											</g>
										</svg>
										Github
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Product info */}
					<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-10 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
						<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
							<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
								{/* {project.name} */}
								<div className="lg:flex lg:items-center lg:justify-between">
									<div className="flex-1 min-w-0">
										<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
											{project.name}
										</h2>
										<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
											<div className="mt-2 flex items-center text-sm text-gray-500">
												<LightningBoltIcon
													className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												Em destaque
											</div>
											<div className="mt-2 flex items-center text-sm text-gray-500">
												<TagIcon
													className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												{project.technology}
											</div>
											<div className="mt-2 flex items-center text-sm text-gray-500">
												<CalendarIcon
													className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												Feito em 9, 2020
											</div>
										</div>
									</div>
								</div>
							</h1>
						</div>

						{/* Options */}
						{/* <div className="mt-4 lg:mt-0 lg:row-span-3">
							<h2 className="sr-only">Product information</h2>
							<p className="text-3xl text-gray-900">Galeria</p>

							<div className="mt-10">
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gridTemplateColumns: 'repeat(3,1fr)',
										alignItems: 'center',
										maxWidth: 'auto',
										// justifyContent: 'center',
										margin: '10px',
									}}
									className="images"
									// display={['grid', 'flex']}
									// flexWrap={['nowrap', 'wrap']}
									// gridTemplateColumns="repeat(3,1fr)"
									// alignItems="center"
									// maxW="auto"
									// m={4}
								>
									{project.images?.map((image, index) => {
										return (
											<div style={{ display: 'flex', maxWidth: '200px' }} key={image.src}>
												<button
													key={image.src}
													style={{ margin: '8px', maxWidth: '154.33px' }}
													className={activeImageIndex === index ? 'active' : ''}
													type="button"
													onClick={() => {
														setActiveImageIndex(index);
													}}
												>
													<img
														// height={['77px', 'auto']}
														src={image.src}
														alt={`imagem + ${image.src}`}
														style={{
															boxShadow: '-2px 6px 22px -3px rgba(0,0,0,0.75)',
															height: 'auto',
														}}
													/>
												</button>
											</div>
										);
									})}
								</div>
								<button className="mt-10 w-full bg-neutral-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="30"
										height="30"
										viewBox="0 0 172 172"
										style={{ fill: '#000000', marginRight: '10px' }}
									>
										<g
											fill="none"
											fillRule="nonzero"
											stroke="none"
											strokeWidth="1"
											strokeLinecap="butt"
											strokeLinejoin="miter"
											strokeMiterlimit="10"
											strokeDasharray=""
											strokeDashoffset="0"
											fontFamily="none"
											fontWeight="none"
											fontSize="none"
											textAnchor="none"
											style={{ mixBlendMode: 'normal' }}
										>
											<path d="M0,172v-172h172v172z" fill="none"></path>
											<g fill="#ffffff">
												<path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"></path>
											</g>
										</g>
									</svg>
									Github
								</button>
							</div>
						</div> */}
						<div className="mt-4  lg:mt-0 lg:row-span-3 task">
							{/* task-card */}
							<p className="text-xl mb-4">Outros projetos</p>
							{ProjectMock.map((mock) => {
								return (
									<Link
										href={`http://localhost:3000/projects/${mock.slug}`}
										key={mock.id}
									>
										<a href="">
											<div className="p-4 bg-white shadow-xl hover:shadow-2xl trasition delay-150 duration-300 max-w-xl rounded-xl flex justify-start dark:bg-neutral-50 hover:bg-neutral-100 md:flex-row flex-col gap-4 mb-4">
												<div className="relative">
													<img
														src={mock.cover.src}
														className="rounded-xl w-full md:w-auto md:max-h-40"
													/>
												</div>
												<div className="flex flex-col justify-between">
													<div className="flex items-start justify-between text-gray-700  my-2 md:m-0">
														<p className="text-lg font-semibold">{mock.name}</p>
													</div>
													<p className="text-sm  mt-4">
														{mock.description.length > 50
															? mock.description.substring(0, 45) + '..'
															: mock.description}
													</p>
													{/* <p className="text-sm  text-white mt-4">{mock.description}</p> */}
												</div>
											</div>
										</a>
									</Link>
								);
							})}
						</div>
						<div className="pt-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
							{/* Description and details */}
							<div className=" width-100 flex align-center justify-center">
								<ProjectInformation
									name={project.name}
									appFor={project.technology}
									description={project.description}
									downloadUrl={project.downloadUrl}
									instructions={project.instructions}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className=" width-100 flex align-center justify-center">
				<ProjectInformation name={project.name} appFor={project.technology} />
			</div> */}

			<div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div>
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
							Em destaque
						</p>
					</div>
					<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fill="currentColor"
								className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
							>
								<defs>
									<pattern
										id="9012817d-af60-45bb-9786-89646bc1c945"
										x="0"
										y="0"
										width=".135"
										height=".30"
									>
										<circle cx="1" cy="1" r=".7" />
									</pattern>
								</defs>
								<rect
									fill="url(#9012817d-af60-45bb-9786-89646bc1c945)"
									width="52"
									height="24"
								/>
							</svg>
							<span className="relative">Veja</span>
						</span>{' '}
						as propriedades deste projeto
					</h2>
					<p className="text-base text-gray-700 md:text-lg">
						Este projeto conta com as seguintes funcionalidades:
					</p>
				</div>
				<div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
					{project.functions.map((functionality) => {
						return (
							<div
								key={functionality.name}
								className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400"
							>
								<div className="mr-2">
									<svg
										className="w-6 h-6 transition-colors duration-200 text-purple-600 group-hover:text-purple-800 sm:w-8 sm:h-8"
										stroke="currentColor"
										viewBox="0 0 52 52"
									>
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
								<span className="text-gray-800 transition-colors duration-200 group-hover:text-gray-900">
									{functionality.name}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({
	req,
	params,
}) => {
	const { slug } = params;
	try {
		const projectData = await api.get<Project>(
			`http://localhost:3000/api/${slug}`
		);
		const project = {
			slug,
			id: projectData.data.id,
			name: projectData.data.name,
			description: projectData.data.description,
			technology: projectData.data.technology,
			cover: projectData.data.cover,
			features: projectData.data.features,
			images: projectData.data.images,
			downloadUrl: projectData.data.downloadUrl,
			instructions: projectData.data.instructions,
			functions: projectData.data.functions,
		};

		return {
			props: {
				project,
			},
		};
	} catch (err) {
		return {
			redirect: {
				destination: `/not-found`,
				permanent: false,
			},
		};
	}
};
