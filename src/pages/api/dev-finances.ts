/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
	const project = {
		id: 1,
		name: 'Dev Finances',
		description:
			'O Dev Finances é um projeto de controle de contas pessoais com controle de recebimentos e pagamentos, assim como calculo dos totais.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_happy/Home.svg',
			alt: 'Project 1',
		},
		technology: 'React Js',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		images: [
			{
				src: 'https://dev.fillipeaugusto.vercel.app/images/images_dev_finances/inicio.png',
				alt: 'img1',
			},
		],
		downloadUrl:
			'https://codeload.github.com/Fillipeaugusto/finances/zip/refs/heads/main',
		instructions:
			'Para usar a plataforma faça login com seu Github, e prossiga para a página de assinatura, na parte de pagamento use o cartão 4242-4242-4242-4242, e preencha as outras informações aleatoriamente, após isso voê terá com sucesso uma assinatura e poderá utilizar o sistema por completo.',
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
