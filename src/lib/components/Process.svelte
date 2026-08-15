<section id="wspolpraca">
    <div class="container">
        <h2 class="section-title">Jak wygląda współpraca?</h2>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3>Zapytanie</h3>
                <p>Wysyłasz do mnie formularz z opisem zlecenia i terminem.</p>
            </div>
            <div class="connector"></div>
            <div class="step">
                <div class="step-number">2</div>
                <h3>Wycena</h3>
                <p>Przygotowuję indywidualną ofertę i przesyłam ją mailowo.</p>
            </div>
            <div class="connector"></div>
            <div class="step">
                <div class="step-number">3</div>
                <h3>Realizacja</h3>
                <p>Spotykamy się na planie, a następnie otrzymujesz gotowe materiały.</p>
            </div>
        </div>
    </div>
</section>

<style>
    #process {
        background-color: #0f0f0f;
    }
    .section-title {
        text-align: center;
        margin-bottom: 4rem;
        font-size: 2.5rem;
    }

    .steps {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 900px;
        margin: 0 auto;
        position: relative;
    }

    .step {
        flex: 1;
        text-align: center;
        z-index: 2;
        padding: 0 1rem;
    }

    .step-number {
        width: 60px;
        height: 60px;
        background: #1e1e1e;
        border: 2px solid #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem auto;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        transition: all 0.3s ease;
    }

    .step:hover .step-number {
        border-color: #fff;
        background: #252525;
        transform: scale(1.1);
    }

    h3 {
        margin-bottom: 0.5rem;
        color: #fff;
    }

    .connector {
        flex: 1;
        height: 2px;
        background: #222;
        margin-top: 30px; /* Half of step-number height */
    }

    @media (max-width: 768px) {
        .steps {
            flex-direction: column;
            gap: 3rem; /* Increased gap */
        }
        .connector {
            display: none;
        }
        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%; /* Ensure full width */
        }
        .step p {
            max-width: 300px; /* Limit text width for readability */
        }
    }
</style>