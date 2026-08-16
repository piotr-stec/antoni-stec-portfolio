<script>
    export let posts = [];
    $: recentPosts = posts.slice(0, 3);
</script>

<section id="blog-preview">
    <div class="container">
        <div class="header">
            <h2 class="section-title">Ostatnio na blogu</h2>
            <a href="/blog" class="view-all">Zobacz wszystkie &rarr;</a>
        </div>

        <div class="grid">
            {#each recentPosts as post}
                <article class="post-card">
                    <a href="/blog/{post.slug}" class="img-link">
                        <img 
                            src={post.coverImage.replace('.webp', '_thumb.webp')} 
                            alt={post.title} 
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="225"
                        >
                    </a>
                    <div class="content">
                        <span class="date">{post.date}</span>
                        <h3><a href="/blog/{post.slug}">{post.title}</a></h3>
                        <a href="/blog/{post.slug}" class="read-more">Czytaj dalej</a>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 2.5rem;
        margin: 0;
    }

    .view-all {
        color: #888;
        text-decoration: none;
        transition: color 0.2s;
    }

    .view-all:hover {
        color: #fff;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .post-card {
        background: #141414; /* Slightly lighter than bg */
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.3s;
    }

    .post-card:hover {
        transform: translateY(-5px);
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
        font-size: 0.8rem;
        color: #666;
        display: block;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    h3 a {
        color: #fff;
        text-decoration: none;
    }

    .read-more {
        font-size: 0.9rem;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        border-bottom: 1px solid #333;
        padding-bottom: 2px;
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }
    }
</style>