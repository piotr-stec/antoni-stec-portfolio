<script>
    import Footer from '$lib/components/Footer.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import InstagramHook from '$lib/components/InstagramHook.svelte';
</script>

<svelte:head>
    <title>Sesja zdjęciowa samochodu Lublin | Zdjęcia aut na sprzedaż i dla pasjonatów</title>
    <meta name="description" content="Profesjonalna sesja zdjęciowa samochodu w Lublinie. Robię zdjęcia aut na sprzedaż (OLX, Otomoto), dla detailingu oraz pamiątkowe sesje dla pasjonatów." />
    <link rel="canonical" href="https://antonistec.pl/oferta/motoryzacja" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonistec.pl/oferta/motoryzacja" />
    <meta property="og:title" content="Sesja zdjęciowa samochodu Lublin | Antoni Stec" />
    <meta property="og:description" content="Profesjonalna sesja zdjęciowa samochodu w Lublinie. Robię zdjęcia aut na sprzedaż (OLX, Otomoto) i pamiątkowe dla pasjonatów." />
    <meta property="og:image" content="https://antonistec.pl/portfolio/motoryzacja/m8/02.jpg" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fotografia motoryzacyjna i wideo Lublin",
      "provider": {
        "@type": "Person",
        "name": "Antoni Stec",
        "telephone": "+48575554750",
        "url": "https://antonistec.pl"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Lublin i województwo lubelskie"
      },
      "serviceType": ["Fotografia motoryzacyjna", "Sesja zdjęciowa samochodu", "Rolki motoryzacyjne Instagram", "Wideo motoryzacyjne TikTok"],
      "offers": [
        {
          "@type": "Offer",
          "name": "Sesja zdjęciowa auta",
          "price": "150",
          "priceCurrency": "PLN",
          "description": "Ok. 15-20 obrobionych zdjęć, wersje web i print."
        },
        {
          "@type": "Offer",
          "name": "Rolka Instagram/TikTok",
          "price": "150",
          "priceCurrency": "PLN",
          "description": "Dynamiczny montaż, muzyka, color grading, format pionowy."
        },
        {
          "@type": "Offer",
          "name": "Pakiet Foto + Wideo",
          "price": "350",
          "priceCurrency": "PLN",
          "description": "Komplet materiałów z jednego spotkania."
        }
      ]
    }
    </script>
</svelte:head>

<!-- ==============================
     HERO – Motoryzacja
     ============================== -->
<section class="moto-hero">
    <div class="moto-hero-bg" style="background-image: url('/portfolio/motoryzacja/m8/02.jpg')">
        <div class="overlay"></div>
    </div>
    <div class="container moto-hero-content">
        <p class="subtitle">Oferta</p>
        <h1>Profesjonalna fotografia<br>motoryzacyjna w Lublinie</h1>
        <p class="hero-desc">Zdjęcia i filmy, które sprzedają. Sesje samochodów na sprzedaż, rolki na Instagram i TikTok dla&nbsp;salonów, detailingu i&nbsp;pasjonatów motoryzacji.</p>
        <div class="cta-group">
            <a href="/kontakt" class="btn btn-primary">Zapytaj o wycenę</a>
            <a href="/cennik" class="btn btn-outline">Zobacz cennik</a>
            <a href="#galeria-moto" class="btn btn-outline">Zobacz portfolio</a>
        </div>
    </div>
</section>

<!-- ==============================
     USŁUGI – trzy karty
     ============================== -->
