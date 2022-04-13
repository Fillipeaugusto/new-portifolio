/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import ProjectCard from '../components/ProjectCard';
import { Projects } from '../Mocks/Projects';
import { Me } from '../Mocks/Me';
import MyExperience from '../components/MyExperience';
import Link from 'next/link';
import Certification from '../components/Certification';
export default function Home() {
	const bigData = Projects[0];
	const newProjectData = Projects.slice(1);

	return (
		<div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
			{/* new-cards  */}
			<section className="w-full py-12 bg-white lg:py-24">
				<div className="max-w-6xl px-12 mx-auto text-center">
					<div className="space-y-12 md:text-center">
						<div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
							<h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
								Seja bem <span className="text-indigo-500">vindo</span> ao meu{' '}
								<span className="text-indigo-500">blog</span>
							</h2>
							<p className="text-xl text-gray-500">
								Aqui estão todos os meus projetos que desenvolvi durante a minha
								carreira, e aqui você pode conhecer um pouco mais sobre mim, e sobre meu
								trabalho.
							</p>
						</div>
					</div>

					<div className="flex gap-10 ">
						<div className="w-full border border-gray-200 rounded-lg shadow-sm">
							<div>
								<div className="flex flex-col items-center justify-center p-10">
									<img
										className="w-32 h-32 mb-6 rounded-full"
										src="https://avatars.githubusercontent.com/u/55332682?s=400&u=b7c344b960fec4a099a5cca57fbca6f1a7e172ee&v=4"
									/>
									<h2 className="text-lg font-medium">Fillipe Augusto Ribeiro</h2>
									<p className="font-medium text-blue-500">Front end Dev</p>
									<p className="text-gray-400">{Me.about}</p>
								</div>
							</div>
							<div className="flex border-t border-gray-200 divide-x divide-gray-200">
								<a
									href="https://github.com/Fillipeaugusto"
									target="_blank"
									className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-auto fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
									</svg>
								</a>
								<a
									href="www.linkedin.com/in/fillipeaugustoribeiro"
									target="_blank"
									className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-auto fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="py-20 bg-gray-50">
				<div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
					<div className="flex flex-wrap items-center -mx-3">
						<div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
							<div className="w-full lg:max-w-md">
								<h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
									Olá dev eu me chamo {Me.name}
								</h2>
								<p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
									{Me.about}
								</p>
								<ul>
									<li className="flex items-center py-2 space-x-4 xl:py-3">
										<svg
											className="w-8 h-8 text-pink-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
											></path>
										</svg>
										<span className="font-medium text-gray-500">
											Faster Processing and Delivery
										</span>
									</li>
									<li className="flex items-center py-2 space-x-4 xl:py-3">
										<svg
											className="w-8 h-8 text-yellow-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
											></path>
										</svg>
										<span className="font-medium text-gray-500">
											Out of the Box Tracking and Monitoring
										</span>
									</li>
									<li className="flex items-center py-2 space-x-4 xl:py-3">
										<svg
											className="w-8 h-8 text-green-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											></path>
										</svg>
										<span className="font-medium text-gray-500">
											100% Protection and Security for Your App
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
							<img
								className="mx-auto sm:max-w-sm lg:max-w-full rounded-md"
								src="https://avatars.githubusercontent.com/u/55332682?s=400&u=b7c344b960fec4a099a5cca57fbca6f1a7e172ee&v=4"
								alt="feature image"
							/>
						</div>
					</div>
				</div>
			</section> */}
			<MyExperience />
			<Certification />
			<div className="mb-40 mt-20 flex justify-center items-center ">
				<div className="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-blue-500 shadow-lg  shadow-blue-500/90">
					<div className="col-span-4">
						<h2 className="font-bold text-3xl text-white ml-10 mt-8">
							Deseja ver meus projetos ?
						</h2>

						<p className="font-light text-white text-sm ml-10 mt-5">
							Clique no botão abaixo para ver todos os projetos que eu realizei.
						</p>
						<Link href="/all-projects">
							<button className="text-white font-semibold ml-10 mt-5 mb-8 group ">
								Meus projetos
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</button>
						</Link>
					</div>

					<div className="col-span-2 relative">
						<img
							className="absolute bottom-0 right-0 img-coding"
							src="/assets/programming.svg"
							alt="programming"
						/>
					</div>
				</div>
			</div>
			{/* <section className="bg-white">
				<div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
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
			</section> */}

			{/* final new card */}
			{/* <section className="bg-white py-8">
				<div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
					<nav id="store" className="w-full z-30 top-0 px-6 py-1">
						<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
							<a
								className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
								href="#"
							>
								Projetos
							</a>
						</div>
					</nav>

					{Projects.map((project) => {
						return <ProjectCard key={project.id} project={project} />;
					})}

					 <div classNameName="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
						<a href="#">
							<img
								classNameName="hover:grow hover:shadow-lg"
								src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
							/>
							<div classNameName="pt-3 flex items-center justify-between">
								<p classNameName="">Product Name</p>
								<svg
									classNameName="h-6 w-6 fill-current text-gray-500 hover:text-black"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
								</svg>
							</div>
							<p classNameName="pt-1 text-gray-900">£9.99</p>
						</a>
					</div>

				</div>
			</section> */}
		</div>
	);
}
