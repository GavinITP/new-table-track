import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdDarkMode, MdLightMode, MdNotifications } from "react-icons/md";
import {
  Container,
  Flex,
  Icon,
  IconButton,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { Input, InputGroup } from "@chakra-ui/react";
import AvatarButton from "./AvatarButton";
import { Dispatch, SetStateAction } from "react";
import { FaMoneyBill } from "react-icons/fa";

const Navbar = ({
  setSidebarOpen,
}: {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Container maxW="full">
        <Flex h="60px" alignItems="center">
          <Flex columnGap={4} w="full">
            <IconButton
              variant="ghost"
              borderRadius="full"
              aria-label="Toggle sidebar"
              icon={<AiOutlineMenu />}
              onClick={() => setSidebarOpen((prev) => !prev)}
            />

            <InputGroup>
              <Input
                variant="filled"
                placeholder="Search..."
                borderRadius="full"
              />
              <InputRightElement>
                <Icon as={AiOutlineSearch} boxSize={6} color="gray.500" />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Spacer />

          <Flex alignItems="center" columnGap={2} ml={4}>
            <IconButton
              variant="ghost"
              borderRadius="full"
              aria-label="Setting"
              onClick={toggleColorMode}
              icon={
                colorMode === "light" ? (
                  <Icon as={MdDarkMode} boxSize="6" />
                ) : (
                  <Icon as={MdLightMode} boxSize="6" />
                )
              }
            />

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Icon as={MdNotifications} boxSize="6" />}
                variant="ghost"
                borderRadius="full"
              />
              <MenuList>
                <MenuItem icon={<Icon as={FaMoneyBill} />}>
                  New Transaction from #64583
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<Icon as={FaMoneyBill} />}>
                  New Transaction from #64582
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<Icon as={FaMoneyBill} />}>
                  New Transaction from #64581
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<Icon as={FaMoneyBill} />}>
                  New Transaction from #64580
                </MenuItem>
              </MenuList>
            </Menu>

            <AvatarButton />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
