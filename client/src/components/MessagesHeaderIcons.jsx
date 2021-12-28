import {
  Stack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoMdSearch, IoMdMore } from "react-icons/io";

function MessagesHeaderIcons() {
  return (
    <Stack isInline>
      <IconButton
        icon={<IoMdSearch size={"24px"} />}
        color="gray.100"
        variant="ghost"
        borderRadius="full"
        _hover={{ backgroundColor: "#718096" }}
      />
      <Menu autoSelect={false}>
        <MenuButton borderRadius="full" _hover={{ backgroundColor: "#718096" }}>
          <IconButton
            icon={<IoMdMore size={"24px"} />}
            color="gray.100"
            variant="ghost"
            borderRadius="full"
            _hover={{ backgroundColor: "#718096" }}
          />
        </MenuButton>
        <MenuList bgColor="gray.800" paddingY={1} borderColor="gray">
          <MenuItem
            color="gray.300"
            paddingY={3}
            _hover={{ backgroundColor: "#2d3748" }}
          >
            Contact Info
          </MenuItem>
          <MenuItem
            color="gray.300"
            paddingY={3}
            _hover={{ backgroundColor: "#2d3748" }}
          >
            Close Chat
          </MenuItem>
          <MenuItem
            color="gray.300"
            paddingY={3}
            _hover={{ backgroundColor: "#2d3748" }}
          >
            Delete Chat
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
}

export default MessagesHeaderIcons;
