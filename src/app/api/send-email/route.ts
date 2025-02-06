import { Resend } from 'resend';
import {EmailTemplate} from "../../../../emails/EmailTemplate";


const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
    try {
        const { } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'michael-kick@gmx.de',
            to: 'superseppp@web.de',
            subject: 'Hello world',
            text: 'Hello world too'
            // react: EmailTemplate({ firstName, lastName, message }),
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
