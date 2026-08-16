<script>
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Kontakt i Wycena – Fotograf Lublin | Antoni Stec</title>
    <meta name="description" content="Skontaktuj się z fotografem i videografem z Lublina. Bezpłatna wycena sesji motoryzacyjnej, zdjęć nieruchomości i filmowania eventów. Odpowiem w ciągu 24h." />
    <link rel="canonical" href="https://antonistec.pl/kontakt" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonistec.pl/kontakt" />
    <meta property="og:title" content="Kontakt i Wycena – Fotograf Lublin | Antoni Stec" />
    <meta property="og:description" content="Zapytaj o wycenę sesji motoryzacyjnej, zdjęć nieruchomości lub filmowania eventów w Lublinie. Odpowiadam szybko." />
    <meta property="og:image" content="https://antonistec.pl/portfolio/motoryzacja/subaru/01.webp" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Kontakt – Antoni Stec Foto & Wideo",
      "url": "https://antonistec.pl/kontakt",
      "description": "Skontaktuj się z fotografem i videografem z Lublina – Antoni Stec.",
      "mainEntity": {
        "@type": "Person",
        "name": "Antoni Stec",
        "jobTitle": "Fotograf i Videograf",
        "telephone": "+48575554750",
        "email": "mailto:antoni.stec82@gmail.com",
        "url": "https://antonistec.pl",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lublin",
          "addressRegion": "lubelskie",
          "addressCountry": "PL"
        },
        "sameAs": ["https://www.instagram.com/stec.antoni/"]
      }
    }
    </script>
</svelte:head>

<div class="kontakt-page">
    <div class="page-header container">
        <h1>Kontakt i wycena</h1>
        <p class="page-intro">Działam w Lublinie i okolicach. Opisz projekt – odezwę się w ciągu 24&nbsp;h z&nbsp;wyceną.</p>
    </div>

    <Contact id="kontakt-form" />
    
    <section class="lokalizacja">
        <div class="container">
            <h2 class="section-title">Obszar działania</h2>
            <div class="lokalizacja-grid">
                <div class="lokalizacja-text">
                    <p>Realizuję zlecenia na terenie <strong>Lublina i bliskich okolic</strong>.</p>
                    <p>Zawsze stawiam na lokalne współprace, dlatego dojazd na terenie Lublina jest darmowy, a szczegóły sesji w niedalekiej okolicy ustalamy indywidualnie.</p>
                    <ul class="lokalizacja-lista">
                        <li>📍 Lublin</li>
                        <li>📍 Okolice Lublina</li>
                    </ul>
                </div>
                <div class="kontakt-dane">
                    <h3>Dane kontaktowe</h3>
                    <address>
                        <div class="kontakt-item">
                            <span class="kontakt-label">Telefon</span>
                            <a href="tel:+48575554750">+48 575 554 750</a>
                        </div>
                        <div class="kontakt-item">
                            <span class="kontakt-label">Email</span>
                            <a href="mailto:antoni.stec82@gmail.com">antoni.stec82@gmail.com</a>
                        </div>
                        <div class="kontakt-item">
                            <span class="kontakt-label">Instagram</span>
                            <a href="https://www.instagram.com/stec.antoni/" target="_blank" rel="noopener noreferrer">@stec.antoni</a>
                        </div>
                        <div class="kontakt-item">
                            <span class="kontakt-label">Lokalizacja</span>
                            <span>Lublin, woj. lubelskie</span>
                        </div>
                        <div class="kontakt-item">
                            <span class="kontakt-label">Czas odpowiedzi</span>
                            <span>do 24 h</span>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    </section>
</div>

<Footer />

<style>
    .kontakt-page {
        padding-top: 8rem;
        padding-bottom: 0;
        min-height: 80vh;
    }

    .page-header {
        text-align: center;
        margin-bottom: 0;
        padding-bottom: 3rem;
    }

    .page-header h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }

    .page-intro {
        font-size: 1.15rem;
        color: #888;
        max-width: 560px;
        margin: 0 auto;
        line-height: 1.7;
    }

    .lokalizacja {
        background-color: #0f0f0f;
        border-top: 1px solid #1a1a1a;
    }

    .section-title {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        text-align: center;
    }

    .lokalizacja-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }

    .lokalizacja-text p {
        font-size: 1.05rem;
        line-height: 1.8;
        color: #ccc;
        margin-bottom: 1.5rem;
    }

    .lokalizacja-text strong {
        color: #fff;
    }

    .lokalizacja-lista {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .lokalizacja-lista li {
        font-size: 1rem;
        color: #aaa;
        padding: 0.5rem 0;
        border-bottom: 1px solid #1a1a1a;
    }

    .kontakt-dane {
        background: #1a1a1a;
        border-radius: 12px;
        padding: 2rem;
    }

    .kontakt-dane h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #fff;
    }

    address {
        font-style: normal;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .kontakt-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #252525;
    }

    .kontakt-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .kontakt-label {
        font-size: 0.85rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .kontakt-item a,
    .kontakt-item span:not(.kontakt-label) {
        color: #e0e0e0;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.2s;
    }

    .kontakt-item a:hover {
        color: #fff;
    }

    @media (max-width: 768px) {
        .kontakt-page {
            padding-top: 6rem;
        }

        .page-header h1 {
            font-size: 2.5rem;
        }

        .lokalizacja-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .section-title {
            font-size: 2rem;
        }
    }
</style>
