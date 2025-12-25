import {Resend} from 'resend';
import ContactConfirmationEmailTemplate from "../../../../emails/ContactConfirmationEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: simple in-memory store (use Redis in production for multi-instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return true;
    }

    record.count++;
    return false;
}

// Input validation
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_SUBJECT_LENGTH = 200;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInput(data: { email?: string; firstName?: string; lastName?: string; message?: string; subject?: string }) {
    const errors: string[] = [];

    if (!data.email || typeof data.email !== 'string') {
        errors.push('Email is required');
    } else if (data.email.length > MAX_EMAIL_LENGTH) {
        errors.push('Email is too long');
    } else if (!EMAIL_REGEX.test(data.email)) {
        errors.push('Invalid email format');
    }

    if (!data.firstName || typeof data.firstName !== 'string') {
        errors.push('First name is required');
    } else if (data.firstName.length > MAX_NAME_LENGTH) {
        errors.push('First name is too long');
    }

    if (data.lastName && typeof data.lastName === 'string' && data.lastName.length > MAX_NAME_LENGTH) {
        errors.push('Last name is too long');
    }

    if (!data.message || typeof data.message !== 'string') {
        errors.push('Message is required');
    } else if (data.message.length > MAX_MESSAGE_LENGTH) {
        errors.push('Message is too long');
    }

    if (data.subject && typeof data.subject === 'string' && data.subject.length > MAX_SUBJECT_LENGTH) {
        errors.push('Subject is too long');
    }

    return errors;
}

// Recipient is fixed server-side - never trust client input for this
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@example.com';

export const POST = async (req: Request) => {
    try {
        // Get IP for rate limiting
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                   req.headers.get('x-real-ip') ||
                   'unknown';

        if (isRateLimited(ip)) {
            return Response.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { email, firstName, lastName, message, subject } = body;

        // Validate input
        const validationErrors = validateInput({ email, firstName, lastName, message, subject });
        if (validationErrors.length > 0) {
            return Response.json(
                { error: validationErrors.join(', ') },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: `Contact Form <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
            to: [CONTACT_EMAIL],
            replyTo: email,
            subject: subject || `Contact from ${firstName} ${lastName || ''}`.trim(),
            react: <ContactConfirmationEmailTemplate userEmail={email} userFirstname={firstName} userMessage={message}/>,
        });

        if (error) {
            console.error('Resend error:', error);
            return Response.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error: unknown) {
        console.error('Contact form error:', error);
        return Response.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
