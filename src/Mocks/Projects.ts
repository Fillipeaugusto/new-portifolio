interface Features {
	name: string;
	description: string;
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
	slug: string;
}

export const Projects: Project[] = [
	{
		id: 1,
		name: 'Ig news',
		description:
			'O Ig.news é uma plataforma de assinatura para conteúdos em texto dedicada para desenvolvedores, o objetivo da plataforma é gerar conteúdos em texto e coverns para a comunidade de desenvolvedores.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_ig_news/Home.png',
			alt: 'Project 2',
		},
		technology: 'React Js',
		slug: 'ig-news',
	},
	{
		id: 2,
		name: 'Dev Finances',
		description:
			'O Dev.Finances é um projeto de controle de contas pessoais com controle de recebimentos e pagamentos, assim como calculo dos totais.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_dev_finances/inicio.png',
			alt: 'Project 1',
		},
		technology: 'React Js',
		features: [{ name: 'Origin', description: 'Designed by Good Goods, Inc.' }],
		slug: 'dev-finances',
	},

	{
		id: 3,
		name: 'Let me ask',
		description:
			'LetMeAsk é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_letmeask/P%C3%A1gina_inicial.svg',
			alt: 'Project 3',
		},
		technology: 'React Js',
		slug: 'let-me-ask',
	},
	{
		id: 4,
		name: 'Move It',
		description:
			'O Move It é um projeto que visa adicionar gamificação na sua rotina de trabalho, para tornar o dia mais produtivo e divertido trazendo exercícios para o corpo e olhos a cada período de foco.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_moveIt/Home.png',
			alt: 'Project 3',
		},
		technology: 'React Js',
		slug: 'dev-finances',
	},
	{
		id: 5,
		name: 'Happy',
		description:
			'O Happy é uma plataforma web onde pessoas podem buscar por orfanatos para visitas e se guiar pela localização, horário de visita e disponibilidade para visita em fins de semana.',
		cover: {
			src: 'https://dev.fillipeaugusto.vercel.app/images/images_happy/Home.svg',
			alt: 'Project 3',
		},
		technology: 'React Js',
		slug: 'dev-finances',
	},
];
