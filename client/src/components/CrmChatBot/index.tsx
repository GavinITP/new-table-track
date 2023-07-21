import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const RestaurantChatbot = () => {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#D53F8C",
    headerFontColor: "#fff",
    headerFontSize: "1.2rem",
    botBubbleColor: "#D53F8C",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    {
      id: "1",
      message: "Welcome to TableTrack CRM! How can I assist you today?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Great! How may I address you?",
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "Thank you, {previousValue}! How can I help you with your CRM?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        {
          value: "customer_info",
          label: "Manage Customer Information",
          trigger: "7",
        },
        { value: "reservations", label: "Manage Reservations", trigger: "8" },
        { value: "feedback", label: "Collect Customer Feedback", trigger: "9" },
        { value: "goodbye", label: "Goodbye", end: true },
      ],
    },
    {
      id: "7",
      message:
        "To manage customer information, you can use a CRM database. Consider using tools like Salesforce, HubSpot, or create a custom solution with a database to store customer details like names, contact info, and preferences.",
      trigger: "6",
    },
    {
      id: "8",
      message:
        "For managing reservations, you can develop a reservation system where customers can book tables online or by phone. Store reservations in a database and use notifications to alert staff about upcoming bookings.",
      trigger: "6",
    },
    {
      id: "9",
      message:
        "Collecting customer feedback is essential. Create feedback forms on your website or use tablet-based surveys at the restaurant. Analyze the feedback to improve your services.",
      trigger: "6",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} recognitionEnable={true} />;
    </ThemeProvider>
  );
};

export default RestaurantChatbot;
