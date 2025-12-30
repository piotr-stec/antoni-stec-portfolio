<section class="backstage">
    <div class="video-container">
        <!-- Desktop Video -->
        <video 
            class="desktop-video"
            autoplay 
            loop 
            muted 
            playsinline
            poster="/M4-5534.jpg"
        >
            <source src="/backstage_video/desktop.mp4" type="video/mp4">
        </video>

        <!-- Mobile Video -->
        <video 
            class="mobile-video"
            autoplay 
            loop 
            muted 
            playsinline
            poster="/M4-5534.jpg"
        >
            <source src="/backstage_video/mobilna.mp4" type="video/mp4">
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
        height: 80vh; /* Adjust height as needed */
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

    .desktop-video {
        display: block;
    }

    .mobile-video {
        display: none;
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
        .desktop-video {
            display: none;
        }

        .mobile-video {
            display: block;
        }

        .backstage {
            height: 80vh; /* Taller on mobile for vertical video */
        }

        h2 {
            font-size: 2rem;
        }
    }
</style>