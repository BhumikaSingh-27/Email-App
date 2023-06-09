import React from "react";
import { NavLink } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <NavLink className="first navlink" to="/">
          <div className="flex-icon">
            <InboxIcon fontSize="large" /> Inbox
          </div>
        </NavLink>
        <NavLink className="navlink" to="/spam">
          <div className="flex-icon">
            {" "}
            <ErrorOutlineIcon fontSize="large" /> Spam
          </div>
        </NavLink>
        <NavLink className="navlink" to="/trash">
          <div className="flex-icon">
            <DeleteIcon fontSize="large" />
            Trash
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
