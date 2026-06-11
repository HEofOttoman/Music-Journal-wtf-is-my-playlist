// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter'
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: 'https://heofottoman.github.io/Music-Journal-wtf-is-my-playlist',
	// site: 'https://heofottoman.github.io',
	// base: '/Music-Journal-wtf-is-my-playlist',
	
	output: 'static',
	adapter: deno(),

	integrations: [
		starlight({
			title: 'Henry Wau`s Music Page',
			// logo: {

			// },
			
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'docs/guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],

			customCss: [
				'./src/styles/global.css'
			]

		}),
	],
});
