<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let scrollToQuote;

    const slides = [
        {
            image: '/SUBARU-2611.jpg',
            title: 'Motoryzacja',
            subtitle: 'Zdjęcia i filmy, które budzą emocje'
        },
        {
            image: '/wnętrze_toyota.jpg',
            title: 'Wnętrza',
            subtitle: 'Profesjonalna prezentacja nieruchomości'
        },
        {
            image: '/cloud laser-5971.jpg',
            title: 'Eventy',
            subtitle: 'Chwile warte zapamiętania'
        }
    ];

    let currentSlide = 0;
    const duration = 5000;
    let interval;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        resetInterval();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        resetInterval();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, duration);
    }

    onMount(() => {
        interval = setInterval(nextSlide, duration);
        return () => clearInterval(interval);
    });
</script>

<section class="hero" id="start">
    {#each slides as slide, i}
        {#if i === currentSlide}
            <div class="hero-bg" style="background-image: url('{slide.image}')" transition:fade={{duration: 1000}}></div>
        {/if}
    {/each}
    
    <div class="overlay"></div>

    <div class="container hero-content">
        {#key currentSlide}
            <div in:fade={{duration: 600, delay: 200}} class="text-content">
                <p class="subtitle">{slides[currentSlide].subtitle}</p>
                <h1>{slides[currentSlide].title}</h1>
                <div class="cta-group">
                    <a href="#offer" class="btn btn-outline">Oferta</a>
                    <button on:click={scrollToQuote} class="btn btn-primary">Poproś o wycenę</button>
                </div>
            </div>
        {/key}
        
        <div class="indicators">
            {#each slides as _, i}
                <button 
                    class:active={i === currentSlide} 
                    on:click={() => currentSlide = i}
                    aria-label="Slide {i + 1}"
                ></button>
            {/each}
        </div>
    </div>

    <button class="nav-arrow prev" on:click={prevSlide} aria-label="Poprzedni slajd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="nav-arrow next" on:click={nextSlide} aria-label="Następny slajd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </button>
</section>

<style>
    .hero {
        position: relative;
        height: 100vh;
        min-height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 0;
        margin-top: -80px; /* Counteract navbar height to go full screen */
    }

    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        z-index: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
        z-index: 2;
    }

    .hero-content {
        position: relative;
        z-index: 3;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .cta-group {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-top: 1rem;
    }

    .nav-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5); /* Darker background */
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 20; /* Higher z-index */
        transition: all 0.3s;
        backdrop-filter: blur(5px);
    }

    .nav-arrow:hover {
        background: rgba(0, 0, 0, 0.8);
        border-color: white;
        transform: translateY(-50%) scale(1.1); /* Slight scale on hover */
    }

    .nav-arrow svg {
        width: 24px;
        height: 24px;
    }

    .prev { left: 2rem; }
    .next { right: 2rem; }

    .indicators {
        position: absolute;
        bottom: 2rem;
        display: flex;
        gap: 1rem;
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
            min-height: 500px; /* Reduced min-height for mobile */
        }

        h1 {
            font-size: 3rem; /* Smaller font on mobile */
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
        }

        .btn {
            width: 100%;
        }

        .nav-arrow {
            width: 40px; /* Smaller arrows */
            height: 40px;
        }

        .prev { left: 1rem; }
        .next { right: 1rem; }
    }
</style>