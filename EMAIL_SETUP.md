# Konfiguracja formularza kontaktowego z Gmail

## Krok 1: Włącz 2-Step Verification w Google

1. Wejdź na: https://myaccount.google.com/security
2. Znajdź sekcję "2-Step Verification"
3. Włącz weryfikację dwuetapową

## Krok 2: Wygeneruj App Password

1. Wejdź na: https://myaccount.google.com/apppasswords
2. W polu "Select app" wybierz "Mail"
3. W polu "Select device" wybierz "Other" i wpisz "Portfolio Website"
4. Kliknij "Generate"
5. Skopiuj wygenerowane hasło (16 znaków)

## Krok 3: Skonfiguruj zmienne środowiskowe

Utwórz plik `.env` w głównym katalogu projektu:

```env
GOOGLE_EMAIL=twoj.email@gmail.com
GOOGLE_APP_PASSWORD=wygenerowane_app_password
RECIPIENT_EMAIL=kontakt@antek-foto.pl
```

**UWAGA:** Plik `.env` jest w `.gitignore` i nie zostanie przesłany do repozytorium!

## Krok 4: Test lokalny

```bash
npm run dev
```

Wypełnij formularz kontaktowy i wyślij testową wiadomość.

## Krok 5: Deployment

### Vercel/Netlify:
1. Wejdź w ustawienia projektu
2. Znajdź sekcję "Environment Variables"
3. Dodaj zmienne:
   - `GOOGLE_EMAIL`
   - `GOOGLE_APP_PASSWORD`
   - `RECIPIENT_EMAIL`

### Inne platformy:
Skonsultuj dokumentację jak dodać zmienne środowiskowe.

## Troubleshooting

### "Invalid login" lub "Username and Password not accepted"
- Upewnij się, że używasz App Password, nie normalnego hasła
- Sprawdź czy 2-Step Verification jest włączona
- Wygeneruj nowe App Password

### "Connection timeout"
- Sprawdź połączenie internetowe
- Gmail może blokować połączenia z niektórych IP
- Spróbuj użyć innego konta Gmail

### Wiadomości nie docierają
- Sprawdź folder SPAM
- Sprawdź czy `RECIPIENT_EMAIL` jest poprawny
- Sprawdź logi aplikacji (`console.log`)

## Bezpieczeństwo

✅ **Nigdy nie commituj pliku `.env` do repozytorium!**
✅ **Używaj App Password, nie normalnego hasła**
✅ **Ogranicz dostęp do zmiennych środowiskowych**
✅ **Rozważ dodanie rate limiting dla API endpoint**