<section id="uslugi-moto">
    <div class="container">
        <h2 class="section-title">Co dostajesz?</h2>
        <p class="section-intro">Kompleksowa obsługa wizualna – od sprzedażowej sesji zdjęciowej po dynamiczną rolkę na social media.</p>

        <div class="uslugi-grid">
            <article class="usluga-karta">
                <div class="usluga-ikona">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                </div>
                <h3>Sesja zdjęciowa auta</h3>
                <p>15–20 w pełni obrobionych zdjęć w wersjach web i print. Idealne do ogłoszeń sprzedażowych, salonów i mediów społecznościowych.</p>
                <ul class="usluga-lista">
                    <li>Selekcja najlepszych ujęć</li>
                    <li>Pełna postprodukcja i retusz</li>
                    <li>Pliki JPG w wysokiej rozdzielczości</li>
                    <li>Dostawa w ciągu 48–72 h</li>
                </ul>
            </article>

            <article class="usluga-karta">
                <div class="usluga-ikona">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                </div>
                <h3>Rolka Instagram / TikTok</h3>
                <p>Dynamiczny montaż pionowy z dobraną muzyką i color gradingiem. Format idealny do Instagram Reels i TikTok – maximum zasięgów organicznych.</p>
                <ul class="usluga-lista">
                    <li>Format 9:16 (pionowy)</li>
                    <li>Muzyka dopasowana do klimatu</li>
                    <li>Color grading i efekty</li>
                    <li>Dostawa w 2–3 dni robocze</li>
                </ul>
            </article>

            <article class="usluga-karta wyrozn">
                <div class="usluga-ikona">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
                </div>
                <h3>Pakiet Foto + Wideo</h3>
                <p>Komplet materiałów z jednego spotkania – zdjęcia i rolka. Najlepsza cena i spójny content gotowy do publikacji od razu.</p>
                <ul class="usluga-lista">
                    <li>Wszystko z pakietu zdjęciowego</li>
                    <li>Rolka Instagram / TikTok</li>
                    <li>Jedno spotkanie, pełen materiał</li>
                    <li>Oszczędzasz czas i pieniądze</li>
                </ul>
            </article>
        </div>
    </div>
</section>

<!-- ==============================
     DLA KOGO
     ============================== -->
<section class="dla-kogo">
    <div class="container">
        <h2 class="section-title">Dla kogo?</h2>
        <div class="dla-kogo-grid">
            <div class="dla-kogo-item">
                <h3>Sprzedający prywatnie</h3>
                <p>Zdjęcia samochodu do ogłoszenia (OLX, Otomoto). Chcesz sprzedać auto szybciej i drożej? Profesjonalna sesja zdjęciowa samochodu na sprzedaż sprawia, że oferta mocno wyróżnia się na tle ogłoszeń ze zdjęciami z telefonu.</p>
            </div>
            <div class="dla-kogo-item">
                <h3>Salony i komisy</h3>
                <p>Stała współpraca, abonament lub zlecenia jednorazowe. Spójny, profesjonalny wygląd oferty na OLX, Otomoto i w social media.</p>
            </div>
            <div class="dla-kogo-item">
                <h3>Detailing i tuning</h3>
                <p>Pokazujesz efekty swojej pracy? Zdjęcia i rolki budują portfolio detailera i przyciągają nowych klientów z Instagrama.</p>
            </div>
            <div class="dla-kogo-item">
                <h3>Pasjonaci i kolekcjonerzy</h3>
                <p>Masz wyjątkowy samochód i chcesz go uwiecznić? Pamiątkowa sesja motoryzacyjna w plenerze Lublina lub okolicach – pamiątka dla Ciebie, nie tylko na sprzedaż.</p>
            </div>
        </div>
    </div>
</section>

<!-- ==============================
     GALERIA – wybrane realizacje
     ============================== -->
