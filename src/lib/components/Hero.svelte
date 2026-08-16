<script>
    import { onMount, onDestroy } from 'svelte';

    export let scrollToQuote;

    const slides = [
        {
            image: '/banery_karuzela_hero/motoryzacja_desktop.webp',
            mobileImage: '/banery_karuzela_hero/motoryzacja_mobilne.webp', 
            title: 'Motoryzacja',
            subtitle: 'Zdjęcia i filmy, które budzą emocje'
        },
        {
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2560&auto=format&fit=crop',
            mobileImage: '/banery_karuzela_hero/nieruchomosci_mobilne.webp',
            title: 'Nieruchomości',
            subtitle: 'Profesjonalna prezentacja nieruchomości'
        },
        {
            image: '/banery_karuzela_hero/eventy_desktop.webp',
            mobileImage: '/banery_karuzela_hero/eventy_mobilne.webp',
            title: 'Eventy',
            subtitle: 'Chwile warte zapamiętania'
        },
        {
            image: '/banery_karuzela_hero/produktowe_desktop.webp',
            mobileImage: '/banery_karuzela_hero/produktowe_mobilne.webp',
            title: 'Sesje Produktowe',
            subtitle: 'Pokaż swoje produkty w najlepszym świetle'
        }
    ];

    let currentIndex = 0;
    let loadedUpTo = 1; // preload slide 0 + 1 on start
    let track;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let sliderWidth = 0;
    let autoPlayInterval;
    let windowWidth = 0;
    
    $: isMobile = windowWidth <= 768;
    // When currentIndex changes, extend the loaded range to current + 1 (preload next)
    $: loadedUpTo = Math.max(loadedUpTo, currentIndex + 1);


    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (currentIndex < slides.length - 1) {
                currentIndex += 1;
            } else {
                currentIndex = 0;
            }
            setPositionByIndex();
        }, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Touch Events
    function touchStart(index) {
        return function (event) {
            stopAutoPlay();
            isDragging = true;
            startPos = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            // track.style.cursor = 'grabbing';
        };
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        const movedBy = currentTranslate - prevTranslate;

        // Threshold to change slide
        if (movedBy < -100 && currentIndex < slides.length - 1) {
            currentIndex += 1;
        }

        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1;
        }

        setPositionByIndex();
        startAutoPlay();
        // track.style.cursor = 'grab';
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        if (track) {
            track.style.transform = `translateX(${currentTranslate}px)`;
        }
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -sliderWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    function nextSlide() {
        stopAutoPlay();
        if (currentIndex < slides.length - 1) {
            currentIndex += 1;
        } else {
            currentIndex = 0;
        }
        setPositionByIndex();
        startAutoPlay();
    }

    function prevSlide() {
        stopAutoPlay();
        if (currentIndex > 0) {
            currentIndex -= 1;
        } else {
            currentIndex = slides.length - 1;
        }
        setPositionByIndex();
        startAutoPlay();
    }

    function handleResize() {
        if (track) {
            sliderWidth = track.clientWidth; // update width
            setPositionByIndex(); // snap to correct pos
        }
        windowWidth = window.innerWidth;
    }

    onMount(() => {
        if (track) {
            sliderWidth = track.clientWidth;
        }
        
        // Detect mobile
        windowWidth = window.innerWidth;
        
        window.addEventListener('resize', handleResize);
        
        // Prevent context menu on long press
        window.oncontextmenu = function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        };

        startAutoPlay();
    });

    onDestroy(() => {
        stopAutoPlay();
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
    });
</script>

