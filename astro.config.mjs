// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter'
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: 'https://heofottoman.github.io/Music-Journal-wtf-is-my-playlist',
	site: 'https://musicjournal.henrywauzivuff.xyz',
	base: '/',
	
	output: 'server', // This might be causing issues
	adapter: deno(),
	
	integrations: [
		starlight({
			title: "Henry Wau's Music Collection",
			// logo: {

			// },

			
			social: [{ icon: 'github', label: 'GitHub', href: '' }],

			sidebar: [
				{
					label: 'Artists',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Favorite artists', slug: 'docs/artists/artistsilike' },
					],
				},
				{
					label: 'Albums',
					autogenerate: { directory: 'docs/albums' },
				},
			],

			customCss: [
				'./src/styles/global.css'
			]

		}),
	],
});
