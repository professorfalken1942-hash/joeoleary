import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jtolearydesign@gmail.com',
      replyTo: email,
      subject: `New message from ${firstName} ${lastName} via joeoleary.me`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2c2c2c;">
          <h2 style="font-size: 1.4rem; margin-bottom: 1.5rem;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #ccc; padding-left: 1rem; color: #555; margin: 0.5rem 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <hr style="margin: 2rem 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 0.85rem; color: #999;">Sent from joeoleary.me contact form</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message received. Thank you for reaching out!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
