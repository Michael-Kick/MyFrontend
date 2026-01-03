"use client";
import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import CustomizedInput from "../_components/CustomizedInput";
import CustomizedButton from '../_components/CustomizedButton';

// Note: Metadata export is not supported in client components
// The parent layout.tsx will provide the default metadata


interface InputField {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    onChange: (val: string) => void,
    value?: string;
    error?: string;
    colSpan?: 'full' | 'half';
}

type TurnstileRenderOptions = {
    sitekey: string;
    theme?: 'auto' | 'light' | 'dark';
    callback?: (token: string) => void;
    'expired-callback'?: () => void;
    'error-callback'?: () => void;
};

type TurnstileWidget = {
    render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string;
    remove: (widgetId: string) => void;
    reset: (widgetId: string) => void;
};

declare global {
    interface Window {
        turnstile?: TurnstileWidget;
    }
}

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [topic, setTopic] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [turnstileToken, setTurnstileToken] = useState('');
    const [turnstileError, setTurnstileError] = useState('');
    const [turnstileReady, setTurnstileReady] = useState(false);
    const turnstileWidgetIdRef = useRef<string | null>(null);
    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
    const hasTurnstileConfig = Boolean(turnstileSiteKey);
    const turnstileBypass = process.env.NEXT_PUBLIC_TURNSTILE_BYPASS === 'true';
    const turnstileEnabled = hasTurnstileConfig && !turnstileBypass;

    useEffect(() => {
        if (!turnstileReady || !turnstileEnabled || !window.turnstile || turnstileWidgetIdRef.current) {
            return;
        }

        const container = document.getElementById('turnstile-container');
        if (!container) {
            return;
        }

        const widgetId = window.turnstile.render(container, {
            sitekey: turnstileSiteKey,
            theme: 'auto',
            callback: (token: string) => {
                setTurnstileToken(token);
                setTurnstileError('');
            },
            'expired-callback': () => {
                setTurnstileToken('');
                setTurnstileError('Verification expired. Please try again.');
            },
            'error-callback': () => {
                setTurnstileToken('');
                setTurnstileError('Verification failed. Please try again.');
            },
        });

        turnstileWidgetIdRef.current = widgetId;

        return () => {
            window.turnstile?.remove(widgetId);
            if (turnstileWidgetIdRef.current === widgetId) {
                turnstileWidgetIdRef.current = null;
            }
        };
    }, [turnstileReady, turnstileEnabled, turnstileSiteKey]);

    const resetTurnstile = () => {
        if (turnstileWidgetIdRef.current && window.turnstile) {
            window.turnstile.reset(turnstileWidgetIdRef.current);
        }
        setTurnstileToken('');
    };

    async function submitClicked() {
        let newErrors: { [key: string]: string } = {};
        setTurnstileError('');

        // Validation
        if (!firstName) newErrors.firstName = "First Name is required.";
        if (!lastName) newErrors.lastName = "Last Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!topic) newErrors.topic = "Subject is required.";
        if (!message) newErrors.message = "Message is required.";

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        // If errors exist, update state and return early
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (!turnstileBypass && !hasTurnstileConfig) {
            setTurnstileError('Bot protection is not configured. Please set NEXT_PUBLIC_TURNSTILE_SITE_KEY.');
            return;
        }

        if (!turnstileBypass && !turnstileToken) {
            setTurnstileError('Please complete the verification.');
            return;
        }

        setErrors({}); // Clear errors if validation passes
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    message: message,
                    subject: topic,
                    phone: phoneNumber,
                    company: company,
                    honeypot: honeypot,
                    turnstileToken: turnstileToken,
                })
            });

            const data = await response.json().catch(() => null) as { error?: string; message?: string } | null;

            if (response.ok) {
                setSubmitStatus('success');
                // Clear form fields on success
                setFirstName('');
                setLastName('');
                setCompany('');
                setPhoneNumber('');
                setEmail('');
                setMessage('');
                setTopic('');
                setHoneypot('');
            } else {
                setSubmitStatus('error');
                setErrorMessage(data?.error || data?.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
            if (turnstileEnabled) {
                resetTurnstile();
            }
        }
    }


    const inputFields: InputField[] = [
        {
            id: "firstName",
            label: "First Name*",
            placeholder: "John",
            type: "text",
            onChange: setFirstName,
            value: firstName,
            error: errors.firstName,
            colSpan: "half",
        },
        {
            id: "lastName",
            label: "Last Name*",
            placeholder: "Doe",
            type: "text",
            onChange: setLastName,
            value: lastName,
            error: errors.lastName,
            colSpan: "half",
        },
        {
            id: "company",
            label: "Company",
            placeholder: "Acme Inc.",
            type: "text",
            onChange: setCompany,
            value: company,
            colSpan: "half",
        },
        {
            id: "phoneNumber",
            label: "Phone Number",
            placeholder: "+1 234 567 890",
            type: "tel",
            onChange: setPhoneNumber,
            value: phoneNumber,
            colSpan: "half",
        },
        {
            id: "email",
            label: "Email*",
            placeholder: "john.doe@example.com",
            type: "email",
            onChange: setEmail,
            value: email,
            error: errors.email,
            colSpan: "full",
        },
        {
            id: "topic",
            label: "Subject*",
            placeholder: "New Project Idea",
            type: "text",
            onChange: setTopic,
            value: topic,
            error: errors.topic,
            colSpan: "full",
        },
    ];

    return (
        <div className="w-full space-y-12">
            {turnstileEnabled ? (
                <Script
                    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                    async
                    defer
                    onLoad={() => setTurnstileReady(true)}
                />
            ) : null}
            <section className="relative overflow-hidden rounded-2xl border border-border bg-contrast p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-contrast via-contrast to-background opacity-80" />
                <div className="pointer-events-none absolute -right-24 -top-16 h-56 w-56 rounded-full bg-primary opacity-10 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 -bottom-20 h-56 w-56 rounded-full bg-primary opacity-10 blur-3xl" />
                <div className="relative max-w-3xl space-y-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Contact</p>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold md:text-5xl">Let&apos;s build a clear, reliable product together.</h1>
                        <p className="text-secondary leading-relaxed">
                            Share a bit about your goals, timeline, and the kind of support you need. I will follow up with next steps and ideas.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-secondary">
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Full-stack delivery</span>
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Product UI and UX polish</span>
                        <span className="rounded-full border border-border bg-contrastDark px-3 py-1">Reliable backend services</span>
                    </div>
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-contrast p-6 md:p-8">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background opacity-70" />
                    <div className="relative space-y-6">
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Project brief</p>
                            <h2 className="text-2xl font-semibold">Send a message</h2>
                            <p className="text-sm text-secondary">Fields marked with * are required.</p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="rounded-xl border border-primary bg-contrastDark p-4 text-primary">
                                <p className="font-semibold">Message sent successfully.</p>
                                <p className="text-sm text-secondary">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="rounded-xl border border-danger bg-contrastDark p-4 text-danger">
                                <p className="font-semibold">Failed to send message.</p>
                                <p className="text-sm text-secondary">{errorMessage}</p>
                            </div>
                        )}

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                                <label htmlFor="website">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    value={honeypot}
                                    onChange={(event) => setHoneypot(event.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>
                            {inputFields.map((input) => (
                                <div
                                    key={input.id}
                                    className={input.colSpan === 'full' ? 'md:col-span-2' : undefined}
                                >
                                    <CustomizedInput
                                        labelText={input.label}
                                        placeholder={input.placeholder}
                                        type={input.type}
                                        setValue={input.onChange}
                                        value={input.value}
                                        disabled={isSubmitting}
                                    />
                                    {input.error && <p className="mt-1 text-danger text-sm">{input.error}</p>}
                                </div>
                            ))}
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-text">Message*</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={isSubmitting}
                                    className="block w-full rounded-lg border border-border bg-contrast p-2.5 text-text transition-colors placeholder:text-secondary/80 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Share project context, timelines, and goals..."
                                />
                                {errors.message && <p className="mt-1 text-danger text-sm">{errors.message}</p>}
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <p className="text-sm text-secondary">Verification</p>
                                {turnstileEnabled ? (
                                    <div id="turnstile-container" className="min-h-[65px]" />
                                ) : (
                                    <p className={`text-sm ${turnstileBypass ? 'text-secondary' : 'text-danger'}`}>
                                        {turnstileBypass ? 'Verification is disabled for local testing.' : 'Bot protection is not configured.'}
                                    </p>
                                )}
                                {turnstileError && <p className="mt-1 text-danger text-sm">{turnstileError}</p>}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <p className="text-sm text-secondary">
                                You can include links, references, or constraints to help me respond faster.
                            </p>
                            <CustomizedButton
                                text={isSubmitting ? 'Sending...' : 'Submit'}
                                onClick={submitClicked}
                                disabled={isSubmitting || (!turnstileBypass && !hasTurnstileConfig)}
                            />
                        </div>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="rounded-2xl border border-border bg-contrast p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">What I can help with</p>
                        <ul className="mt-4 space-y-2 list-disc list-inside text-secondary">
                            <li>Product discovery and feature planning.</li>
                            <li>Next.js, React, and TypeScript UI builds.</li>
                            <li>Backend services with clean APIs and data flows.</li>
                            <li>UX polish, accessibility, and performance tuning.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-border bg-contrast p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">How I work</p>
                        <div className="mt-4 space-y-4 text-secondary">
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                <div>
                                    <p className="font-semibold text-text">Clear scope</p>
                                    <p className="text-sm">We align on outcomes, constraints, and success metrics early.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                <div>
                                    <p className="font-semibold text-text">Fast iterations</p>
                                    <p className="text-sm">Small, reliable releases with regular feedback loops.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                <div>
                                    <p className="font-semibold text-text">Solid handoff</p>
                                    <p className="text-sm">Readable code, documentation, and maintainable systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Contact;
