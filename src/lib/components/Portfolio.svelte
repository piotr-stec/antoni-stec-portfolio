<script>
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { fade, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let activeFilter = 'featured';
    
    $: {
        if (browser) {
            const queryFilter = $page.url.searchParams.get('filter');
            if (queryFilter && ['featured', 'all', 'auto', 'interior', 'event', 'products'].includes(queryFilter)) {
                activeFilter = queryFilter;
            }
        }
    }

    let selectedItem = null;
    let currentGalleryIndex = 0;

    const portfolioItems = [
        { 
            id: 1, 
            category: 'auto',
            featured: false,
            src: '/portfolio/motoryzacja/m6/01.webp', 
            alt: 'BMW M6 – sesja zdjęciowa samochodu na sprzedaż, fotografia motoryzacyjna Lublin', 
            title: 'BMW M6',
            gallery: [
                '/portfolio/motoryzacja/m6/01.webp',
                '/portfolio/motoryzacja/m6/02.webp',
                '/portfolio/motoryzacja/m6/03.webp',
                '/portfolio/motoryzacja/m6/04.webp',
            ]
        },
        { 
            id: 2, 
            category: 'auto',
            featured: false,
            src: '/portfolio/motoryzacja/subaru/01.webp', 
            alt: 'Subaru – profesjonalna fotografia motoryzacyjna, sesja auta na sprzedaż Lublin', 
            title: 'SUBARU',
            gallery: [
                '/portfolio/motoryzacja/subaru/01.webp',
                '/portfolio/motoryzacja/subaru/02.webp',
                '/portfolio/motoryzacja/subaru/03.webp',
                '/portfolio/motoryzacja/subaru/04.webp',
                '/portfolio/motoryzacja/subaru/05.webp',
                '/portfolio/motoryzacja/subaru/06.webp'
            ]
        },
        { 
            id: 3, 
            category: 'auto',
            featured: true,
            src: '/portfolio/motoryzacja/saab/02.webp', 
            alt: 'Saab – sesja zdjęciowa samochodu, fotografia motoryzacyjna w plenerze Lublin', 
            title: 'SAAB',
            gallery: [
                '/portfolio/motoryzacja/saab/01.webp',
                '/portfolio/motoryzacja/saab/02.webp',
                '/portfolio/motoryzacja/saab/03.webp',
                '/portfolio/motoryzacja/saab/04.webp',
                '/portfolio/motoryzacja/saab/05.webp',
                '/portfolio/motoryzacja/saab/06.webp'
            ]
        },
        { 
            id: 4, 
            category: 'auto',
            featured: false,
            src: '/portfolio/motoryzacja/m850i/01.webp', 
            alt: 'BMW M850i – luksusowa fotografia motoryzacyjna, sesja auta w Lublinie', 
            title: 'BMW M850i',
            gallery: [
                '/portfolio/motoryzacja/m850i/01.webp',
                '/portfolio/motoryzacja/m850i/02.webp'
            ]
        },
        { 
            id: 5, 
            category: 'auto',
            featured: false,
            src: '/portfolio/motoryzacja/jeep/01.webp', 
            alt: 'Jeep – terenowa sesja zdjęciowa samochodu, fotografia motoryzacyjna Lublin', 
            title: 'JEEP',
            gallery: [
                '/portfolio/motoryzacja/jeep/01.webp',
                '/portfolio/motoryzacja/jeep/02.webp',
                '/portfolio/motoryzacja/jeep/03.webp',
                '/portfolio/motoryzacja/jeep/04.webp'
            ]
        },
        { 
            id: 6, 
            category: 'auto',
            featured: true,
            src: '/portfolio/motoryzacja/m8/02.webp', 
            alt: 'BMW M8 – dynamiczna sesja motoryzacyjna dla salonu samochodowego, Lublin', 
            title: 'BMW M8',
            gallery: [
                '/portfolio/motoryzacja/m8/01.webp',
                '/portfolio/motoryzacja/m8/02.webp',
                '/portfolio/motoryzacja/m8/03.webp',
                '/portfolio/motoryzacja/m8/04.webp',
            ]
        },
        { 
            id: 7, 
            category: 'auto',
            featured: true,
            src: '/portfolio/motoryzacja/yaris/01.webp', 
            alt: 'Toyota Yaris – sesja sprzedażowa samochodu, zdjęcia aut na sprzedaż Lublin', 
            title: 'TOYOTA YARIS',
            gallery: [
                '/portfolio/motoryzacja/yaris/01.webp',
                '/portfolio/motoryzacja/yaris/02.webp',
                '/portfolio/motoryzacja/yaris/03.webp'
            ]
        },
        { 
            id: 8, 
            category: 'event',
            featured: false,
            src: '/portfolio/eventy/01.webp', 
            alt: 'Reportaż z eventu – fotografia imprezowa i relacja ze zlotu, Lublin', 
            title: 'EVENTY',
            gallery: ['/portfolio/eventy/01.webp', '/portfolio/eventy/02.webp']
        },
        { 
            id: 9, 
            category: 'interior',
            featured: false,
            src: '/portfolio/nieruchomosci/01.webp', 
            alt: 'Zdjęcia wnętrz nieruchomości na sprzedaż – profesjonalna fotografia mieszkań Lublin', 
            title: 'WNĘTRZA',
            gallery: ['/portfolio/nieruchomosci/01.webp']
        },
        { 
            id: 10, 
            category: 'products',
            featured: true,
            src: '/portfolio/produkty/casualique/bluza001.webp', 
            alt: 'Sesja produktowa bluzy – zdjęcia odzieży na białym tle do sklepu internetowego', 
            title: 'SESJE PRODUKTOWE',
            gallery: [ '/portfolio/produkty/casualique/bluza01.webp', '/portfolio/produkty/casualique/bluza02.webp', '/portfolio/produkty/casualique/bluza03.webp' ]
        },
        { 
            id: 11, 
            category: 'products',
            featured: true,
            src: '/portfolio/produkty/casualique/green01.webp', 
            alt: 'Sesja produktowa zielonej odzieży – fotografia produktów e-commerce', 
            title: 'SESJE PRODUKTOWE',
            gallery: [ '/portfolio/produkty/casualique/green01.webp', '/portfolio/produkty/casualique/green02.webp','/portfolio/produkty/casualique/green03.webp', '/portfolio/produkty/casualique/green04.webp', '/portfolio/produkty/casualique/green05.webp' ]
        },
        { 
            id: 12, 
            category: 'products',
            featured: true,
            src: '/portfolio/produkty/casualique/red02.webp', 
            alt: 'Sesja produktowa czerwonej kolekcji – profesjonalne zdjęcia produktów do sklepu online', 
            title: 'SESJE PRODUKTOWE',
            gallery: [ '/portfolio/produkty/casualique/red01.webp', '/portfolio/produkty/casualique/red02.webp', '/portfolio/produkty/casualique/red03.webp','/portfolio/produkty/casualique/red04.webp', '/portfolio/produkty/casualique/red05.webp'  ]
        },
        { 
            id: 13, 
            category: 'event',
            featured: true,
            src: '/portfolio/eventy/01.webp', 
            alt: 'Relacja fotograficzna z eventu – fotografia imprez i wydarzeń kulturalnych Lublin', 
            title: 'EVENTY',
            gallery: ['/portfolio/eventy/01.webp', '/portfolio/eventy/02.webp', '/portfolio/eventy/03.webp', '/portfolio/eventy/04.webp', '/portfolio/eventy/05.webp', '/portfolio/eventy/06.webp', '/portfolio/eventy/07.webp' , '/portfolio/eventy/08.webp', '/portfolio/eventy/09.webp', '/portfolio/eventy/10.webp' ]
        },
        { 
            id: 14, 
            category: 'event',
            featured: true,
            src: '/portfolio/eventy/02.webp', 
            alt: 'Fotoreportaż z imprezy firmowej – relacja wideo i zdjęciowa Lublin', 
            title: 'EVENTY',
            gallery: ['/portfolio/eventy/01.webp', '/portfolio/eventy/02.webp', '/portfolio/eventy/03.webp', '/portfolio/eventy/04.webp', '/portfolio/eventy/05.webp', '/portfolio/eventy/06.webp', '/portfolio/eventy/07.webp' , '/portfolio/eventy/08.webp', '/portfolio/eventy/09.webp', '/portfolio/eventy/10.webp' ]
        },
        { 
            id: 15, 
            category: 'event',
            featured: true,
            src: '/portfolio/eventy/03.webp', 
            alt: 'Zdjęcia z eventu – reportaż ze zlotu i imprezy, fotografia eventowa Lublin', 
            title: 'EVENTY',
            gallery: ['/portfolio/eventy/01.webp', '/portfolio/eventy/02.webp', '/portfolio/eventy/03.webp', '/portfolio/eventy/04.webp', '/portfolio/eventy/05.webp', '/portfolio/eventy/06.webp', '/portfolio/eventy/07.webp' , '/portfolio/eventy/08.webp', '/portfolio/eventy/09.webp', '/portfolio/eventy/10.webp' ]
        },
        
    ];

    $: filteredItems = activeFilter === 'all' 
        ? portfolioItems 
        : activeFilter === 'featured'
        ? portfolioItems.filter(item => item.featured)
        : portfolioItems.filter(item => item.category === activeFilter);

    function setFilter(filter) {
        activeFilter = filter;
    }

    function openModal(item) {
        selectedItem = item;
        currentGalleryIndex = 0;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        selectedItem = null;
        document.body.style.overflow = 'auto';
    }

    function nextImage(e) {
        if (e) e.stopPropagation();
        if (selectedItem && selectedItem.gallery && selectedItem.gallery.length > 1) {
            currentGalleryIndex = (currentGalleryIndex + 1) % selectedItem.gallery.length;
        }
    }

    function prevImage(e) {
        if (e) e.stopPropagation();
        if (selectedItem && selectedItem.gallery && selectedItem.gallery.length > 1) {
            currentGalleryIndex = (currentGalleryIndex - 1 + selectedItem.gallery.length) % selectedItem.gallery.length;
        }
    }

    // Touch support for modal
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        if (!selectedItem) return;
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextImage();
        }
        if (touchEndX > touchStartX + threshold) {
            prevImage();
        }
    }
