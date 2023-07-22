import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const CrmChatbot = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Welcome to TableTrack services. How can i help you?",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              { value: 1, label: "Data searching", trigger: "4" },
              { value: 2, label: "Data visualization", trigger: "3" },
              { value: 3, label: "Data analytic", trigger: "3" },
            ],
          },
          {
            id: "3",
            message: "Wrong answer, try again.",
            trigger: "2",
          },
          {
            id: "4",
            message: "Awesome! You are a telepath!",
            end: true,
          },
        ]}
        recognitionEnable={true}
      />
    </ThemeProvider>
  );
};

export default CrmChatbot;
