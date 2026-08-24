<script>
    import { onMount } from 'svelte';

    let visible = false;

    onMount(() => {
        const accepted = localStorage.getItem('cookies_accepted');
        if (!accepted) {
            // Małe opóźnienie żeby nie skakało przy ładowaniu strony
            setTimeout(() => { visible = true; }, 800);
        }
    });

    function accept() {
        localStorage.setItem('cookies_accepted', 'true');
        visible = false;
    }

    function reject() {
        localStorage.setItem('cookies_accepted', 'false');
        visible = false;
    }
</script>

{#if visible}
    <div class="cookie-bar" role="dialog" aria-label="Informacja o plikach cookie">
        <p class="cookie-text">
            Ta strona korzysta z plików cookies w celach analitycznych i statystycznych. 
            <a href="/polityka-prywatnosci" class="cookie-link">Dowiedz się więcej</a>
        </p>
        <div class="cookie-actions">
            <button class="btn-reject" on:click={reject}>Odrzuć</button>
            <button class="btn-accept" on:click={accept}>Akceptuję</button>
        </div>
    </div>
{/if}

<style>
    .cookie-bar {
        position: fixed;
        bottom: 1.5rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        background: #111;
        border: 1px solid #222;
        border-radius: 8px;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        width: calc(100% - 4rem);
        max-width: 780px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(calc(100% + 1.5rem)); opacity: 0; }
        to   { transform: translateX(-50%) translateY(0);                   opacity: 1; }
    }

    .cookie-text {
        color: #888;
        font-size: 0.9rem;
        line-height: 1.5;
        margin: 0;
    }

    .cookie-link {
        color: #aaa;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: color 0.2s;
    }

    .cookie-link:hover {
        color: #fff;
    }

    .cookie-actions {
        display: flex;
        gap: 0.75rem;
        flex-shrink: 0;
    }

    .btn-accept,
    .btn-reject {
        padding: 0.5rem 1.25rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid transparent;
    }

    .btn-accept {
        background: #fff;
        color: #000;
        border-color: #fff;
    }

    .btn-accept:hover {
        background: #d4d4d4;
        border-color: #d4d4d4;
    }

    .btn-reject {
        background: transparent;
        color: #666;
        border-color: #333;
    }

    .btn-reject:hover {
        color: #aaa;
        border-color: #555;
    }

    @media (max-width: 600px) {
        .cookie-bar {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem 1.5rem;
            gap: 1rem;
        }

        .cookie-actions {
            width: 100%;
        }

        .btn-accept,
        .btn-reject {
            flex: 1;
            text-align: center;
        }
    }
</style>
