<script>
	import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import { dev } from '$app/environment';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';

    injectSpeedInsights();
    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <title>Antoni Stec - Foto & Wideo | Motoryzacja, Nieruchomości, Eventy</title>
    <meta name="description" content="Profesjonalna fotografia i wideo w Lublinie i okolicach. Specjalizacja: motoryzacja, nieruchomości i relacje z eventów. Sprawdź portfolio i ofertę." />
    <meta name="keywords" content="fotograf motoryzacyjny Lublin, filmowanie aut Lublin, zdjęcia nieruchomości Lublin, fotograf nieruchomości, rolki instagram, wideo promocyjne, Antoni Stec, fotograf Lublin" />
    
    <!-- Canonical URL and OG URL are managed per-page -->
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Antoni Stec - Foto & Wideo | Motoryzacja, Nieruchomości, Eventy" />
    <meta property="og:description" content="Tworzę content, który sprzedaje. Zdjęcia i filmy dla motoryzacji i nieruchomości w Lublinie i okolicach." />
    <meta property="og:image" content="https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp" />
    <meta property="og:locale" content="pl_PL" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Antoni Stec - Foto & Wideo" />
    <meta name="twitter:description" content="Profesjonalna fotografia i wideo w Lublinie. Motoryzacja, nieruchomości, eventy." />
    <meta name="twitter:image" content="https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp" />
    
    <!-- Additional SEO -->
    <meta name="author" content="Antoni Stec" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="googlebot" content="index, follow" />
    
    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Antoni Stec - Foto & Wideo",
      "description": "Profesjonalna fotografia i wideo w Lublinie. Specjalizacja: motoryzacja, nieruchomości, eventy.",
      "url": "https://antonistec.pl",
      "logo": "https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp",
      "image": "https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp",
      "priceRange": "150-400 PLN",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lublin",
        "addressRegion": "lubelskie",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.2465",
        "longitude": "22.5684"
      },
      "areaServed": "Lublin i województwo lubelskie",
      "serviceType": ["Fotografia motoryzacyjna", "Fotografia nieruchomości", "Filmowanie eventów", "Rolki Instagram"]
    }
    </script>
    
    <!-- Font Optimization with preconnect and preload -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Preload hero image for LCP optimization -->
    <link rel="preload" as="image" href="/portfolio/motoryzacja/subaru/01.webp" fetchpriority="high">
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.json">
</svelte:head>

<Navbar />

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #0a0a0a; /* Dark background */
        color: #f0f0f0; /* Light text */
        font-family: 'Manrope', sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
    }

    :global(*) {
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        margin: 0;
        font-weight: 700;
        color: #ffffff;
    }

    :global(p) {
        color: #cccccc;
    }

    :global(.container) {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    :global(.btn) {
        display: inline-block;
        padding: 0.75rem 2rem;
        border-radius: 4px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-size: 1rem;
    }

    :global(.btn-primary) {
        background-color: #ffffff;
        color: #000000;
    }

    :global(.btn-primary:hover) {
        background-color: #d4d4d4;
        transform: translateY(-2px);
    }

    :global(.btn-outline) {
        background-color: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;
    }

    :global(.btn-outline:hover) {
        background-color: rgba(255, 255, 255, 0.1);
    }

    :global(section) {
        padding: 4rem 0; /* Zmniejszony padding globalny */
    }

    /* Scrollbar styling */
    :global(::-webkit-scrollbar) {
        width: 8px;
    }
    :global(::-webkit-scrollbar-track) {
        background: #0a0a0a;
    }
    :global(::-webkit-scrollbar-thumb) {
        background: #333;
        border-radius: 4px;
    }
    :global(::-webkit-scrollbar-thumb:hover) {
        background: #555;
    }
</style>