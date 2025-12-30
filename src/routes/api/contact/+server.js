import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { GOOGLE_EMAIL, GOOGLE_APP_PASSWORD, RECIPIENT_EMAIL } from '$env/static/private';

export async function POST({ request }) {
	try {
		const { name, email, service, serviceDetail, date, message } = await request.json();

		// Walidacja danych
		if (!name || !email || !message) {
			return json({ error: 'Wszystkie wymagane pola muszą być wypełnione' }, { status: 400 });
		}

		// Konfiguracja transporter dla Gmail
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: GOOGLE_EMAIL,
				pass: GOOGLE_APP_PASSWORD
			}
		});

		// Opcje emaila
		const mailOptions = {
			from: GOOGLE_EMAIL,
			to: RECIPIENT_EMAIL || GOOGLE_EMAIL,
			replyTo: email,
			subject: `Nowe zapytanie z portfolio: ${service}${serviceDetail ? ' - ' + serviceDetail : ''}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #333;">Nowe zapytanie ofertowe</h2>
					
					<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p style="margin: 10px 0;"><strong>Imię:</strong> ${name}</p>
						<p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
						<p style="margin: 10px 0;"><strong>Typ usługi:</strong> ${service}</p>
						${serviceDetail ? `<p style="margin: 10px 0;"><strong>Szczegóły:</strong> ${serviceDetail}</p>` : ''}
						${date ? `<p style="margin: 10px 0;"><strong>Preferowany termin:</strong> ${date}</p>` : ''}
					</div>
					
					<div style="margin: 20px 0;">
						<h3 style="color: #555;">Opis zlecenia:</h3>
						<p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
					</div>
					
					<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
					
					<p style="color: #888; font-size: 12px;">
						Ta wiadomość została wysłana z formularza kontaktowego na antonistec.pl
					</p>
				</div>
			`
		};

		// Wysyłanie emaila
		await transporter.sendMail(mailOptions);

		return json({ success: true, message: 'Wiadomość została wysłana pomyślnie!' });
	} catch (error) {
		console.error('Błąd wysyłania emaila:', error);
		return json(
			{ error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.' },
			{ status: 500 }
		);
	}
}
