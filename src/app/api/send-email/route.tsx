import {Resend} from 'resend';
import ContactConfirmationEmailTemplate from "../../../../emails/ContactConfirmationEmailTemplate";


const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
    try {
        const {to, firstName, lastName,message, subject} = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [to],
            subject: subject,
            react: <ContactConfirmationEmailTemplate userEmail={to} userFirstname={firstName} userMessage={message}/>,
          });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error: unknown) {
        let errorMessage = "Unbekannter Fehler";

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return Response.json({ error: errorMessage }, { status: 500 });
    }
}
