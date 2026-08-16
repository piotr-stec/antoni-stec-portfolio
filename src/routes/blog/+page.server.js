import { getAllPosts } from '$lib/server/posts.js';

export function load() {
    const posts = getAllPosts();
    return { posts };
}
