import React from "react";
import {
  SidebarWrapper,
  CloseSidebar,
  CloseSidebarWrapper,
} from "./../styles/SidebarStyles";

import { CloseRounded } from "@mui/icons-material";

const Sidebar = props => {
  return (
    <SidebarWrapper open={props.open}>
      <CloseSidebarWrapper>
        <CloseSidebar onClick={props.closeSidebar}>
          <CloseRounded />
        </CloseSidebar>
      </CloseSidebarWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
