import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
// import Dropdown from "@material-tailwind/react/Dropdown";
// import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Button from "@material-tailwind/react/Button";
import { UserAuth } from "../context/AuthContext";

export default function DefaultNavbar() {
  const { user, logOut } = UserAuth();

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a
            href="/"
            rel="noreferrer"
          >
            <NavbarBrand>Driver Booking</NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              {/* <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="description" size="2xl" />
                                &nbsp;Docs
                            </NavLink> */}
              <NavLink href="/" rel="noreferrer" ripple="light">
                <Icon name="apps" size="2xl" />
                &nbsp;Home Page
              </NavLink>
              <NavLink href="/profile" rel="noreferrer" ripple="light">
                <Icon family="font-awesome" name="fab fa-github" size="xl" />
                &nbsp;Profile
              </NavLink>
              <NavLink href="/admin" rel="noreferrer" ripple="light">
                <AssignmentIndIcon family="font-awesome" size="xl" />
                &nbsp;Admin
              </NavLink>
              <NavLink href="/register" rel="noreferrer" ripple="light">
                Register
              </NavLink>
              {user?.displayName ? (
                <Button
                  onClick={handleLogOut}
                    color="transparent"
                    className="bg-white text-black ml-4"
                    ripple="dark"
                  >Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    color="transparent"
                    className="bg-white text-black ml-4"
                    ripple="dark"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
