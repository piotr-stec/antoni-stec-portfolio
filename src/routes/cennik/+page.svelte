<script>
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Cennik usług fotograficznych i wideo | Antoni Stec Lublin</title>
    <meta name="description" content="Sprawdź cennik sesji zdjęciowych i realizacji wideo w Lublinie. Fotografia motoryzacyjna, nieruchomości, eventy i produkty. Transparentne ceny od 150 zł." />
    <link rel="canonical" href="https://antonistec.pl/cennik" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonistec.pl/cennik" />
    <meta property="og:title" content="Cennik usług fotograficznych i wideo | Antoni Stec" />
    <meta property="og:description" content="Transparentny cennik sesji motoryzacyjnych, wnętrz i eventów. Lublin i bliskie okolice." />
</svelte:head>

<section class="cennik-page">
    <div class="container">
        <div class="page-header">
            <h1>Cennik usług</h1>
            <p class="page-intro">Transparentne pakiety dostosowane do Twoich potrzeb. Działam na terenie Lublina i bliskich okolic.</p>
        </div>

        <div class="cennik-grid">
            <!-- MOTORYZACJA -->
            <div class="cennik-kategoria">
                <h2>Motoryzacja</h2>
                <div class="cennik-karta">
                    <div class="cennik-item">
                        <div class="cennik-header">
                            <h3>Sesja zdjęciowa auta</h3>
                            <span class="cena">150 – 250 zł</span>
                        </div>
                        <p>15–20 obrobionych zdjęć. Idealne na OLX, Otomoto i social media.</p>
                    </div>
                    <div class="cennik-item">
                        <div class="cennik-header">
                            <h3>Rolka Instagram/TikTok</h3>
                            <span class="cena">150 – 180 zł</span>
                        </div>
                        <p>Montaż, dobór muzyki, color grading. Dynamiczne wideo przyciągające uwagę.</p>
                    </div>
                    <div class="cennik-item wyrozniony">
                        <div class="cennik-header">
                            <h3>Pakiet Foto + Wideo</h3>
                            <span class="cena">350 – 400 zł</span>
                        </div>
                        <p>Komplet materiałów z jednego spotkania. Najlepszy stosunek ceny do ilości contentu.</p>
                    </div>
                </div>
            </div>

            <!-- NIERUCHOMOŚCI -->
            <div class="cennik-kategoria">
                <h2>Nieruchomości</h2>
                <div class="cennik-karta">
                    <div class="cennik-item">
                        <div class="cennik-header">
                            <h3>Sesja mieszkania / domu</h3>
                            <span class="cena">150 – 200 zł</span>
                        </div>
                        <p>Szerokie kadry, technika HDR. Jasne przestronne zdjęcia do publikacji na portalach ogłoszeniowych.</p>
                    </div>
                </div>
            </div>

            <!-- EVENTY -->
            <div class="cennik-kategoria">
                <h2>Eventy i Reportaż</h2>
                <div class="cennik-karta">
                    <div class="cennik-item">
                        <div class="cennik-header">
                            <h3>Reportaż zdjęciowy</h3>
                            <span class="cena">120 – 150 zł / h</span>
                        </div>
                        <p>Dyskretna relacja z wydarzenia, selekcja i pełna postprodukcja. Minimalny czas zlecenia do ustalenia.</p>
                    </div>
                    <div class="cennik-item">
                        <div class="cennik-header">
                            <h3>Rolka eventowa</h3>
                            <span class="cena">250 – 300 zł</span>
                        </div>
                        <p>Dynamiczny skrót wideo z wydarzenia (np. otwarcie lokalu, impreza), gotowy na Instagram/TikTok.</p>
                    </div>
                </div>
            </div>

            <!-- PRODUKTY -->
            <div class="cennik-kategoria">
                <h2>Fotografia produktowa</h2>
                <div class="cennik-karta">
                    <div class="cennik-item">
                        <div class="cennik-header">
                            <h3>Sesja produktu</h3>
                            <span class="cena">150 – 200 zł</span>
                        </div>
                        <p>Szczegółowe zdjęcia produktów na białym tle. Wycena zależy od liczby produktów i stopnia skomplikowania retuszu.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="info-dodatkowe">
            <h3>Ważne informacje</h3>
            <ul>
                <li>Podane ceny są <strong>orientacyjne</strong> i zależą od skali oraz specyfiki zlecenia.</li>
                <li>Dojazd na terenie <strong>Lublina</strong> jest całkowicie darmowy. Wyjazdy poza Lublin ustalamy indywidualnie.</li>
                <li>Przy stałej współpracy z salonami, agencjami i biurami nieruchomości oferuję korzystniejsze, zryczałtowane stawki.</li>
            </ul>
            <div class="cta-box">
                <p>Masz nietypowe zlecenie lub chcesz ustalić szczegóły?</p>
                <a href="/kontakt" class="btn btn-primary">Napisz po darmową wycenę</a>
            </div>
        </div>
    </div>
</section>

<Footer />

<style>
    .cennik-page {
        padding-top: 8rem;
        padding-bottom: 4rem;
        min-height: 80vh;
        background-color: #0a0a0a;
    }

    .page-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .page-header h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }

    .page-intro {
        font-size: 1.15rem;
        color: #888;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
    }

    .cennik-grid {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        max-width: 800px;
        margin: 0 auto 4rem auto;
    }

    .cennik-kategoria h2 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #222;
        color: #fff;
    }

    .cennik-karta {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .cennik-item {
        background: #111;
        border: 1px solid #1a1a1a;
        border-radius: 8px;
        padding: 1.5rem;
        transition: border-color 0.3s;
    }

    .cennik-item:hover {
        border-color: #333;
    }

    .cennik-item.wyrozniony {
        border-color: #444;
        background: linear-gradient(145deg, #161616, #111);
    }

    .cennik-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.75rem;
        gap: 1rem;
    }

    .cennik-header h3 {
        font-size: 1.2rem;
        margin: 0;
        color: #e0e0e0;
    }

    .cena {
        font-size: 1.25rem;
        font-weight: 700;
        color: #fff;
        white-space: nowrap;
    }

    .cennik-item p {
        font-size: 0.95rem;
        color: #888;
        line-height: 1.6;
        margin: 0;
    }

    .info-dodatkowe {
        background: #0f0f0f;
        border: 1px solid #1e1e1e;
        border-radius: 12px;
        padding: 2.5rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .info-dodatkowe h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #fff;
    }

    .info-dodatkowe ul {
        list-style: none;
        padding: 0;
        margin: 0 0 2.5rem 0;
    }

    .info-dodatkowe li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 1rem;
        color: #aaa;
        line-height: 1.6;
    }

    .info-dodatkowe li::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #fff;
        font-size: 1.2rem;
        line-height: 1.6;
    }

    .cta-box {
        text-align: center;
        border-top: 1px solid #222;
        padding-top: 2rem;
    }

    .cta-box p {
        font-size: 1.1rem;
        color: #e0e0e0;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .page-header h1 {
            font-size: 2.5rem;
        }

        .cennik-header {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>
