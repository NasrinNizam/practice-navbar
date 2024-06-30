import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBox2 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";


export const Navbar = () => {
  return (
    <>
        <nav>
            <div className="md:hidden">
               <div className="flex justify-between items-center flex-col w-[104px] h-screen py-6 bg-white ">
                  <div className="menu-row flex flex-col gap-[44px] justify-center items-center">
                     <div className="logo-col flex gap-2">
                        <div className="img">
                          <img className="w-[56px] h-[56px]" src="images/avatar.png" alt="logo" />
                        </div>
                     </div>
                <div className="search relative">
                    <CiSearch className="absolute top-1/2 left-4 translate-y-[-50%] text-[#2A2A2E] w-6 h-6" />
                    <input className="w-[56px] h-[56px] text-[#2A2A2E] bg-[#F5F5F5] rounded-2xl" type="text" />
                </div>
                <div className="main-menu">
                    <ul className="flex flex-col gap-[58px]">
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/"><CiHome className="w-6 h-6 text-[#1F1F22]" /></Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/revenue"><HiOutlineChartSquareBar className="w-6 h-6 text-[#1F1F22]" /></Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/notifications"><MdOutlineNotificationsNone className="w-6 h-6 text-[#1F1F22]" /></Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/analytics"><AiOutlinePieChart className="w-6 h-6 text-[#1F1F22]" /></Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/inventory"><BsBox2 className="w-6 h-6 text-[#1F1F22]" /></Link></li>
                    </ul>    
                </div>
            </div>
            <div className="logout w-6 h-6 text-center">
              <Link to="#"><TbLogout className="w-6 h-6" /></Link>
            </div>
          </div>
         </div>
         <div className="hidden md:block">
           <div className="flex justify-between flex-col bg-white w-[266px] p-6 h-screen">
             <div className="menu-row flex flex-col mt-6 gap-[44px]">
                <div className="logo-col flex gap-2">
                    <div className="img">
                        <img className="w-[56px] h-[56px]" src="images/avatar.png" alt="logo" />
                    </div>
                    <div className="logo-text">
                        <h3 className="text-[16px] font-open font-bold">Duck UI</h3>
                        <h6 className="text-[14px] font-normal font-open text-[#1F1F22]">Duckui@demo.com</h6>
                    </div>
                </div>
                <div className="search relative">
                    <CiSearch className="absolute top-1/2 left-4 translate-y-[-50%] text-[#2A2A2E] w-6 h-6" />
                    <input className="w-[218px] h-[56px] leading-[140%] text-[#2A2A2E] bg-[#F5F5F5] rounded-2xl pt-[17px] pr-[16px] pb-[17px] pl-[56px] text-[16px] font-normal font-open" type="text" placeholder="Search..." />
                </div>
                <div className="main-menu">
                    <ul className="flex flex-col gap-[58px]">
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/"><CiHome className="w-6 h-6 text-[#1F1F22]" />Dashboard</Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/revenue"><HiOutlineChartSquareBar className="w-6 h-6 text-[#1F1F22]" />Revenue</Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/notifications"><MdOutlineNotificationsNone className="w-6 h-6 text-[#1F1F22]" />Notifications</Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/analytics"><AiOutlinePieChart className="w-6 h-6 text-[#1F1F22]" />Analytics</Link></li>
                        <li className=" text-[16px] font-normal font-open leading-[140%] "><Link className="flex gap-4" to="/inventory"><BsBox2 className="w-6 h-6 text-[#1F1F22]" />Inventory</Link></li>
                    </ul>    
                </div>
            </div>
            <div className="logout flex">
              <div>
                <Link className="flex gap-4" to="#"><TbLogout className="w-6 h-6" /> Logout</Link>
              </div>
            </div>
           </div>
         </div>
       </nav>
    </>
  )
}
