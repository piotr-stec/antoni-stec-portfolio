<script>
    export let id = "contact";
    
    let formData = {
        name: '',
        email: '',
        service: 'motoryzacja',
        date: '',
        message: ''
    };
    
    let isSubmitting = false;
    let submitStatus = null; // 'success' | 'error' | null
    let statusMessage = '';
    
    async function handleSubmit() {
        isSubmitting = true;
        submitStatus = null;
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                submitStatus = 'success';
                statusMessage = result.message || 'Wiadomość została wysłana pomyślnie!';
                // Resetowanie formularza
                formData = {
                    name: '',
                    email: '',
                    service: 'motoryzacja',
                    date: '',
                    message: ''
                };
            } else {
                submitStatus = 'error';
                statusMessage = result.error || 'Wystąpił błąd podczas wysyłania wiadomości.';
            }
        } catch (error) {
            submitStatus = 'error';
            statusMessage = 'Nie udało się połączyć z serwerem. Spróbuj ponownie później.';
            console.error('Error:', error);
        } finally {
            isSubmitting = false;
            // Automatyczne ukrycie komunikatu po 5 sekundach
            setTimeout(() => {
                submitStatus = null;
            }, 5000);
        }
    }
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

            <form class="contact-form" on:submit|preventDefault={handleSubmit}>
                {#if submitStatus}
                    <div class="status-message {submitStatus}">
                        {statusMessage}
                    </div>
                {/if}
                
                <div class="form-group">
                    <label for="name">Imię *</label>
                    <input 
                        type="text" 
                        id="name" 
                        bind:value={formData.name}
                        required 
                        placeholder="Twoje imię"
                        disabled={isSubmitting}
                    >
                </div>
                
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input 
                        type="email" 
                        id="email" 
                        bind:value={formData.email}
                        required 
                        placeholder="twoj@email.com"
                        disabled={isSubmitting}
                    >
                </div>

                <div class="form-group">
                    <label for="service">Typ usługi</label>
                    <select 
                        id="service"
                        bind:value={formData.service}
                        disabled={isSubmitting}
                    >
                        <option value="motoryzacja">Sesja Motoryzacyjna</option>
                        <option value="wnetrza">Nieruchomości</option>
                        <option value="event">Event / Wydarzenie</option>
                        <option value="inne">Inne</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="date">Preferowany termin</label>
                    <input 
                        type="text" 
                        id="date"
                        bind:value={formData.date}
                        placeholder="np. Lipiec 2025"
                        disabled={isSubmitting}
                    >
                </div>

                <div class="form-group full-width">
                    <label for="message">Opis zlecenia *</label>
                    <textarea 
                        id="message" 
                        rows="4" 
                        bind:value={formData.message}
                        placeholder="Opisz co chcesz zrealizować..."
                        required
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                <div class="form-actions">
                    <button 
                        type="submit" 
                        class="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                    </button>
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
    
    .form-actions button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .status-message {
        grid-column: 1 / -1;
        padding: 1rem;
        border-radius: 6px;
        text-align: center;
        font-weight: 500;
        animation: slideDown 0.3s ease-out;
    }
    
    .status-message.success {
        background: rgba(34, 197, 94, 0.15);
        border: 1px solid rgba(34, 197, 94, 0.4);
        color: #4ade80;
    }
    
    .status-message.error {
        background: rgba(239, 68, 68, 0.15);
        border: 1px solid rgba(239, 68, 68, 0.4);
        color: #f87171;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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