<section class="hero" id="start">
    <div 
        class="slider-track-container"
        on:mousedown={touchStart(currentIndex)}
        on:touchstart={touchStart(currentIndex)}
        on:mouseup={touchEnd}
        on:mouseleave={() => { if(isDragging) touchEnd() }}
        on:touchend={touchEnd}
        on:mousemove={touchMove}
        on:touchmove={touchMove}
    >
        <div 
            class="slider-track" 
            bind:this={track}
            class:grabbing={isDragging}
            class:smooth={!isDragging}
        >
            {#each slides as slide, i}
                <div class="slide">
                    <picture class="hero-bg-picture">
                        <source media="(max-width: 768px)" srcset={slide.mobileImage || slide.image}>
                        <img 
                            src={slide.image} 
                            alt={slide.title} 
                            class="hero-bg-img"
                            fetchpriority={i === 0 ? "high" : "auto"}
                            loading={i === 0 ? "eager" : "lazy"}
                            decoding={i === 0 ? "sync" : "async"}
                        >
                    </picture>
                    <div class="overlay"></div>
                    <!-- Using pointer-events-none on content to prevent text selection during drag -->
                    <div class="container hero-content">
                        <div class="text-content">
                            <p class="subtitle">{slide.subtitle}</p>
                            <h1>{slide.title}</h1>
                            <div class="cta-group">
                                <a href="#oferta" class="btn btn-outline" on:mousedown|stopPropagation on:touchstart|stopPropagation>Oferta</a>
                                <button on:click={scrollToQuote} class="btn btn-primary" on:mousedown|stopPropagation on:touchstart|stopPropagation>Poproś o wycenę</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <button class="nav-arrow prev" on:click={prevSlide} aria-label="Poprzedni slajd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="nav-arrow next" on:click={nextSlide} aria-label="Następny slajd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </button>
    
    <div class="indicators">
        {#each slides as _, i}
            <button 
                class:active={i === currentIndex} 
                on:click={() => { currentIndex = i; setPositionByIndex(); }}
                aria-label="Slide {i + 1}"
            ></button>
        {/each}
    </div>

    <div class="fade-bottom"></div>
</section>

<style>
    .hero {
        position: relative;
        height: 100vh;
        min-height: 600px;
        overflow: hidden;
        padding: 0;
        margin-top: -80px;
    }

    .fade-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background: linear-gradient(to bottom, transparent, #0a0a0a);
        z-index: 10;
        pointer-events: none;
    }

    .slider-track-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: grab;
    }

    .slider-track-container:active {
        cursor: grabbing;
    }

    .slider-track {
        display: flex;
        height: 100%;
        width: 100%;
        /* No transition by default to allow instant drag update */
        will-change: transform;
    }

    .slider-track.smooth {
        transition: transform 0.3s ease-out;
    }

    .slide {
        min-width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        user-select: none;
    }

    .hero-bg-picture, .hero-bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        pointer-events: none;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
        z-index: 1;
        pointer-events: none;
    }

    .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: none; /* Pass clicks through text area mostly, but re-enable for buttons */
    }

    .text-content {
        pointer-events: auto;
    }
    
    /* Re-enable pointer events for buttons specifically */
    .cta-group {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-top: 1rem;
        pointer-events: auto;
    }

    h1 {
        font-size: 5rem;
        line-height: 1;
        margin-bottom: 2rem;
        letter-spacing: -0.03em;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        margin-bottom: 1rem;
        color: #e0e0e0;
        font-weight: 300;
    }

    .nav-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 20;
        transition: all 0.3s;
        backdrop-filter: blur(5px);
    }

    .nav-arrow:hover {
        background: rgba(0, 0, 0, 0.8);
        border-color: white;
        transform: translateY(-50%) scale(1.1);
    }

    .nav-arrow svg {
        width: 24px;
        height: 24px;
    }

    .prev { left: 0.5rem; }
    .next { right: 0.5rem; }

    .indicators {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 1rem;
        z-index: 20;
    }

    .indicators button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid #fff;
        background: transparent;
        cursor: pointer;
        padding: 0;
        transition: all 0.3s;
        opacity: 0.5;
    }

    .indicators button.active {
        background: #fff;
        opacity: 1;
        transform: scale(1.2);
    }

    @media (max-width: 1024px) {
        .hero {
            min-height: 500px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .subtitle {
            font-size: 1rem;
            letter-spacing: 0.15em;
        }

        .cta-group {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        .btn {
            width: 100%;
        }

        .nav-arrow {
            width: 40px;
            height: 40px;
            top: 60%;
        }

        .prev { left: 0.2rem; }
        .next { right: 0.2rem; }
    }
</style>