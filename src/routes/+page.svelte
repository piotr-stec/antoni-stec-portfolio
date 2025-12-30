<script>
    import Hero from '$lib/components/Hero.svelte';
    import Services from '$lib/components/Services.svelte';
    import Portfolio from '$lib/components/Portfolio.svelte';
    import Backstage from '$lib/components/Backstage.svelte';
    import Process from '$lib/components/Process.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import BlogTeaser from '$lib/components/BlogTeaser.svelte';
    import Footer from '$lib/components/Footer.svelte';

    function scrollToQuote() {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<svelte:head>
    <!-- Preload hero image for LCP optimization -->
    <link rel="preload" as="image" href="/SUBARU-2611.jpg" fetchpriority="high">
</svelte:head>

<Hero {scrollToQuote} />
<Services />
<Portfolio />
<Backstage />
<Process />
<BlogTeaser />
<Contact id="contact" />
<Footer />
