<section class="ig-hook">
    <div class="container ig-hook-content">
        <div class="ig-ikona">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
        <div class="ig-text">
            <h2>Chcesz zobaczyć więcej?</h2>
            <p>Najświeższe rolki, codzienne relacje z sesji zdjęciowych i mnóstwo motoryzacyjnego contentu ląduje u mnie na Instagramie. Wpadnij zostawić follow!</p>
        </div>
        <a href="https://www.instagram.com/stec.antoni/" target="_blank" rel="noopener noreferrer" class="btn btn-ig">Sprawdź mój Instagram</a>
    </div>
</section>

<style>
    .ig-hook {
        background: linear-gradient(135deg, #181818 0%, #0a0a0a 100%);
        border-top: 1px solid #222;
        border-bottom: 1px solid #222;
        padding: 4rem 0;
    }

    .ig-hook-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        background: #111;
        border: 1px solid #222;
        padding: 3rem;
        border-radius: 16px;
    }

    .ig-ikona {
        color: #e1306c;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(225, 48, 108, 0.1);
        padding: 1.5rem;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .ig-text {
        flex: 1;
    }

    .ig-text h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    .ig-text p {
        font-size: 1.05rem;
        color: #aaa;
        line-height: 1.6;
        margin: 0;
        max-width: 600px;
    }

    .btn-ig {
        background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        color: #fff;
        border: none;
        padding: 1rem 2rem;
        font-weight: 600;
        border-radius: 30px;
        transition: transform 0.3s, filter 0.3s;
        text-decoration: none;
        display: inline-block;
        flex-shrink: 0;
    }

    .btn-ig:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        color: #fff;
    }

    @media (max-width: 900px) {
        .ig-hook-content {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
        }

        .ig-text h2 {
            font-size: 1.75rem;
        }
    }
</style>
