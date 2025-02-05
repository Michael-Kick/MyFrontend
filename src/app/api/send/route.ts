import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/Email/EmailTemplate';



const resend = new Resend();

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'test.dies.das>',
      to: ['superseppp@web.de'],
      subject: 'Hello world',
      react: EmailTemplate({ 
        firstName: 'John',
        lastName: 'hans',
        message:'why hello there' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
