<script>
    import { page } from '$app/stores';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Strona nie znaleziona | Antoni Stec</title>
</svelte:head>

<Navbar />

<section class="error-page">
    <div class="container error-container">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Ups, chyba trochę zbłądziłeś...</h2>
        <p class="error-desc">Strona <strong>{$page.url.pathname}</strong> nie istnieje lub została przeniesiona. Nie martw się, to się zdarza nawet najlepszym kierowcom.</p>
        
        <div class="error-actions">
            <a href="/" class="btn btn-primary">Wróć na stronę główną</a>
            <a href="/kontakt" class="btn btn-outline">Skontaktuj się ze mną</a>
        </div>
    </div>
</section>

<Footer />

<style>
    .error-page {
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 8rem 0 4rem;
    }

    .error-code {
        font-size: 8rem;
        line-height: 1;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #fff, #555);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }

    .error-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #fff;
    }

    .error-desc {
        font-size: 1.15rem;
        color: #aaa;
        max-width: 600px;
        margin: 0 auto 3rem;
        line-height: 1.6;
    }

    .error-actions {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .error-code {
            font-size: 6rem;
        }

        .error-title {
            font-size: 2rem;
        }

        .error-actions {
            flex-direction: column;
            gap: 1rem;
            max-width: 300px;
            margin: 0 auto;
        }
    }
</style>
