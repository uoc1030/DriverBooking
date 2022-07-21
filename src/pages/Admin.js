import { React } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import PersonIcon from "@mui/icons-material/Person";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import { Link } from "react-router-dom";
import { UserAuth } from "context/AuthContext";
import Image from "@material-tailwind/react/Image";
import H6 from '@material-tailwind/react/Heading6';

export default function DefaultNavbarAdmin() {
  const { user } = UserAuth();

  return (
    <aside className="fixed h-screen w-64 rounded-none" aria-label="Sidebar">
      <div className="overflow-y-auto rounded-none  px-3 bg-gray-600 text-white  h-screen  dark:bg-gray-800">
        <div className="text-white p-10 text-2xl font-sans rounded-lg">
          <a
            href="/"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="white">Driver Booking</H6>
          </a>
        </div>

        <ul className="space-y-8">
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(243 244 246)",
                color: "black",
              }}
              to="/Admin/Dashboard"
              className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <DashboardIcon
                className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <Dropdown
              color="transparent"
              size="sm"
              buttonType="link"
              className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              buttonText={
                <div>
                  <DriveEtaOutlinedIcon
    
                    className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Application
                  </span>
                </div>
              }
              ripple="light"
            >
              <Link to="/Admin/Driver">
                <DropdownItem color="lightBlue">Driver</DropdownItem>
              </Link>
              <Link to="/Admin/Area">
                <DropdownItem color="lightBlue">Area</DropdownItem>
              </Link>
              <Link to="/Admin/Vehicles">
                <DropdownItem color="lightBlue">Vehicle</DropdownItem>
              </Link>
              <Link to="/Admin/Group">
                <DropdownItem color="lightBlue">Group</DropdownItem>
              </Link>
            </Dropdown>
          </li>

          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(243 244 246)",
                color: "black",
              }}
              to="/Admin/Order"
              className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <GroupsSharpIcon
                className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <span className="ml-3">Order</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(243 244 246)",
                color: "black",
              }}
              to="/Admin/Account"
              className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <PersonIcon
                className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"

                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Account</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(243 244 246)",
                color: "black",
              }}
              to="/Admin/Employees"
              className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <PeopleSharpIcon
                className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Employee</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(243 244 246)",
                color: "black",
              }}
              to="/Admin/Category"
              className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <CategorySharpIcon
                className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <span className="ml-3">Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(243 244 246)",
                color: "black",
              }}
              to="/Admin/District"
              className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <AddLocationAltIcon
                className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <span className="ml-3">District</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-row p-5 w-40 -mt-20 text-white size-10">
        <Image
          className="object-contain h-10 w-10"
          src={user.photoURL}
          alt="User picture"
          raised
          rounded
        />
      </div>
    </aside>
  );
}