</script>

<section id="portfolio">
    <div class="container">
        <h2 class="section-title">Portfolio</h2>
        
        <div class="filters">
            <button class:active={activeFilter === 'featured'} on:click={() => setFilter('featured')}>Wyróżnione</button>
            <button class:active={activeFilter === 'all'} on:click={() => setFilter('all')}>Wszystkie</button>
            <button class:active={activeFilter === 'auto'} on:click={() => setFilter('auto')}>Motoryzacja</button>
            <button class:active={activeFilter === 'interior'} on:click={() => setFilter('interior')}>Nieruchomości</button>
            <button class:active={activeFilter === 'event'} on:click={() => setFilter('event')}>Eventy</button>
            <button class:active={activeFilter === 'products'} on:click={() => setFilter('products')}>Produkty</button>
        </div>

        <div class="gallery">
            {#each filteredItems as item (item.id)}
                <div class="gallery-item" in:scale={{duration: 300, start: 0.95}} animate:flip={{duration: 300}}>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <div class="image-wrapper" on:click={() => openModal(item)}>
                        <img 
                            src={item.src.replace('.webp', '_thumb.webp')} 
                            alt={item.alt} 
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="300"
                        />
                        <div class="overlay">
                            <span class="item-title">{item.title}</span>
                            {#if item.gallery && item.gallery.length > 1}
                                <span class="gallery-count">{item.gallery.length} zdjęć</span>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

{#if selectedItem}
    <div 
        class="modal-backdrop" 
        on:click={closeModal} 
        transition:fade={{duration: 200}}
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
    >
        <div class="modal-content" on:click|stopPropagation>
            {#key currentGalleryIndex}
                <img 
                    src={selectedItem.gallery ? selectedItem.gallery[currentGalleryIndex] : selectedItem.src} 
                    alt={selectedItem.alt} 
                    in:fade={{duration: 200}}
                    decoding="async"
                />
            {/key}
            
            <button class="close-btn" on:click={closeModal}>&times;</button>

            {#if selectedItem.gallery && selectedItem.gallery.length > 1}
                <button class="nav-btn prev" on:click={prevImage}>&#10094;</button>
                <button class="nav-btn next" on:click={nextImage}>&#10095;</button>
                <div class="counter">{currentGalleryIndex + 1} / {selectedItem.gallery.length}</div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .section-title {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }

    .filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    }

    .filters button {
        background: transparent;
        border: 1px solid #333;
        color: #888;
        padding: 0.5rem 1.5rem;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s;
        font-size: 0.9rem;
    }

    .filters button:hover, .filters button.active {
        background: #fff;
        color: #000;
        border-color: #fff;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .gallery-item {
        aspect-ratio: 16/9;
        border-radius: 8px;
        background: #1a1a1a;
        overflow: hidden;
    }

    .image-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        display: block;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        gap: 0.5rem;
    }

    .item-title {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border: 1px solid rgba(255,255,255,0.3);
        padding: 0.5rem 1.5rem;
        backdrop-filter: blur(4px);
    }

    .gallery-count {
        color: #ccc;
        font-size: 0.9rem;
    }

    .image-wrapper:hover .overlay {
        opacity: 1;
    }

    .image-wrapper:hover img {
        transform: scale(1.05);
    }

    /* Modal */
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
    }

    .close-btn {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        padding: 10px;
        z-index: 1001;
    }

    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.5);
        color: white;
        border: none;
        font-size: 2rem;
        padding: 1rem;
        cursor: pointer;
        transition: background 0.3s;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .nav-btn:hover {
        background: rgba(255,255,255,0.2);
    }

    .prev { left: -80px; }
    .next { right: -80px; }

    .counter {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 1rem;
    }
    
    @media (max-width: 768px) {
        .gallery {
            grid-template-columns: 1fr;
        }
        
        .modal-content img {
            max-height: 60vh;
        }

        .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            padding: 0.5rem;
        }

        .prev { left: -20px; }
        .next { right: -20px; }
    }
</style>