import {
  Stack,
  Tooltip,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoMdMore, IoMdSettings } from "react-icons/io";
import { RiChatNewLine, RiLogoutBoxLine } from "react-icons/ri";

function ChatsTopBarIcons() {
  return (
    <Stack isInline>
      <Tooltip label="New chat">
        <IconButton
          icon={<RiChatNewLine size={"24px"} />}
          color="gray.100"
          variant="ghost"
          borderRadius="full"
          _hover={{ backgroundColor: "#718096" }}
        />
      </Tooltip>
      <Menu autoSelect={false}>
        <Tooltip label="Menu">
          <MenuButton
            borderRadius="full"
            _hover={{ backgroundColor: "#718096" }}
          >
            <IconButton
              icon={<IoMdMore size={"24px"} />}
              color="gray.100"
              variant="ghost"
              borderRadius="full"
              _hover={{ backgroundColor: "#718096" }}
            />
          </MenuButton>
        </Tooltip>
        <MenuList bgColor="gray.800" paddingY={1} borderColor="gray">
          <MenuItem
            icon={<IoMdSettings size={"20px"} />}
            color="gray.300"
            paddingY={3}
            _hover={{ backgroundColor: "#2d3748" }}
          >
            Settings
          </MenuItem>
          <MenuItem
            icon={<RiLogoutBoxLine size={"20px"} />}
            color="gray.300"
            paddingY={3}
            _hover={{ backgroundColor: "#2d3748" }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
}

export default ChatsTopBarIcons;
