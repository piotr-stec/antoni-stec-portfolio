<script>
    import { slide } from 'svelte/transition';

    const services = [
        {
            category: "Motoryzacja",
            description: "Kompleksowa obsługa wizualna dla pasjonatów i dealerów. Podkreślam charakter każdego pojazdu.",
            offers: [
                { title: "Sesja zdjęciowa auta", range: "150 – 250 zł", details: "Ok. 15-20 obrobionych zdjęć, wersje web i print." },
                { title: "Rolka Instagram/TikTok", range: "150 – 180 zł", details: "Dynamiczny montaż, muzyka, color grading, format pionowy." },
                { title: "Pakiet Foto + Wideo", range: "350 – 400 zł", details: "Komplet materiałów z jednego spotkania." }
            ],
            image: "/Bmw m830i-2694.jpg"
        },
        {
            category: "Eventy i Reportaż",
            description: "Dyskretna relacja z wydarzeń, otwarć lokali czy imprez firmowych. Łapię emocje i atmosferę.",
            offers: [
                { title: "Rolka eventowa", range: "250 – 300 zł", details: "Skrót wydarzenia, idealny do promocji w social media." },
                { title: "Reportaż zdjęciowy", range: "120 – 150 zł / h", details: "Selekcja najlepszych ujęć, pełna postprodukcja." }
            ],
            image: "/cloud laser-6041.jpg"
        },
        {
            category: "Nieruchomości",
            description: "Profesjonalne zdjęcia wnętrz na potrzeby sprzedaży lub wynajmu. Zwiększ atrakcyjność oferty.",
            offers: [
                { title: "Sesja mieszkania / lokalu", range: "150 – 200 zł", details: "Szerokie kadry, HDR, usuwanie niedoskonałości." }
            ],
            image: "/wnętrze_toyota.jpg"
        }
    ];

    let activeService = 0;
</script>

<section id="offer">
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
                                <img src={services[activeService].image} alt={services[activeService].category} />
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
                        
                        <div class="note">
                            * Podane ceny są orientacyjne (netto) i mogą się różnić w zależności od lokalizacji i specyfiki zlecenia.
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
        }

        .service-header h3 {
            display: block;
            margin-top: 0;
        }

        .price-header {
            flex-direction: column;
            gap: 0.25rem;
        }
    }
</style>