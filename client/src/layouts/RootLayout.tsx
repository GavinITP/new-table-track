import { Box, Container, Icon, IconButton } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

import { useSelector } from "react-redux";
import CrmChatBot from "../components/CrmChatBot";
import { BsFillChatDotsFill } from "react-icons/bs";

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const userId = useSelector((state) => state.global.userId);

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Box position="absolute" top="20%" right="0%">
        {isShow && <CrmChatBot />}
      </Box>

      <IconButton
        position="absolute"
        top="10%"
        right="0%"
        icon={<Icon as={BsFillChatDotsFill} />}
        aria-label={""}
        onClick={() => setIsShow((prev) => !prev)}
      />

      <Box display="flex" minW="100%" minH="100%">
        <Box
          position={sidebarOpen ? "static" : "absolute"}
          left={sidebarOpen ? "0" : "-250px"}
          transition="left 0.1s ease-in-out"
          zIndex={100}
        >
          <Sidebar />
        </Box>
        <Box
          flexGrow={1}
          ml={sidebarOpen ? "250px" : "0"}
          transition="margin 0.3s ease-in-out"
        >
          <Navbar setSidebarOpen={setSidebarOpen} />
          <Container maxW="6xl">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
