<script>
    import { fade, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let activeFilter = 'all';
    let selectedImage = null;

    const portfolioItems = [
        { id: 1, category: 'auto', src: '/bmw m6 edit-1493.jpg', alt: 'BMW M6' },
        { id: 2, category: 'interior', src: '/wnętrze_toyota.jpg', alt: 'Wnętrze Toyota' },
        { id: 3, category: 'event', src: '/cloud laser-6041.jpg', alt: 'Laser Show' },
        { id: 4, category: 'auto', src: '/M4-5534.jpg', alt: 'BMW M4' },
        { id: 5, category: 'interior', src: '/saab-4835.jpg', alt: 'Saab Detal' },
        { id: 6, category: 'auto', src: '/SUBARU-2611.jpg', alt: 'Subaru' },
        { id: 7, category: 'auto', src: '/Bmw m830i-2837.jpg', alt: 'BMW 8' },
        { id: 8, category: 'event', src: '/cloud laser-5971.jpg', alt: 'Event' }
    ];

    $: filteredItems = activeFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);

    function setFilter(filter) {
        activeFilter = filter;
    }

    function openModal(item) {
        selectedImage = item;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        selectedImage = null;
        document.body.style.overflow = 'auto';
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
        </div>

        <div class="gallery">
            {#each filteredItems as item (item.id)}
                <div class="gallery-item" in:scale={{duration: 300, start: 0.95}} animate:flip={{duration: 300}}>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <img 
                        src={item.src} 
                        alt={item.alt} 
                        loading="lazy"
                        on:click={() => openModal(item)}
                    />
                </div>
            {/each}
        </div>
    </div>
</section>

{#if selectedImage}
    <div class="modal-backdrop" on:click={closeModal} transition:fade={{duration: 200}}>
        <div class="modal-content" on:click|stopPropagation>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button class="close-btn" on:click={closeModal}>&times;</button>
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
        aspect-ratio: 16/9; /* Or 4/3, depending on preference */
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer;
        background: #1a1a1a;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .gallery-item:hover img {
        transform: scale(1.05);
    }

    /* Modal */
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
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
    }
    
    @media (max-width: 768px) {
        .gallery {
            grid-template-columns: 1fr;
        }
        
        .modal-content img {
            max-height: 60vh;
        }
    }
</style>