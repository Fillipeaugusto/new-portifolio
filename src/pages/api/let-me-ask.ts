/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 3,
		name: 'Let me ask',
		description:
			'LetMeAsk é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/P%C3%A1gina_inicial.svg',
			alt: 'Project 3',
		},
		technology: 'Next Js',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/P%C3%A1gina_inicial.svg',
				alt: 'img1',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Empty_state.svg',
				alt: 'img2',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Perguntas.svg',
				alt: 'img3',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Usu%C3%A1rio_logado.svg',
				alt: 'img4',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Empty_state1.svg',
				alt: 'img5',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Pergunta_em_destaque.svg',
				alt: 'img6',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Perguntas_1.svg',
				alt: 'img7',
			},
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/Sala_React_Q&A_Perguntas_2.svg',
				alt: 'img8',
			},
		],
		downloadUrl:
			'https://codeload.github.com/Fillipeaugusto/ig-news/zip/refs/heads/main',
		instructions:
			'Baixe os arquivos, descompacte, execute o comando yarn e após isso o comando yarn dev o App deverá inicializar em localhost:3000.',
		functions: [
			{ name: 'Cadastro de usuário' },
			{ name: 'Listagem de posts' },
			{ name: 'Cadastro de perguntas' },
			{ name: 'Login com Google' },
			{ name: 'Criar salas de perguntas' },
		],
	};

	return response.json(project);
};
