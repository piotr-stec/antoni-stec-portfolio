<script>
    import { onMount } from 'svelte';
    
    let isMobile = false;
    let videoElement;
    
    onMount(() => {
        // Detect if mobile device
        isMobile = window.innerWidth <= 768;
        
        // Update on resize
        const handleResize = () => {
            isMobile = window.innerWidth <= 768;
        };
        
        window.addEventListener('resize', handleResize);
        
        // Intersection Observer for play/pause control
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (videoElement) {
                        if (entry.isIntersecting) {
                            // Play video when visible
                            const playPromise = videoElement.play();
                            if (playPromise !== undefined) {
                                playPromise.catch(error => {
                                    console.log("Autoplay prevented:", error);
                                });
                            }
                        } else {
                            // Pause video when not visible to save resources
                            videoElement.pause();
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        if (videoElement) {
            observer.observe(videoElement);
        }
        
        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    });
</script>

<section class="backstage">
    <div class="video-container">
        <video 
            bind:this={videoElement}
            autoplay 
            loop 
            muted 
            playsinline
            preload="auto"
            poster="/portfolio/motoryzacja/m6/02.webp"
        >
            <source src={isMobile ? "/backstage_video/mobilna.mp4" : "/backstage_video/desktop.mp4"} type="video/mp4">
        </video>
    </div>

    <div class="overlay"></div>

    <div class="container content">
        <h2>Zobacz jak pracuję</h2>
        <p>Kulisy powstawania materiałów</p>
    </div>
</section>

<style>
    .backstage {
        position: relative;
        height: 90vh; /* Adjust height as needed */
        min-height: 400px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        padding: 0;
    }

    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 2;
    }

    .content {
        position: relative;
        z-index: 3;
        text-align: center;
    }

    h2 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    p {
        font-size: 1.2rem;
        color: #e0e0e0;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    @media (max-width: 768px) {
        .backstage {
            height: 80vh; /* Taller on mobile for vertical video */
        }

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
</style>