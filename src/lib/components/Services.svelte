<script>
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { slide } from 'svelte/transition';

    const services = [
        {
            category: "Motoryzacja",
            slug: "motoryzacja",
            portfolioFilter: "auto",
            description: "Profesjonalna fotografia motoryzacyjna w Lublinie. Realizuję sesje sprzedażowe samochodów (OLX, Otomoto), pakiety foto+wideo dla salonów oraz dynamiczne rolki (TikTok/IG) dla detailerów i komisów.",
            offers: [
                { title: "Sesja zdjęciowa auta", range: "150 – 250 zł", details: "Ok. 15-20 obrobionych zdjęć, wersje web i print." },
                { title: "Rolka Instagram/TikTok", range: "150 – 180 zł", details: "Dynamiczny montaż, muzyka, color grading, format pionowy." },
                { title: "Pakiet Foto + Wideo", range: "350 – 400 zł", details: "Komplet materiałów z jednego spotkania." }
            ],
            image: "/portfolio/motoryzacja/m8/01.jpg"
        },
        {
            category: "Eventy i Reportaż",
            slug: "eventy",
            portfolioFilter: "event",
            description: "Fotografia eventowa i reportaż w Lublinie. Tworzę profesjonalne relacje z wydarzeń kulturalnych, imprez firmowych, eventów motoryzacyjnych i otwarć lokali, łapiąc unikalne emocje.",
            offers: [
                { title: "Rolka eventowa", range: "250 – 300 zł", details: "Skrót wydarzenia, idealny do promocji w social media." },
                { title: "Reportaż zdjęciowy", range: "120 – 150 zł / h", details: "Selekcja najlepszych ujęć, pełna postprodukcja." }
            ],
            image: "/portfolio/eventy/01.jpg"
        },
        {
            category: "Nieruchomości",
            slug: "nieruchomosci",
            portfolioFilter: "interior",
            description: "Sesje zdjęciowe nieruchomości na sprzedaż i wynajem w Lublinie. Jasne, przestronne kadry w technice HDR, które wyróżnią Twoje ogłoszenie i przyspieszą transakcję.",
            offers: [
                { title: "Sesja mieszkania / lokalu", range: "150 – 200 zł", details: "Szerokie kadry, HDR, usuwanie niedoskonałości." }
            ],
            image: "/portfolio/nieruchomosci/01.jpg"
        },
        {
            category: "Produkty",
            slug: "produkty",
            portfolioFilter: "products",
            description: "Fotografia produktowa e-commerce w Lublinie. Czyste zdjęcia packshotowe na białym tle oraz kreatywne sesje wizerunkowe odzieży, kosmetyków i innych przedmiotów.",
            offers: [
                { title: "Sesja produktu", range: "150 – 200 zł", details: "Zdjęcia w namiocie bezcieniowym." }
            ],
            image: "/portfolio/produkty/casualique/bluza001.jpg"
        }
    ];

    let activeService = 0;

    $: {
        if (browser) {
            const queryOferta = $page.url.searchParams.get('oferta');
            if (queryOferta) {
                const index = services.findIndex(s => s.slug === queryOferta);
                if (index !== -1) {
                    activeService = index;
                }
            }
        }
    }
</script>

