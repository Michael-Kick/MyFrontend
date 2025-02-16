import React from 'react';
import {Body, Head, Html} from "@react-email/components";

function Index() {
    return (
        <Html>
            <Head/>
            <Body style={main}>
            </Body>
        </Html>
    );
}

export default Index;


const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};