<footer>
    <div class="container footer-content">
        <div class="brand">
            <h3>Antoni Stec</h3>
            <p>Fotografia i Wideo – Lublin</p>
        </div>
        
        <div class="contacts">
            <a href="tel:+48575554750">Tel: 575 554 750</a>
            <span class="separator hidden-mobile">|</span>
            <a href="mailto:antoni.stec82@gmail.com">Email: antoni.stec82@gmail.com</a>
        </div>

        <div class="socials">
            <a href="https://www.instagram.com/stec.antoni/" target="_blank" rel="noopener noreferrer" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
            </a>
            <span class="separator hidden-mobile">|</span>
            <a href="https://g.page/r/CWlXHOpfOmo2EBM/review" target="_blank" rel="noopener noreferrer" class="highlight">Opinie Google</a>
        </div>

        <div class="copyright">
            <p>&copy; {new Date().getFullYear()} Antoni Stec. Wszelkie prawa zastrzeżone.</p>
            <p class="small">Wyceny indywidualne – odpowiedź mailowa.</p>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #050505;
        padding: 4rem 0 2rem;
        border-top: 1px solid #1a1a1a;
        margin-top: auto;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 2rem;
    }

    .brand h3 {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
    }

    .contacts, .socials {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }

    .contacts a, .socials a {
        color: #aaa;
        text-decoration: none;
        transition: color 0.2s;
        font-size: 1.1rem;
    }

    .contacts a:hover, .socials a:hover {
        color: #fff;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .separator {
        color: #333;
    }

    .highlight {
        color: #eab308 !important; /* Złoty kolor dla gwiazdki i tekstu opinii */
        font-weight: 500;
    }

    .highlight:hover {
        color: #fde047 !important;
    }

    .copyright {
        color: #555;
        font-size: 0.9rem;
    }

    .small {
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }

    @media (max-width: 600px) {
        .hidden-mobile {
            display: none;
        }

        .contacts, .socials {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>