<section id="oferta">
    <div class="container">
        <h2 class="section-title">Oferta</h2>
        <p class="section-intro">Elastyczne podejście do każdego projektu. Wybierz obszar, który Cię interesuje.</p>

        <div class="services-wrapper">
            <!-- Sidebar / Tabs -->
            <div class="tabs">
                {#each services as service, i}
                    <button 
                        class="tab-btn" 
                        class:active={activeService === i}
                        on:click={() => activeService = i}
                    >
                        {service.category}
                    </button>
                {/each}
            </div>

            <!-- Content Area -->
            <div class="content-area">
                {#key activeService}
                    <div class="service-detail" in:slide={{duration: 300}}>
                        <div class="service-header">
                            <div class="text">
                                <h3>{services[activeService].category}</h3>
                                <p>{services[activeService].description}</p>
                            </div>
                            <div class="image-wrapper">
                                <img 
                                    src={services[activeService].image} 
                                    alt={services[activeService].category}
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="300"
                                />
                            </div>
                        </div>

                        <div class="pricing-list">
                            {#each services[activeService].offers as offer}
                                <div class="price-item">
                                    <div class="price-header">
                                        <span class="item-title">{offer.title}</span>
                                        <span class="item-price">{offer.range}</span>
                                    </div>
                                    <p class="item-details">{offer.details}</p>
                                </div>
                            {/each}
                        </div>
                        
                        <div class="note" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                            {#if services[activeService].slug === 'motoryzacja'}
                                <a href="/oferta/motoryzacja" class="btn btn-primary" style="background-color: #fff; color: #000;">Sprawdź pełną ofertę motoryzacyjną</a>
                                <a href="/cennik" class="btn btn-outline">Zobacz cennik</a>
                            {:else}
                                <a href="/cennik" class="btn btn-primary">Zobacz pełny cennik</a>
                            {/if}
                            <a href="/?filter={services[activeService].portfolioFilter}#portfolio" class="btn btn-outline">Zobacz portfolio</a>
                        </div>
                    </div>
                {/key}
            </div>
        </div>
    </div>
</section>

<style>
    .section-title {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .section-intro {
        margin-bottom: 4rem;
        max-width: 600px;
        color: #888;
    }

    .services-wrapper {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 4rem;
        min-height: 500px;
    }

    /* Tabs */
    .tabs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-right: 1px solid #222;
        padding-right: 2rem;
    }

    .tab-btn {
        background: none;
        border: none;
        text-align: left;
        color: #666;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        padding: 1rem 0;
        transition: all 0.3s;
        position: relative;
    }

    .tab-btn:hover {
        color: #aaa;
    }

    .tab-btn.active {
        color: #fff;
        padding-left: 1rem;
    }

    .tab-btn.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 100%;
        background-color: #fff;
    }

    /* Content */
    .service-detail {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .service-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: start;
    }

    .service-header h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #fff;
        display: none; /* Hidden on desktop as tabs show context */
    }

    .service-header p {
        font-size: 1.1rem;
        line-height: 1.7;
    }

    .image-wrapper {
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .pricing-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .price-item {
        border-bottom: 1px solid #1a1a1a;
        padding-bottom: 1.5rem;
    }

    .price-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.5rem;
    }

    .item-title {
        font-size: 1.25rem;
        font-weight: 500;
        color: #e0e0e0;
    }

    .item-price {
        font-size: 1.25rem;
        font-weight: 700;
        color: #fff;
    }

    .item-details {
        font-size: 0.95rem;
        color: #888;
        margin: 0;
    }

    .note {
        font-size: 0.8rem;
        color: #555;
        font-style: italic;
    }

    @media (max-width: 1024px) {
        .section-title {
            font-size: 2.5rem;
        }

        .services-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
            min-height: auto;
        }

        .tabs {
            flex-direction: row;
            border-right: none;
            border-bottom: 1px solid #222;
            padding-right: 0;
            padding-bottom: 1rem;
            overflow-x: auto;
            gap: 1.5rem;
            /* Hide scrollbar */
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .tabs::-webkit-scrollbar {
            display: none;
        }
        
        .tab-btn {
            font-size: 1.1rem;
            padding: 0.5rem 0;
            white-space: nowrap;
            flex-shrink: 0;
        }

        .tab-btn.active {
            padding-left: 0;
            color: #fff;
            background: transparent;
            border-bottom: 2px solid #fff;
            border-radius: 0;
        }

        .service-header {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center; /* Center text on mobile */
        }

        .service-header h3 {
            display: block;
            margin-top: 0;
        }

        .image-wrapper {
            margin: 0 auto; /* Center image on mobile */
            max-width: 400px;
        }

        .pricing-list {
            align-items: center; /* Center items in list */
        }

        .price-item {
            width: 100%;
            text-align: center;
        }

        .price-header {
            flex-direction: column;
            gap: 0.25rem;
            align-items: center; /* Center header content */
        }
    }
</style>