<section id="galeria-moto">
    <div class="container">
        <h2 class="section-title">Portfolio motoryzacyjne</h2>
        <p class="section-intro">Wybrane sesje zdjęciowe i realizacje wideo – motoryzacja to moja główna specjalność.</p>

        <div class="galeria-grid">
            <div class="galeria-item duzy">
                <img
                    src="/portfolio/motoryzacja/m8/02.jpg"
                    alt="Sesja zdjęciowa BMW M8 – fotografia motoryzacyjna Lublin"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="530"
                />
                <div class="galeria-overlay"><span>BMW M8</span></div>
            </div>
            <div class="galeria-item">
                <img
                    src="/portfolio/motoryzacja/saab/02.jpg"
                    alt="Sesja zdjęciowa Saab – fotografia samochodowa Lublin"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                />
                <div class="galeria-overlay"><span>SAAB</span></div>
            </div>
            <div class="galeria-item">
                <img
                    src="/portfolio/motoryzacja/subaru/01.jpg"
                    alt="Sesja zdjęciowa Subaru na sprzedaż – fotografia motoryzacyjna"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                />
                <div class="galeria-overlay"><span>SUBARU</span></div>
            </div>
            <div class="galeria-item">
                <img
                    src="/portfolio/motoryzacja/yaris/01.jpg"
                    alt="Toyota Yaris – sesja motoryzacyjna dla dealera Lublin"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                />
                <div class="galeria-overlay"><span>TOYOTA YARIS</span></div>
            </div>
            <div class="galeria-item">
                <img
                    src="/portfolio/motoryzacja/jeep/01.jpg"
                    alt="Sesja zdjęciowa Jeep – fotografia motoryzacyjna w plenerze"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                />
                <div class="galeria-overlay"><span>JEEP</span></div>
            </div>
            <div class="galeria-item">
                <img
                    src="/portfolio/motoryzacja/m6/01.jpg"
                    alt="BMW M6 – profesjonalna fotografia motoryzacyjna Lublin"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                />
                <div class="galeria-overlay"><span>BMW M6</span></div>
            </div>
        </div>

        <div class="galeria-cta">
            <a href="/#portfolio" class="btn btn-outline">Zobacz całe portfolio</a>
        </div>
    </div>
</section>

<InstagramHook />

<!-- ==============================
     PROCES WSPÓŁPRACY
     ============================== -->
<section class="proces-moto">
    <div class="container">
        <h2 class="section-title">Jak wygląda sesja motoryzacyjna?</h2>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3>Kontakt i wycena</h3>
                <p>Opisujesz auto, termin i oczekiwania. Odpowiadam z wyceną w ciągu 24 h.</p>
            </div>
            <div class="connector"></div>
            <div class="step">
                <div class="step-number">2</div>
                <h3>Sesja w terenie</h3>
                <p>Spotykamy się w Lublinie lub okolicach. Sesja trwa 1–2 h. Auto musi być czyste i przygotowane.</p>
            </div>
            <div class="connector"></div>
            <div class="step">
                <div class="step-number">3</div>
                <h3>Gotowe materiały</h3>
                <p>Otrzymujesz gotowe zdjęcia lub rolkę w ciągu 48–72 h. Dostawa przez WeTransfer lub Google Drive.</p>
            </div>
        </div>
    </div>
</section>

<!-- ==============================
     FAQ – Local SEO
     ============================== -->
<section class="faq-moto">
    <div class="container">
        <h2 class="section-title">Często zadawane pytania</h2>
        <div class="faq-lista">
            <details class="faq-item">
                <summary>Gdzie realizujesz sesje motoryzacyjne?</summary>
                <p>Działam przede wszystkim w <strong>Lublinie</strong> i&nbsp;okolicach.</p>
            </details>
            <details class="faq-item">
                <summary>Jak przygotować auto przed sesją?</summary>
                <p>Auto powinno być umyte (najlepiej dzień wcześniej i przetarte mikrofibrą na miejscu), wnętrze posprzątane – bez kabli, uchwytów, butelek. Warto zadbać o szczegóły: czarne opony, proste koło kierownicy przy ujęciach wnętrza.</p>
            </details>
            <details class="faq-item">
                <summary>Ile czasu trwa sesja zdjęciowa samochodu?</summary>
                <p>Standardowa sesja trwa od 1 do 2 godzin, w zależności od liczby zaplanowanych ujęć i warunków oświetleniowych. Sesja pakietowa (foto + wideo) zajmuje 2–3 h.</p>
            </details>
            <details class="faq-item">
                <summary>Kiedy otrzymam gotowe zdjęcia?</summary>
                <p>Gotowe materiały dostarczam w ciągu <strong>48–72 godzin</strong> od sesji. W przypadku pilnych zleceń możliwa jest szybsza realizacja – zapytaj przy wycenie.</p>
            </details>
            <details class="faq-item">
                <summary>Czy można zamówić tylko rolkę bez zdjęć?</summary>
                <p>Tak – oferuję samo nagranie i montaż rolki na Instagram lub TikTok. Jeśli zależy Ci na spójnym contencie, polecam jednak pakiet foto + wideo – wychodzi taniej niż dwa osobne zlecenia.</p>
            </details>
            <details class="faq-item">
                <summary>Czy robisz też sesje samochodowe hobbystycznie, nie tylko na sprzedaż?</summary>
                <p>Oczywiście! Bardzo często realizuję pamiątkowe sesje zdjęciowe samochodów dla pasjonatów i kolekcjonerów. Taka sesja samochodu to świetna pamiątka, np. po skończonym projekcie tuningowym, albo po prostu dobry prezent.</p>
            </details>
        </div>
    </div>
