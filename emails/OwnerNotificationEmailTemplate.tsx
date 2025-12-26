import {Container, Head, Html, Body, Hr, Preview, Section, Text} from '@react-email/components';
import * as React from 'react';

interface OwnerNotificationEmailProps {
    userFirstname: string;
    userLastname?: string;
    userEmail: string;
    userMessage: string;
    userPhone?: string;
    userCompany?: string;
    subject?: string;
}

export const OwnerNotificationEmailTemplate = ({
                                                    userFirstname,
                                                    userLastname,
                                                    userEmail,
                                                    userMessage,
                                                    userPhone,
                                                    userCompany,
                                                    subject,
                                                }: OwnerNotificationEmailProps) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Preview>New contact form submission from {userFirstname} {userLastname || ''}</Preview>
            <Container style={container}>
                <Text style={heading}>New Contact Form Submission</Text>
                <Text style={paragraph}>
                    You have received a new message from your portfolio website contact form.
                </Text>
                <Hr style={hr}/>

                <Section>
                    <Text style={label}>Name:</Text>
                    <Text style={value}>{userFirstname} {userLastname || ''}</Text>

                    <Text style={label}>Email:</Text>
                    <Text style={value}>{userEmail}</Text>

                    {userPhone && (
                        <>
                            <Text style={label}>Phone:</Text>
                            <Text style={value}>{userPhone}</Text>
                        </>
                    )}

                    {userCompany && (
                        <>
                            <Text style={label}>Company:</Text>
                            <Text style={value}>{userCompany}</Text>
                        </>
                    )}

                    {subject && (
                        <>
                            <Text style={label}>Subject:</Text>
                            <Text style={value}>{subject}</Text>
                        </>
                    )}

                    <Text style={label}>Message:</Text>
                    <Text style={messageBox}>{userMessage}</Text>
                </Section>

                <Hr style={hr}/>
                <Text style={footer}>
                    Reply directly to this email to respond to {userFirstname}.
                </Text>
            </Container>
        </Body>
    </Html>
);

OwnerNotificationEmailTemplate.PreviewProps = {
    userFirstname: 'John',
    userLastname: 'Doe',
    userEmail: 'john@example.com',
    userMessage: 'Hi, I am interested in working together on a project!',
    userPhone: '+1234567890',
    userCompany: 'Acme Corp',
    subject: 'Project Inquiry',
} as OwnerNotificationEmailProps;

export default OwnerNotificationEmailTemplate;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
};

const heading = {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    margin: '20px 0',
    color: '#333333',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#333333',
};

const label = {
    fontSize: '14px',
    fontWeight: 'bold' as const,
    color: '#666666',
    marginTop: '16px',
    marginBottom: '4px',
};

const value = {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333',
    marginTop: '0px',
    marginBottom: '0px',
};

const messageBox = {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '16px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    color: '#333333',
    whiteSpace: 'pre-wrap' as const,
    marginTop: '8px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '20px',
};
