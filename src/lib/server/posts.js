import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDir = path.resolve('src/posts');

export function getAllPosts() {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');
        const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
        const { data, content } = matter(raw);

        const rawDate = data.date instanceof Date ? data.date : new Date(data.date);
        const formattedDate = rawDate.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: formattedDate,
            rawDate: rawDate.getTime(),
            coverImage: data.coverImage,
            content: marked(content)
        };
    });

    // Sortuj od najnowszego
    return posts.sort((a, b) => b.rawDate - a.rawDate);
}

export function getPostBySlug(slug) {
    return getAllPosts().find(p => p.slug === slug) || null;
}
