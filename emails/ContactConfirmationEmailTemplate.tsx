import {Button, Container, Head, Html, Body, Hr, Preview, Section, Text,} from '@react-email/components';
import * as React from 'react';

interface ContactConfirmationEmailProps {
    userFirstname: string;
    userEmail: string;
    userMessage: string;
}

export const ContactConfirmationEmailTemplate = ({
                                                     userFirstname,
                                                     userEmail,
                                                     userMessage,
                                                 }: ContactConfirmationEmailProps) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Preview>Bestätigung: Deine Nachricht wurde erfolgreich gesendet</Preview>
            <Container style={container}>
                <Text style={heading}>✅ Erfolgreich gesendet!</Text>
                <Text style={paragraph}>Hallo {userFirstname},</Text>
                <Text style={paragraph}>
                    Vielen Dank für deine Nachricht! Wir haben deine Anfrage erhalten und werden uns so bald wie möglich
                    bei
                    dir melden.
                </Text>
                <Text style={paragraph}><strong>Zusammenfassung deiner Nachricht:</strong></Text>
                <Text style={paragraph}>✉ <strong>E-Mail:</strong> {userEmail}</Text>
                <Text style={paragraph}>📝 <strong>Nachricht:</strong></Text>
                <Text style={messageBox}>{userMessage}</Text>
                <Section style={btnContainer}>
                    <Button style={button} href="http://localhost:3000">
                        Zur Website
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Beste Grüße,
                    <br/>
                    Dein Team von [Dein Name oder Firma]
                </Text>
                <Hr style={hr}/>
                <Text style={footer}>[Deine Adresse oder Kontaktinformationen]</Text>
            </Container>
        </Body>
    </Html>
);

ContactConfirmationEmailTemplate.PreviewProps = {
    userFirstname: 'Max',
    userEmail: 'max@example.com',
    userMessage: 'Hallo, ich interessiere mich für eure Dienstleistungen!',
} as ContactConfirmationEmailProps;

export default ContactConfirmationEmailTemplate;

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const heading = {
    fontSize: '22px',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    margin: '20px 0',
    color: '#4CAF50',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const messageBox = {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
};

const btnContainer = {
    textAlign: 'center' as const,
};

const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};
