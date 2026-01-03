<script>
    import { fade, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let activeFilter = 'all';
    let selectedItem = null;
    let currentGalleryIndex = 0;

    const portfolioItems = [
        { 
            id: 1, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/m6/01.jpg', 
            alt: 'BMW M6', 
            title: 'BMW M6',
            gallery: [
                '/portfolio/motoryzacja/m6/01.jpg',
                '/portfolio/motoryzacja/m6/02.jpg',
                '/portfolio/motoryzacja/m6/03.jpg',
                '/portfolio/motoryzacja/m6/04.jpg',
            ]
        },
        { 
            id: 2, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/subaru/01.jpg', 
            alt: 'Subaru', 
            title: 'SUBARU',
            gallery: [
                '/portfolio/motoryzacja/subaru/01.jpg',
                '/portfolio/motoryzacja/subaru/02.jpg',
                '/portfolio/motoryzacja/subaru/03.jpg',
                '/portfolio/motoryzacja/subaru/04.jpg',
                '/portfolio/motoryzacja/subaru/05.jpg',
                '/portfolio/motoryzacja/subaru/06.jpg'
            ]
        },
        { 
            id: 3, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/saab/01.jpg', 
            alt: 'Saab', 
            title: 'SAAB',
            gallery: [
                '/portfolio/motoryzacja/saab/01.jpg',
                '/portfolio/motoryzacja/saab/02.jpg',
                '/portfolio/motoryzacja/saab/03.jpg',
                '/portfolio/motoryzacja/saab/04.jpg',
                '/portfolio/motoryzacja/saab/05.jpg',
                '/portfolio/motoryzacja/saab/06.jpg'
            ]
        },
        { 
            id: 4, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/m850i/01.jpg', 
            alt: 'BMW 8', 
            title: 'BMW M850i',
            gallery: [
                '/portfolio/motoryzacja/m850i/01.jpg',
                '/portfolio/motoryzacja/m850i/02.jpg'
            ]
        },
        { 
            id: 5, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/jeep/01.jpg', 
            alt: 'Jeep', 
            title: 'JEEP',
            gallery: [
                '/portfolio/motoryzacja/jeep/01.jpg',
                '/portfolio/motoryzacja/jeep/02.jpg',
                '/portfolio/motoryzacja/jeep/03.jpg',
                '/portfolio/motoryzacja/jeep/04.jpg'
            ]
        },
        { 
            id: 6, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/yaris/01.jpg', 
            alt: 'Yaris', 
            title: 'TOYOTA YARIS',
            gallery: [
                '/portfolio/motoryzacja/yaris/01.jpg',
                '/portfolio/motoryzacja/yaris/02.jpg',
                '/portfolio/motoryzacja/yaris/03.jpg'
            ]
        },
        { 
            id: 7, 
            category: 'auto', 
            src: '/portfolio/motoryzacja/m8/01.jpg', 
            alt: 'BMW M8', 
            title: 'BMW M8',
            gallery: [
                '/portfolio/motoryzacja/m8/01.jpg',
                '/portfolio/motoryzacja/m8/02.jpg',
                '/portfolio/motoryzacja/m8/03.jpg',
                '/portfolio/motoryzacja/m8/04.jpg',
            ]
        },

        { 
            id: 8, 
            category: 'event', 
            src: '/portfolio/eventy/01.jpg', 
            alt: 'Laser', 
            title: 'EVENTY',
            gallery: ['/portfolio/eventy/01.jpg', '/portfolio/eventy/02.jpg']
        },
        { 
            id: 9, 
            category: 'interior', 
            src: '/portfolio/nieruchomosci/01.jpg', 
            alt: 'Wnętrze', 
            title: 'WNĘTRZA',
            gallery: ['/portfolio/nieruchomosci/01.jpg']
        },
        { 
            id: 10, 
            category: 'products', 
            src: '/portfolio/produkty/casualique/green01.jpg', 
            alt: 'Produktowe', 
            title: 'SESJE PRODUKTOWE',
            gallery: [ '/portfolio/produkty/casualique/green01.jpg', '/portfolio/produkty/casualique/green02.jpg','/portfolio/produkty/casualique/green03.jpg']
        },
        { 
            id: 11, 
            category: 'products', 
            src: '/portfolio/produkty/casualique/red02.jpg', 
            alt: 'Produktowe', 
            title: 'SESJE PRODUKTOWE',
            gallery: [ '/portfolio/produkty/casualique/red01.jpg', '/portfolio/produkty/casualique/red02.jpg', '/portfolio/produkty/casualique/red03.jpg' ]
        }
    ];

    $: filteredItems = activeFilter === 'all' 
        ? portfolioItems 
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
                            src={item.src} 
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