<section id="o-mnie" class="about-section">
    <div class="container">
        <h2 class="section-title">O mnie</h2>
        <div class="about-content">
            <div class="text-column">
                <p>
                    Mam 15 lat i od kilku lat pasjonuję się <strong>fotografią oraz produkcją wideo</strong>. 
                    Swoją przygodę z twórczością cyfrową zacząłem w 2024 roku i od tamtej pory 
                    cały czas rozwijam swoje umiejętności, realizując zlecenia komercyjne oraz projekty osobiste.
                </p>
                <p>
                    Z czasem fotografia przerodziła się w coś więcej niż hobby. Zajmuję się również 
                    profesjonalnym filmowaniem, montażem wideo oraz <strong>tworzeniem dynamicznych materiałów na social media</strong> 
                    (Instagram Reels, TikTok). 
                </p>
                <p>
                    Realizuję <em>sesje motoryzacyjne, zdjęcia nieruchomości, relacje z eventów oraz sesje produktowe</em>. 
                    Najbardziej zależy mi na tym, żeby każde zdjęcie i nagranie miało swój unikalny charakter, oddawało 
                    odpowiednie emocje i było po prostu świetnie wykonane technicznie.
                </p>
            </div>
            
            <div class="stats-column">
                <div class="stat-item">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">Zaangażowania w każdy detal</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">24h</span>
                    <span class="stat-label">Sprawny kontakt i wycena</span>
                </div>
            </div>
        </div>
    </div>
    <div class="section-divider"></div>
</section>

<style>
    .about-section {
        padding: 4rem 0 0 0; /* Górny padding bez zmian, dolny wyzerowany bo jest divider */
        background-color: #0a0a0a;
        position: relative;
    }

    .section-title {
        text-align: center;
        margin-bottom: 4rem;
        font-size: 2.5rem;
    }

    .about-content {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        align-items: center;
        max-width: 1100px;
        margin: 0 auto;
        padding-bottom: 4rem;
    }

    @media (min-width: 900px) {
        .about-content {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }
    }

    .text-column {
        flex: 1.2;
        font-size: 1.15rem;
        line-height: 1.8;
        color: #d1d1d1;
    }

    .text-column p {
        margin-bottom: 1.5rem;
    }

    .text-column strong {
        color: #fff;
    }

    .text-column em {
        color: #b0b0b0;
        font-style: italic;
    }

    .stats-column {
        flex: 0.8;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        width: 100%;
        padding-top: 1rem;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border-left: 2px solid #333;
        padding-left: 1.5rem;
        transition: border-color 0.3s ease;
    }

    .stat-item:hover {
        border-left-color: #fff;
    }

    .stat-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: #fff;
        line-height: 1;
    }

    .stat-label {
        font-size: 0.95rem;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .section-divider {
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, transparent);
        margin: 0 auto;
    }
</style>
