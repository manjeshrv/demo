import React from "react";
import {
  AdminBarWrapper,
  OpenSidebar,
  AdminProfileButton,
  AdminAvatraMenu,
} from "./../styles/AdminBarStyles";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import adminAvatra from "./../img/admin-avatar.jpg";
import { Link } from "react-router-dom";

const AdminBar = props => {
  return (
    <AdminBarWrapper>
      <OpenSidebar onClick={props.openSidebar}>
        <KeyboardDoubleArrowRightRounded />
      </OpenSidebar>

      <AdminProfileButton>
        <span>
          <img src={adminAvatra} alt="Jessica" />
        </span>
        <p>Jessica</p>
        <AdminAvatraMenu>
          <ul>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </AdminAvatraMenu>
      </AdminProfileButton>
    </AdminBarWrapper>
  );
};

export default AdminBar;
