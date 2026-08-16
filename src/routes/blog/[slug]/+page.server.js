import { getPostBySlug } from '$lib/server/posts.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        throw error(404, 'Nie znaleziono artykułu');
    }

    return { post };
}
