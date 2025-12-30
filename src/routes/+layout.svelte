<script>
	import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
    <title>Antoni Stec - Foto & Wideo | Motoryzacja, Nieruchomości, Eventy</title>
    <meta name="description" content="Profesjonalna fotografia i wideo w Krakowie i okolicach. Specjalizacja: motoryzacja, nieruchomości i relacje z eventów. Sprawdź portfolio i ofertę." />
    <meta name="keywords" content="fotograf motoryzacyjny, filmowanie aut, zdjęcia nieruchomości, fotograf nieruchomości, rolki instagram, wideo promocyjne, Antoni Stec" />
    <meta property="og:title" content="Antoni Stec - Foto & Wideo" />
    <meta property="og:description" content="Tworzę content, który sprzedaje. Zdjęcia i filmy dla motoryzacji i nieruchomości." />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
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
        padding: 6rem 0; /* Increased padding slightly for better breathing room with navbar */
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