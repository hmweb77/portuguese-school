import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const senderEmail = process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL;
    const senderName = process.env.NEXT_PUBLIC_BREVO_SENDER_NAME;

    if (!BREVO_API_KEY) {
      throw new Error('Brevo API key is not configured');
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: email,
          },
        ],
        subject: 'Your Portuguese Starter Guide is Here! 🇵🇹',
        htmlContent: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Portuguese Starter Guide</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #394D5C; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #3BA9A3 0%, #2D8B85 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Your Portuguese Journey Starts Now! 🎉</h1>
              </div>
              
              <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #E3E5E8; border-top: none; border-radius: 0 0 12px 12px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Olá!</p>
                
                <p style="font-size: 16px; margin-bottom: 20px;">
                  Thank you for downloading our Portuguese Starter Guide! We're excited to help you begin your language learning journey.
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: linear-gradient(135deg, #FF8A5C 0%, #FF7A4C 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px;">
                    Download Your Guide
                  </a>
                </div>
                
                <div style="background: #F5F6F7; padding: 20px; border-radius: 8px; margin: 30px 0;">
                  <h2 style="color: #3BA9A3; margin-top: 0; font-size: 20px;">What's Inside:</h2>
                  <ul style="padding-left: 20px; margin: 15px 0;">
                    <li style="margin-bottom: 10px;">50+ Essential Portuguese phrases</li>
                    <li style="margin-bottom: 10px;">Pronunciation guide with tips</li>
                    <li style="margin-bottom: 10px;">Cultural insights for travelers</li>
                    <li style="margin-bottom: 10px;">Bonus: Common Portuguese mistakes to avoid</li>
                  </ul>
                </div>
                
                <div style="background: #E8F5F4; border-left: 4px solid #3BA9A3; padding: 15px; margin: 30px 0;">
                  <p style="margin: 0; font-size: 14px;">
                    <strong>💡 Pro Tip:</strong> Ready to take your Portuguese to the next level? Our Winter Immersion 2026 program starts January 19th. Enrollment closes January 10th!
                  </p>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="display: inline-block; background: transparent; color: #3BA9A3; padding: 12px 30px; text-decoration: none; border: 2px solid #3BA9A3; border-radius: 50px; font-weight: bold; font-size: 14px;">
                    Learn More About Winter Immersion
                  </a>
                </div>
                
                <p style="font-size: 16px; margin-top: 30px; margin-bottom: 10px;">
                  Happy learning!<br>
                  <strong>The IFLI Team</strong>
                </p>
              </div>
              
              <div style="text-align: center; padding: 20px; color: #6B8299; font-size: 12px;">
                <p>© 2026 IFLI - Instituto de Formação em Língua Portuguesa</p>
                <p>Lisbon, Portugal</p>
                <p style="margin-top: 10px;">
                  <a href="#" style="color: #6B8299; text-decoration: none;">Unsubscribe</a>
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send email');
    }

    // Also add to Brevo contacts list
    await addToBrevoContacts(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending lead magnet email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}

async function addToBrevoContacts(email) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  try {
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Change this to your Brevo list ID
        updateEnabled: true,
        attributes: {
          SOURCE: 'Lead Magnet',
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    });
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    // Don't throw - we still want the email to send even if adding to list fails
  }
}