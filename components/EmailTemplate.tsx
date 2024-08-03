import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  
} from "@react-email/components";

interface EmailTemplateProps {
  resort_name: string;
  room_type: string;
  user_name: string;
  user_email: string;
  meal_plan: string;
  transfer: string;
  message: string;
  arrival_date: string;
  departure_date: string;
  
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  resort_name, room_type, user_name, user_email, meal_plan, transfer, message, arrival_date, departure_date
  
}) => (
  <Html>
    <Head />
    <Preview>Booking Request from websiter</Preview>
    <Body style={main}>
      <Container style={container}>
        
        <Heading style={heading}>Booking Request from websiter</Heading>
        <Hr style={hr} />
        <Section>
        <Text style={paragraph}>
                <b>Arrival Date : {arrival_date}</b>
        </Text>
        <Text style={paragraph}>
                <b>Departure Date : {departure_date}</b>
        </Text>

        <Text style={paragraph}>
                <b>Destination : {resort_name}</b>
        </Text>
        <Text style={paragraph}>
                <b>Room Type : {room_type}</b>
        </Text>
        <Text style={paragraph}>
                <b>Meal Plan : {meal_plan}</b>
        </Text>
        <Text style={paragraph}>
                <b>Transfer By : {transfer}</b>
        </Text>
        <Text style={paragraph}>
                <b>From Email : {user_email}</b>
        </Text>
        <Text style={paragraph}>
                <b>Client Name : {user_name}</b>
        </Text>
        <Hr style={hr} />
        
        </Section>
        <Text style={paragraph}>
                <b>Message: </b>
        </Text>
        <Text style={paragraph}>

         {message}
        </Text>
        
        <Hr style={hr} />
        
      </Container>
    </Body>
  </Html>
);

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "1px 4px",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "21px",
  borderRadius: "4px",
  color: "#3c4149",
};