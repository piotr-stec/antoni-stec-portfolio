<script>
    export let id = "contact";
</script>

<section {id} class="contact-section">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2 class="section-title">Poproś o wycenę</h2>
                <p>Opisz krótko, czego potrzebujesz. Odpiszę najszybciej jak to możliwe z wstępną wyceną lub pytaniami doprecyzowującymi.</p>
                
                <div class="info-item">
                    <strong>Email</strong>
                    <p>kontakt@antek-foto.pl</p>
                </div>
                <div class="info-item">
                    <strong>Instagram</strong>
                    <p><a href="https://www.instagram.com/stec.antoni/" target="_blank" rel="noopener noreferrer" style="color: #ccc; text-decoration: none;">@stec.antoni</a></p>
                </div>
            </div>

            <form class="contact-form" on:submit|preventDefault={() => alert('Dziękuję! To tylko wersja demo, więc wiadomość nie została wysłana.')}>
                <div class="form-group">
                    <label for="name">Imię</label>
                    <input type="text" id="name" required placeholder="Twoje imię">
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required placeholder="twoj@email.com">
                </div>

                <div class="form-group">
                    <label for="service">Typ usługi</label>
                    <select id="service">
                        <option value="motoryzacja">Sesja Motoryzacyjna</option>
                        <option value="wnetrza">Nieruchomości</option>
                        <option value="event">Event / Wydarzenie</option>
                        <option value="inne">Inne</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="date">Preferowany termin</label>
                    <input type="text" id="date" placeholder="np. Lipiec 2025">
                </div>

                <div class="form-group full-width">
                    <label for="message">Opis zlecenia</label>
                    <textarea id="message" rows="4" placeholder="Opisz co chcesz zrealizować..."></textarea>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Wyślij zapytanie</button>
                </div>
            </form>
        </div>
    </div>
</section>

<style>
    .contact-section {
        background-color: #111;
        border-top: 1px solid #1a1a1a;
    }

    .contact-wrapper {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
    }

    .section-title {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    .contact-info p {
        margin-bottom: 2rem;
    }

    .info-item {
        margin-bottom: 1.5rem;
    }
    
    .info-item strong {
        color: #fff;
        display: block;
        margin-bottom: 0.25rem;
    }

    .contact-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        background: #1a1a1a;
        padding: 2rem;
        border-radius: 12px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .full-width {
        grid-column: 1 / -1;
    }

    label {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #aaa;
    }

    input, select, textarea {
        background: #0a0a0a;
        border: 1px solid #333;
        padding: 0.8rem;
        border-radius: 6px;
        color: #fff;
        font-family: inherit;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
    }

    input:focus, select:focus, textarea:focus {
        border-color: #fff;
    }

    .form-actions {
        grid-column: 1 / -1;
    }

    .form-actions button {
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .section-title {
            font-size: 2rem;
        }
        
        .contact-form {
            grid-template-columns: 1fr;
            padding: 1.5rem;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
            font-size: 16px; /* Prevents iOS zoom */
        }
    }
</style>