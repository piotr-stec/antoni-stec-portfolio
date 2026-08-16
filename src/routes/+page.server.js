import { getAllPosts } from '$lib/server/posts.js';

export function load() {
    const posts = getAllPosts();
    return {
        recentPosts: posts.slice(0, 3)
    };
}
