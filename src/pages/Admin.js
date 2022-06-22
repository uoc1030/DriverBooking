import { React, useState, useRef, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';
// import CategoryIcon from '@mui/icons-material/Category';
// import ManIcon from '@mui/icons-material/Man';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AllInboxIcon from '@mui/icons-material/AllInbox';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import CloudIcon from '@mui/icons-material/Cloud';


export default function DefaultNavbarAdmin() {

   return (
      <aside className='fixed h-screen w-64 rounded-none' aria-label="Sidebar">
         <div className="overflow-y-auto rounded-none  px-3 bg-red-600 text-white  h-screen  dark:bg-gray-800">
            <div className='text-white ml-16 h-16 tracking-widest pt-3  text font-bold text-3xl'>
               FPT
            </div>
            
            <ul className="space-y-8">

               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Dashboard" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <DashboardIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Dashboard</span>
                  </NavLink>
               </li>
               
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Account" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <PersonIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Account</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Area" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <LocationOnIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Area</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Driver" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <PeopleIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Driver</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Vehicles" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <DriveEtaOutlinedIcon  className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Vehicle</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Employees" className="flex items-center hover:text-black p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <PeopleSharpIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="flex-1 ml-3 whitespace-nowrap">Employee</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Category" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CategorySharpIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Category</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/District" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     < AddLocationAltIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">District</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/Admin/Group" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     < GroupsSharpIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">Group</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/UsersManagement" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CheckCircleIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">TestAu</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink activeStyle={{ backgroundColor: 'rgb(243 244 246)', color: 'black' }} to="/UsersManagement" className="flex hover:text-black items-center p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CloudIcon className="w-6 h-6 text-gray-500 transition -mt-2 duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" />
                     <span className="ml-3">WeatherForecast</span>
                  </NavLink>
               </li>
               
            </ul>
         </div>
      </aside>
   );
}