/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);

	// Security headers
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
	
	// Cache control for static assets
	if (event.url.pathname.startsWith('/static/') || 
	    event.url.pathname.match(/\.(jpg|jpeg|png|webp|gif|svg|mp4|webm)$/)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}
	
	// Cache control for pages
	if (event.url.pathname === '/' || event.url.pathname.startsWith('/blog')) {
		response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=7200');
	}

	return response;
}
