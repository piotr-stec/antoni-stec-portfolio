<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

    let scrolled = false;
    let mobileMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function toggleMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class:scrolled={scrolled} class:menu-open={mobileMenuOpen}>
    <div class="container nav-content">
        <a href="/" class="logo">Antoni Stec</a>
        
        <div class="desktop-menu">
            <a href="/#start">Start</a>
            <a href="/#offer">Oferta</a>
            <a href="/#portfolio">Portfolio</a>
            <a href="/#process">Współpraca</a>
            <a href="/blog">Blog</a>
            <a href="/#contact" class="btn btn-primary btn-sm">Kontakt</a>
        </div>

        <button class="hamburger" on:click={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    {#if mobileMenuOpen}
        <div class="mobile-menu" transition:slide={{duration: 300}}>
            <a href="/#start" on:click={closeMenu}>Start</a>
            <a href="/#offer" on:click={closeMenu}>Oferta</a>
            <a href="/#portfolio" on:click={closeMenu}>Portfolio</a>
            <a href="/#process" on:click={closeMenu}>Współpraca</a>
            <a href="/blog" on:click={closeMenu}>Blog</a>
            <a href="/#contact" on:click={closeMenu}>Kontakt</a>
        </div>
    {/if}
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 1.5rem 0;
        transition: all 0.3s ease;
        background: transparent;
    }

    nav.scrolled, nav.menu-open {
        background: rgba(10, 10, 10, 0.95);
        padding: 1rem 0;
        border-bottom: 1px solid #222;
        backdrop-filter: blur(10px);
    }

    .nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        letter-spacing: -0.02em;
        text-transform: uppercase;
    }

    .desktop-menu {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .desktop-menu a {
        color: #ccc;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.2s;
    }

    .desktop-menu a:hover {
        color: #fff;
    }

    .btn-sm {
        padding: 0.5rem 1.2rem;
        font-size: 0.9rem;
    }

    .hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        flex-direction: column;
        gap: 6px;
        padding: 0.5rem;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 2px;
        background-color: #fff;
        transition: 0.3s;
    }

    .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #0a0a0a;
        border-top: 1px solid #222;
        border-bottom: 1px solid #222;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .mobile-menu a {
        display: block;
        padding: 1rem 2rem;
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid #1a1a1a;
    }

    .mobile-menu a:last-child {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        .desktop-menu {
            display: none;
        }
        .hamburger {
            display: flex;
        }
    }
</style>
