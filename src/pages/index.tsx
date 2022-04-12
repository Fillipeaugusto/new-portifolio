/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import ProjectCard from '../components/ProjectCard';
import { Projects } from '../Mocks/Projects';
import { Me } from '../Mocks/Me';
import MyExperience from '../components/MyExperience';
export default function Home() {
	const bigData = Projects[0];
	const newProjectData = Projects.slice(1);

	return (
		<div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
			{/* new-cards  */}

			<section className="py-20 bg-gray-50">
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
			</section>
			<MyExperience />
			<section className="bg-white">
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
									<p className="pt-2 text-xs font-medium">
										<a href="#_" className="mr-1 underline">
											Fillipe Augusto
										</a>{' '}
										· <span className="mx-1">April 10, 2021</span>
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

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
