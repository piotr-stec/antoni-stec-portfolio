<script>
    export let data;
    $: post = data.post;
</script>

<svelte:head>
    <title>{post ? `${post.title} – Antoni Stec` : 'Artykuł – Antoni Stec'}</title>
    <meta name="description" content={post ? post.excerpt : 'Artykuł na blogu Antoniego Steca – fotografia i wideo.'} />
    <link rel="canonical" href={`https://www.antonistec.pl/blog/${post ? post.slug : ''}`} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://www.antonistec.pl/blog/${post ? post.slug : ''}`} />
    <meta property="og:title" content={post ? post.title : 'Artykuł – Antoni Stec'} />
    <meta property="og:description" content={post ? post.excerpt : ''} />
    <meta property="og:image" content={post ? post.coverImage : 'https://www.antonistec.pl/portfolio/motoryzacja/subaru/01.webp'} />
    <meta property="article:published_time" content={post ? post.date : ''} />
    <meta property="article:author" content="Antoni Stec" />
</svelte:head>

<div class="blog-post-page">
    {#if post}
        <article class="container">
            <header>
                <a href="/blog" class="back-link">&larr; Wróć do bloga</a>
                <span class="date">{post.date}</span>
                <h1>{post.title}</h1>
            </header>
            
            <div class="cover-image">
                <img src={post.coverImage} alt={post.title}>
            </div>

            <div class="content">
                {@html post.content}
            </div>
            
            <div class="cta-box">
                <h3>Potrzebujesz podobnych materiałów?</h3>
                <p>Napisz do mnie i stwórzmy coś razem.</p>
                <a href="/kontakt" class="btn btn-primary">Zapytaj o wycenę</a>
            </div>
        </article>
    {:else}
        <div class="container not-found">
            <h1>Nie znaleziono artykułu</h1>
            <a href="/blog" class="btn btn-outline">Wróć do listy</a>
        </div>
    {/if}
</div>

<style>
    .blog-post-page {
        padding-top: 8rem;
        padding-bottom: 4rem;
        min-height: 80vh;
    }

    .container {
        max-width: 800px; /* Narrower for readability */
    }

    header {
        margin-bottom: 2rem;
        text-align: center;
    }

    .back-link {
        display: inline-block;
        margin-bottom: 2rem;
        color: #888;
        text-decoration: none;
        font-size: 0.9rem;
    }

    .back-link:hover {
        color: #fff;
    }

    .date {
        display: block;
        color: #666;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 2.5rem;
        line-height: 1.2;
    }

    .cover-image {
        width: 100%;
        aspect-ratio: 16/9;
        margin-bottom: 3rem;
        border-radius: 8px;
        overflow: hidden;
    }

    .cover-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Content Styling (Global scope for innerHTML) */
    .content :global(h2), .content :global(h3) {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        color: #e0e0e0;
    }

    .content :global(p) {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        color: #ccc;
    }

    .cta-box {
        margin-top: 4rem;
        padding: 3rem;
        background: #141414;
        border: 1px solid #222;
        border-radius: 12px;
        text-align: center;
    }

    .cta-box h3 {
        margin-bottom: 0.5rem;
    }

    .cta-box p {
        margin-bottom: 2rem;
    }

    .not-found {
        text-align: center;
        padding-top: 4rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }
</style>