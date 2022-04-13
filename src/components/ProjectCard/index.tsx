/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Project {
	id: number;
	name: string;
	description: string;
	technology: string;
	cover?: {
		src?: string;
		alt?: string;
	};
	slug: string;
}

interface Data {
	project: Project;
}

export default function ProjectCard({ project }: Data) {
	return (
		<div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col ">
			<a href={`http://localhost:3000/projects/${project.slug}`}>
				<img
					className="hover:grow hover:shadow-lg"
					src={project.cover.src}
					style={{ borderRadius: '6px' }}
				/>
				<div className="pt-3 flex items-center justify-between">
					<p className="font-semibold">{project.name}</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
				</div>
				<p className="pt-1 text-gray-400">{project.technology}</p>
			</a>
		</div>
	);
}
