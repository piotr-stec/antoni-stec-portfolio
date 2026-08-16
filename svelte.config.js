import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		
		// Prerender configuration for better performance
		prerender: {
			handleMissingId: 'warn',
			entries: ['*']
		},
		
		// CSP for security
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'script-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'img-src': ['self', 'data:', 'https:'],
				'connect-src': ['self']
			}
		},
		
		// Inline all CSS to avoid render-blocking CSS requests
		inlineStyleThreshold: Infinity
	},
	
	// Compiler optimizations
	compilerOptions: {
		cssHash: ({ hash, css }) => `s-${hash(css)}`
	}
};

export default config;
