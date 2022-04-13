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
								<a
									href="/downloads/"
									download="curriculo-Fillipe-Augusto.pdf"
									className="flex block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-auto fill-current"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
									<h1 className="text-center">CV</h1>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<MyExperience />
			<Certification />
			<div className="mb-40 mt-20 flex justify-center items-center ">
				<div className="grid grid-cols-6 max-w-2xl mx-8 rounded-xl bg-blue-500 shadow-lg  shadow-blue-500/90">
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
		</div>
	);
}
