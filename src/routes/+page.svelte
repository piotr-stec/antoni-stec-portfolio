<script>
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Services from '$lib/components/Services.svelte';
    import Portfolio from '$lib/components/Portfolio.svelte';
    import Backstage from '$lib/components/Backstage.svelte';
    import Process from '$lib/components/Process.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import BlogTeaser from '$lib/components/BlogTeaser.svelte';
    import Reviews from '$lib/components/Reviews.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import FAQ from '$lib/components/FAQ.svelte';
    import InstagramHook from '$lib/components/InstagramHook.svelte';

    export let data;

    function scrollToQuote() {
        const el = document.getElementById('kontakt');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<svelte:head>
    <title>Fotograf motoryzacyjny i wideo Lublin | Rolki, Nieruchomości | Antoni Stec</title>
    <meta name="description" content="Profesjonalna fotografia motoryzacyjna i wideo w Lublinie. Sesje zdjęciowe aut na sprzedaż, rolki na Instagram i TikTok, zdjęcia nieruchomości i eventów. Ceny od 150 zł. Zapytaj o wycenę!" />
    <link rel="canonical" href="https://antonistec.pl" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonistec.pl" />
    <meta property="og:title" content="Fotograf motoryzacyjny i wideo Lublin | Antoni Stec" />
    <meta property="og:description" content="Sesje zdjęciowe aut, rolki na Instagram, zdjęcia nieruchomości i eventów w Lublinie. Sprawdź portfolio i zapytaj o wycenę." />
    <meta property="og:image" content="https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp" />
    <!-- Preload hero image for LCP optimization -->
    <link rel="preload" as="image" href="/portfolio/motoryzacja/subaru/01.webp" fetchpriority="high">
</svelte:head>


<Hero {scrollToQuote} />
<About />
<Services />


<Portfolio />
<InstagramHook />
<Backstage />
<Process />
<BlogTeaser posts={data.recentPosts} />
<Reviews />
<FAQ />
<Contact id="kontakt" />
<Footer />

