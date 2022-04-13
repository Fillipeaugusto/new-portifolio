/* eslint-disable @next/next/no-sync-scripts */
/* This example requires Tailwind CSS v2.0+ */

export default function Certification() {
	const cards = [
		{
			imageSrc: '/assets/udemy.jpg',
			title: 'Curso de JavaScript e TypeScript do básico ao avançado ',
		},
		{
			imageSrc: '/assets/logo-cna.svg',
			title: 'Cna master in english course',
		},
	];

	return (
		<div className="relative">
			<div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24">
				<h2 className="w-full text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-5xl">
					Meus <span className="text-indigo-500">Certificados</span>
				</h2>
				{cards.map((card, i) => (
					<div className="md:w-1/2 lg:w-1/3 px-6 flex" key={i}>
						<div className="flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-violet-600 rounded-lg mt-12">
							<span className="border-2 border-gray-300 text-center rounded-full p-6 flex-shrink-0 relative">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
								</svg>
							</span>
							<span className="mt-6 text-center">
								<span className="mt-2 font-bold text-xl leading-none text-violet-600">
									{card.title || 'Fully Secure'}
								</span>
							</span>
						</div>
					</div>
				))}
			</div>
			<div className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48" />
		</div>
	);
}
