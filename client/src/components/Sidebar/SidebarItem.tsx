import { Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  icon: IconType;
  title: string;
  link: string;
}

const SidebarItem = ({ icon, title, link }: Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;

  // console.log(pathname);

  return (
    <NavLink to={link}>
      <ListItem
        cursor="pointer"
        borderRadius="full"
        px={4}
        py={2}
        _hover={{ bgColor: "pink.300" }}
        bgColor={isActive ? "pink.500" : "transparent"}
        color={isActive ? "white" : "inherit"}
      >
        <Flex alignItems="center">
          <ListIcon as={icon} />

          <Text>{title}</Text>
        </Flex>
      </ListItem>
    </NavLink>
  );
};

export default SidebarItem;
