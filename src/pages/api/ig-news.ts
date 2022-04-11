/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 2,
		name: 'Ig News',
		description:
			'O Ig.news é uma plataforma de assinatura para conteúdos em texto dedicada para desenvolvedores, o objetivo da plataforma é gerar conteúdos em texto e imagens para a comunidade de desenvolvedores.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_ig_news/Home.png',
			alt: 'Project 2',
		},
		technology: 'React Js ,Next Js ,NextAuth',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_ig_news/Home.png',
				alt: 'img1',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_ig_news/Posts.png',
				alt: 'img2',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_ig_news/InternadePost_n_logado.png',
				alt: 'img3',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_ig_news/InternadePost.png',
				alt: 'img4',
			},
		],
		downloadUrl:
			'https://codeload.github.com/Fillipeaugusto/ig-news/zip/refs/heads/main',
		instructions:
			'Baixe os arquivos, descompacte, execute o comando yarn e após isso o comando yarn dev o App deverá inicializar em localhost:3000.',
		functions: [
			{ name: 'Cadastro de usuário' },
			{ name: 'Listagem de posts' },
			{ name: 'Assinatura com stripe' },
			{ name: 'Login com Github' },
			{ name: 'Sessão com Next Auth' },
		],
	};

	return response.json(project);
};
