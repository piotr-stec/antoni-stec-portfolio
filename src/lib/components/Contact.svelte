<script>
    import { onMount } from 'svelte';
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.min.css';
    
    export let id = "kontakt";
    
    let formData = {
        name: '',
        email: '',
        service: 'motoryzacja',
        serviceDetail: '',
        date: '',
        message: ''
    };
    
    // Opcje szczegółowe dla każdego typu usługi
    const serviceDetails = {
        motoryzacja: [
            'Sesja sprzedażowa',
            'Sesja na Instagram/TikTok',
            'Pakiet foto + wideo',
            'Tylko zdjęcia',
            'Tylko wideo',
            'Inne'
        ],
        wnetrza: [
            'Mieszkanie na sprzedaż',
            'Mieszkanie na wynajem',
            'Dom na sprzedaż',
            'Lokal komercyjny',
            'Airbnb',
            'Inne'
        ],
        event: [
            'Otwarcie lokalu',
            'Impreza firmowa',
            'Konferencja',
            'Koncert/wydarzenie kulturalne',
            'Sesja reportażowa',
            'Inne'
        ],
        inne: []
    };
    
    let previousService = formData.service;
    
    // Reactive - resetuj serviceDetail TYLKO gdy zmienia się service
    $: {
        if (formData.service !== previousService) {
            formData.serviceDetail = '';
            previousService = formData.service;
        }
    }
    
    let isSubmitting = false;
    let submitStatus = null; // 'success' | 'error' | null
    let statusMessage = '';
    let dateInput;
    
    onMount(() => {
        // Inicjalizacja flatpickr
        if (dateInput) {
            flatpickr(dateInput, {
                minDate: 'today',
                dateFormat: 'd.m.Y',
                locale: {
                    firstDayOfWeek: 1,
                    weekdays: {
                        shorthand: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
                        longhand: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
                    },
                    months: {
                        shorthand: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
                        longhand: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
                    }
                },
                onChange: function(selectedDates, dateStr) {
                    formData.date = dateStr;
                }
            });
        }
    });
    
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
                    serviceDetail: '',
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
                    <p>antoni.stec82@gmail.com</p>
                </div>
                <div class="info-item">
                    <strong>Telefon</strong>
                    <p><a href="tel:+48575554750" style="color: #ccc; text-decoration: none;">+48 575 554 750</a></p>
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

                {#if serviceDetails[formData.service] && serviceDetails[formData.service].length > 0}
                    <div class="form-group">
                        <label for="serviceDetail">Szczegóły</label>
                        <select 
                            id="serviceDetail"
                            bind:value={formData.serviceDetail}
                            disabled={isSubmitting}
                        >
                            <option value="">Wybierz...</option>
                            {#each serviceDetails[formData.service] as detail}
                                <option value={detail}>{detail}</option>
                            {/each}
                        </select>
                    </div>
                {/if}

                <div class="form-group">
                    <label for="date">Preferowany termin</label>
                    <input 
                        type="text" 
                        id="date"
                        bind:this={dateInput}
                        bind:value={formData.date}
                        placeholder="Wybierz datę"
                        disabled={isSubmitting}
                        readonly
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
    
    /* Flatpickr custom styling - improved readability */
    :global(.flatpickr-calendar) {
        background: #1a1a1a;
        border: 1px solid #444;
        border-radius: 12px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 15px;
    }
    
    :global(.flatpickr-months) {
        background: #1a1a1a;
        padding: 15px 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    :global(.flatpickr-current-month) {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        flex: 1;
        padding: 0 50px;
    }
    
    :global(.flatpickr-month) {
        color: #fff;
        fill: #fff;
    }
    
    :global(.flatpickr-months .flatpickr-prev-month,
    .flatpickr-months .flatpickr-next-month) {
        fill: #fff;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }
    
    :global(.flatpickr-months .flatpickr-prev-month) {
        left: 10px;
    }
    
    :global(.flatpickr-months .flatpickr-next-month) {
        right: 10px;
    }
    
    :global(.flatpickr-months .flatpickr-prev-month svg,
    .flatpickr-months .flatpickr-next-month svg) {
        width: 14px;
        height: 14px;
    }
    
    :global(.flatpickr-months .flatpickr-prev-month:hover,
    .flatpickr-months .flatpickr-next-month:hover) {
        background: #333;
        border-radius: 6px;
    }
    
    :global(.flatpickr-months .flatpickr-prev-month:hover svg,
    .flatpickr-months .flatpickr-next-month:hover svg) {
        fill: #fff;
    }
    
    /* Dropdown miesięcy - lepsze style */
    :global(.flatpickr-monthDropdown-months) {
        background: #1a1a1a !important;
        border: 1px solid #444 !important;
        border-radius: 6px;
    }
    
    :global(.flatpickr-monthDropdown-months option) {
        background: #1a1a1a !important;
        color: #fff !important;
        padding: 8px 12px;
    }
    
    :global(.flatpickr-monthDropdown-months option:hover) {
        background: #2a2a2a !important;
    }
    
    :global(select.flatpickr-monthDropdown-months) {
        background-color: #1a1a1a !important;
        color: #fff !important;
    }
    
    /* Input roku - lepsze style */
    :global(.numInputWrapper) {
        background: transparent !important;
    }
    
    :global(.numInputWrapper:hover) {
        background: rgba(255, 255, 255, 0.05) !important;
    }
    
    :global(input.numInput.cur-year) {
        color: #fff !important;
        font-weight: 600 !important;
        background: transparent !important;
    }
    
    :global(input.numInput.cur-year:hover) {
        background: rgba(255, 255, 255, 0.1) !important;
    }
    
    :global(input.numInput.cur-year:focus) {
        background: rgba(255, 255, 255, 0.1) !important;
    }
    
    :global(.numInputWrapper span.arrowUp) {
        border-bottom-color: #fff !important;
    }
    
    :global(.numInputWrapper span.arrowDown) {
        border-top-color: #fff !important;
    }
    
    :global(.numInputWrapper span.arrowUp:after) {
        border-bottom-color: #fff !important;
    }
    
    :global(.numInputWrapper span.arrowDown:after) {
        border-top-color: #fff !important;
    }
    
    :global(.flatpickr-weekdays) {
        background: #1a1a1a;
        padding: 10px 0;
        margin-bottom: 5px;
    }
    
    :global(.flatpickr-weekday) {
        color: #fff !important;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    :global(span.flatpickr-weekday) {
        color: #fff !important;
    }
    
    :global(.flatpickr-days) {
        background: #1a1a1a;
    }
    
    :global(.flatpickr-day) {
        color: #fff;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 500;
        height: 42px;
        line-height: 42px;
        margin: 2px;
        border: 2px solid transparent;
    }
    
    :global(.flatpickr-day:hover:not(.flatpickr-disabled)) {
        background: #2a2a2a;
        border-color: #444;
        color: #fff;
    }
    
    :global(.flatpickr-day.selected) {
        background: #fff;
        color: #000;
        border-color: #fff;
        font-weight: 600;
    }
    
    :global(.flatpickr-day.selected:hover) {
        background: #fff;
        border-color: #fff;
    }
    
    :global(.flatpickr-day.today) {
        border-color: #888;
        color: #fff;
        background: #2a2a2a;
    }
    
    :global(.flatpickr-day.today:hover) {
        border-color: #aaa;
        background: #333;
    }
    
    :global(.flatpickr-day.disabled,
    .flatpickr-day.prevMonthDay,
    .flatpickr-day.nextMonthDay) {
        color: #555;
    }
    
    :global(.flatpickr-day.disabled:hover) {
        background: transparent;
        border-color: transparent;
        cursor: not-allowed;
    }
    
    :global(.numInputWrapper:hover) {
        background: #2a2a2a;
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