</section>

<!-- ==============================
     CTA końcowe
     ============================== -->
<section class="cta-final">
    <div class="container cta-box">
        <h2>Gotowy na profesjonalne zdjęcia<br>swojego auta w Lublinie?</h2>
        <p>Napisz do mnie – wycena jest bezpłatna i&nbsp;zobowiązuje tylko do rozmowy.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/kontakt" class="btn btn-primary">Zapytaj o wycenę</a>
            <a href="/cennik" class="btn btn-outline" style="border-color: #333; color: #ccc;">Zobacz cennik</a>
        </div>
    </div>
</section>

<Footer />

<style>
    /* ---- HERO ---- */
    .moto-hero {
        position: relative;
        min-height: 90vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        margin-top: -80px;
        padding-top: 80px;
    }

    .moto-hero-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        z-index: 0;
    }

    .moto-hero-bg .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85));
    }

    .moto-hero-content {
        position: relative;
        z-index: 1;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .moto-hero-content h1 {
        font-size: 3.8rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        letter-spacing: -0.03em;
    }

    .subtitle {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #aaa;
        margin-bottom: 1rem;
    }

    .hero-desc {
        font-size: 1.15rem;
        color: #ccc;
        max-width: 580px;
        margin: 0 auto 2rem;
        line-height: 1.7;
    }

    .cta-group {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* ---- USŁUGI ---- */
    #uslugi-moto {
        background-color: #0a0a0a;
    }

    .section-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .section-intro {
        text-align: center;
        color: #888;
        margin-bottom: 3.5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .uslugi-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .usluga-karta {
        background: #111;
        border: 1px solid #1e1e1e;
        border-radius: 12px;
        padding: 2rem;
        transition: border-color 0.3s;
    }

    .usluga-karta:hover {
        border-color: #333;
    }

    .usluga-karta.wyrozn {
        border-color: #333;
        background: #141414;
    }

    .usluga-ikona {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .usluga-karta h3 {
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
        color: #fff;
    }

    .usluga-karta > p {
        font-size: 0.95rem;
        color: #888;
        line-height: 1.7;
        margin-bottom: 1.25rem;
    }

    .cena {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1.25rem;
    }

    .usluga-lista {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .usluga-lista li {
        font-size: 0.9rem;
        color: #666;
        padding-left: 1.25rem;
        position: relative;
    }

    .usluga-lista li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #555;
    }

    .cennik-uwaga {
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.8rem;
        color: #444;
        font-style: italic;
    }

    /* ---- DLA KOGO ---- */
    .dla-kogo {
        background-color: #0f0f0f;
        border-top: 1px solid #1a1a1a;
        border-bottom: 1px solid #1a1a1a;
    }

    .dla-kogo-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .dla-kogo-item {
        padding: 2rem;
        background: #111;
        border-radius: 8px;
        border: 1px solid #1a1a1a;
    }

    .dla-kogo-item h3 {
        font-size: 1.2rem;
        margin-bottom: 0.75rem;
        color: #e0e0e0;
    }

    .dla-kogo-item p {
        font-size: 0.95rem;
        color: #777;
        line-height: 1.7;
    }

    /* ---- GALERIA ---- */
    #galeria-moto {
        background-color: #0a0a0a;
    }

    .galeria-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        gap: 1rem;
    }

    .galeria-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        background: #1a1a1a;
        aspect-ratio: 16/9;
        cursor: pointer;
    }

    .galeria-item.duzy {
        grid-column: span 2;
        grid-row: span 2;
        aspect-ratio: auto;
    }

    .galeria-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        display: block;
    }

    .galeria-item:hover img {
        transform: scale(1.05);
    }

    .galeria-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.65);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .galeria-item:hover .galeria-overlay {
        opacity: 1;
    }

    .galeria-overlay span {
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border: 1px solid rgba(255,255,255,0.3);
        padding: 0.5rem 1.5rem;
        backdrop-filter: blur(4px);
    }

    .galeria-cta {
        text-align: center;
        margin-top: 2.5rem;
    }

    /* ---- PROCES ---- */
    .proces-moto {
        background-color: #0f0f0f;
    }

    .steps {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 900px;
        margin: 0 auto;
    }

    .step {
        flex: 1;
        text-align: center;
        z-index: 2;
        padding: 0 1rem;
    }

    .step-number {
        width: 60px;
        height: 60px;
        background: #1e1e1e;
        border: 2px solid #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem auto;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        transition: all 0.3s ease;
    }

    .step:hover .step-number {
        border-color: #fff;
        background: #252525;
        transform: scale(1.1);
    }

    .step h3 {
        margin-bottom: 0.5rem;
        color: #fff;
    }

    .step p {
        font-size: 0.95rem;
        color: #777;
        line-height: 1.6;
    }

    .connector {
        flex: 1;
        height: 2px;
        background: #222;
        margin-top: 30px;
    }

    /* ---- FAQ ---- */
    .faq-moto {
        background-color: #0a0a0a;
        border-top: 1px solid #1a1a1a;
    }

    .faq-lista {
        max-width: 760px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .faq-item {
        border-bottom: 1px solid #1a1a1a;
        overflow: hidden;
    }

    .faq-item summary {
        padding: 1.5rem 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #e0e0e0;
        cursor: pointer;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: color 0.2s;
    }

    .faq-item summary::after {
        content: '+';
        font-size: 1.5rem;
        color: #555;
        transition: transform 0.3s;
        flex-shrink: 0;
        margin-left: 1rem;
    }

    .faq-item[open] summary::after {
        transform: rotate(45deg);
    }

    .faq-item summary:hover {
        color: #fff;
    }

    .faq-item p {
        padding: 0 0 1.5rem;
        color: #888;
        line-height: 1.75;
        font-size: 0.95rem;
        margin: 0;
    }

    .faq-item p strong {
        color: #ccc;
    }

    /* ---- CTA FINAL ---- */
    .cta-final {
        background-color: #0f0f0f;
        border-top: 1px solid #1a1a1a;
    }

    .cta-box {
        text-align: center;
        max-width: 700px;
    }

    .cta-box h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .cta-box p {
        color: #888;
        margin-bottom: 2rem;
        font-size: 1.05rem;
    }

    /* ---- RESPONSIVE ---- */
    @media (max-width: 1024px) {
        .moto-hero-content h1 {
            font-size: 2.8rem;
        }

        .uslugi-grid {
            grid-template-columns: 1fr;
        }

        .galeria-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .galeria-item.duzy {
            grid-column: span 2;
            grid-row: span 1;
            aspect-ratio: 16/9;
        }
    }

    @media (max-width: 768px) {
        .moto-hero-content h1 {
            font-size: 2.2rem;
        }

        .cta-group {
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto;
        }

        .cta-group .btn {
            width: 100%;
            text-align: center;
        }

        .dla-kogo-grid {
            grid-template-columns: 1fr;
        }

        .galeria-grid {
            grid-template-columns: 1fr;
        }

        .galeria-item.duzy {
            grid-column: span 1;
        }

        .steps {
            flex-direction: column;
            gap: 3rem;
            align-items: center;
        }

        .connector {
            display: none;
        }

        .cta-box h2 {
            font-size: 2rem;
        }

        .section-title {
            font-size: 2rem;
        }
    }
</style>
