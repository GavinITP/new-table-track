import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const AvatarButton = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          boxSize={10}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar size="2xl" name="John Doe" src="https://bit.ly/dan-abramov" />
        </Center>
        <br />
        <Center>
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem fontSize="sm">Your Profile</MenuItem>
        <MenuItem fontSize="sm">Account Settings</MenuItem>
        <MenuDivider />
        <MenuItem fontSize="sm">Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarButton;
