<script>
    import Hero from '$lib/components/Hero.svelte';
    import Services from '$lib/components/Services.svelte';
    import Portfolio from '$lib/components/Portfolio.svelte';
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

<Hero {scrollToQuote} />
<Services />
<Portfolio />
<Process />
<BlogTeaser />
<Contact id="contact" />
<Footer />
