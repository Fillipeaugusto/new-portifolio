/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import ProjectCard from '../components/ProjectCard';
import { Projects } from '../Mocks/Projects';

export default function Home() {
	return (
		<div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
			<section className="bg-white py-8">
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

					{/* <div classNameName="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
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
 */}
				</div>
			</section>

			<div className="align-center flex justify-center">
				<div className="container py-16 md:py-20" id="work">
					<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
						Minha <span className="text-indigo-500">experiência</span>
					</h2>
					<h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
						Aqui estão as empresas por onde passei
					</h3>

					<div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
						<span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-gray-400 md:block"></span>
						{/* experience data */}
						<div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
							<div className="md:w-2/5">
								<div className="flex justify-center md:justify-start">
									<span className="shrink-0">
										<img
											src="/assets/img/logo-interativa.png"
											className="h-auto w-32"
											alt="company logo"
										/>
									</span>
									<div className="relative ml-3 hidden w-full md:block">
										<span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-400"></span>
									</div>
								</div>
							</div>
							<div className="md:w-3/5">
								<div className="relative flex md:pl-18">
									<span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-400 bg-white md:block"></span>

									<div className="mt-1 flex">
										<i className="bx bxs-right-arrow hidden text-indigo-500 md:block"></i>
										<div className="md:-mt-1 md:pl-8">
											<span className="block font-body font-bold text-gray-400">
												Jun 2021 - Nov 2021
											</span>
											<span className="block pt-2 font-header text-xl font-bold uppercase text-indigo-500">
												Full stack Developer
											</span>
											<div className="pt-2">
												<span className="block font-body text-black">
													{/* Participação no desenvolvimento , e manutenção de aplicações front
													end em react js, participação no desenvolvimento e manutenção de
													api rest em node. */}
													Ná Interativa Digital participei no desenvolvimento , e manutenção
													de aplicações front end pwa em react js, participação no
													desenvolvimento e manutenção de api rest em node, sempre com muito
													profissionalismo e obtendo bons resultados.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
							<div className="md:w-2/5">
								<div className="flex justify-center md:justify-start">
									<span className="shrink-0">
										<img
											src="/assets/img/logo-microsoft.svg"
											className="h-auto w-32"
											alt="company logo"
										/>
									</span>
									<div className="relative ml-3 hidden w-full md:block">
										<span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-400"></span>
									</div>
								</div>
							</div>
							<div className="md:w-3/5">
								<div className="relative flex md:pl-18">
									<span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-400 bg-white md:block"></span>

									<div className="mt-1 flex">
										<i className="bx bxs-right-arrow hidden text-indigo-500 md:block" />
										<div className="md:-mt-1 md:pl-8">
											<span className="block font-body font-bold text-gray-400">
												Mar 2018 - September 2019
											</span>
											<span className="block pt-2 font-header text-xl font-bold uppercase text-indigo-500">
												Software Engineer
											</span>
											<div className="pt-2">
												<span className="block font-body text-black">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
													mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
							<div className="md:w-2/5">
								<div className="flex justify-center md:justify-start">
									<span className="shrink-0">
										<img
											src="/assets/img/logo-fedex.svg"
											className="h-auto w-32"
											alt="company logo"
										/>
									</span>
									<div className="relative ml-3 hidden w-full md:block">
										<span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-400"></span>
									</div>
								</div>
							</div>
							<div className="md:w-3/5">
								<div className="relative flex md:pl-18">
									<span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-gray-400 bg-white md:block"></span>

									<div className="mt-1 flex">
										<i className="bx bxs-right-arrow hidden text-indigo-500 md:block"></i>
										<div className="md:-mt-1 md:pl-8">
											<span className="block font-body font-bold text-gray-400">
												October 2019 - Feb 2021
											</span>
											<span className="block pt-2 font-header text-xl font-bold uppercase text-indigo-500">
												DevOps Engineer
											</span>
											<div className="pt-2">
												<span className="block font-body text-black">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
													mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
