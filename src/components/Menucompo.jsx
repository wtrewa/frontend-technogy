import { Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import React from "react";

const Menucompo = ({ value }) => {
  return (
    <div>
      <Menu>
        <MenuButton fontWeight="700" _hover={{ textDecor: "underline" }}>
          {value.title}
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>Menu 1</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </div>
  );
};

export default Menucompo;
