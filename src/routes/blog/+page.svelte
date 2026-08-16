<script>
    export let data;
    $: posts = data.posts;
</script>

<svelte:head>
    <title>Blog o fotografii i wideo | Porady, kulisy, inspiracje – Antoni Stec</title>
    <meta name="description" content="Porady dotyczące fotografii motoryzacyjnej, zdjęć nieruchomości i filmowania eventów. Kulisy pracy fotografa i videografa z Lublina." />
    <link rel="canonical" href="https://antonistec.pl/blog" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonistec.pl/blog" />
    <meta property="og:title" content="Blog o fotografii i wideo – Antoni Stec" />
    <meta property="og:description" content="Porady, inspiracje i kulisy pracy fotografa. Motoryzacja, nieruchomości, eventy." />
    <meta property="og:image" content="https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp" />
</svelte:head>

<section class="blog-page">
    <div class="container">
        <div class="header">
            <h1>Blog</h1>
            <p>Wiedza, porady i kulisy mojej pracy.</p>
        </div>

        <div class="grid">
            {#each posts as post}
                <article class="post-card">
                    <a href="/blog/{post.slug}" class="img-link">
                        <img src={post.coverImage} alt={post.title} loading="lazy">
                    </a>
                    <div class="content">
                        <span class="date">{post.date}</span>
                        <h2><a href="/blog/{post.slug}">{post.title}</a></h2>
                        <p>{post.excerpt}</p>
                        <a href="/blog/{post.slug}" class="read-more">Czytaj dalej &rarr;</a>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .blog-page {
        padding-top: 8rem; /* Space for fixed navbar */
        min-height: 80vh;
    }

    .header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .header h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2.5rem;
    }

    .post-card {
        background: #141414;
        border: 1px solid #222;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.3s;
    }

    .post-card:hover {
        transform: translateY(-5px);
        border-color: #333;
    }

    .img-link {
        display: block;
        aspect-ratio: 16/9;
        overflow: hidden;
    }

    .img-link img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
    }

    .post-card:hover img {
        transform: scale(1.05);
    }

    .content {
        padding: 1.5rem;
    }

    .date {
        font-size: 0.85rem;
        color: #666;
        display: block;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    h2 a {
        color: #fff;
        text-decoration: none;
    }

    p {
        color: #aaa;
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .read-more {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .read-more:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>