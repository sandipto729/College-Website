
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useState } from 'react'
import DashBoard from './DashBoard';
import styles from './Navbar.module.css'
function Navbar(){
const [Dropdown1,setDropdown1]=useState(false);
const [Dropdown2,setDropdown2]=useState(false);
const [Dropdown3,setDropdown3]=useState(false);
const [dashBoard,setDashBoard]=useState(false);
const navigate=useNavigate()
function OpenDropDown1(){
  setDropdown1(true)
}
function OpenDropDown2(){
    setDropdown2(true)
  }
  function OpenDropDown3(){
    setDropdown3(true)
  }
  function OpenDashBoard(){
    setDashBoard(true)
  }
  
    
        return (
          <div className='mb-10 bg-white '>
            <div className='flex flex-col  ml-3 mr-3 mb-5  hidden md:block pb-2 pt-2'>
            <div className=" flex flex-row justify-between ">
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150  font-semibold hover:-translate-y-1 hover:scale-110 p-3  text-lg shadow-md afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>ABOUT US</button>
            <button onClick={()=>setDropdown1(!Dropdown1)}  className=' flex felx-row relative justify-between  hover:opacity-90 transition w-[12%] font-semibold ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3  text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>PROGRAMMES {Dropdown1 && <Dropdown data={[{itemName:"UG" ,link:""},{itemName:"PG" ,link:""},{itemName:"PHD" ,link:""}]} OpenDropDown={OpenDropDown1}/>}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold  text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>HOD</button>
            <button onClick={()=>setDropdown2(!Dropdown2)} className=' flex felx-row relative justify-between  hover:opacity-90 transition w-[12%] font-semibold ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3  text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>PEOPLE {Dropdown2 && <Dropdown data={[{itemName:"Staff" ,link:""},{itemName:"Professor" ,link:"/professor"}]} OpenDropDown={OpenDropDown2}/>}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>RESEARCH</button>
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>PROJECTS</button>
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>FACILITIES</button>
            <button onClick={()=>setDropdown3(!Dropdown3)}  className=' flex felx-row relative justify-between  hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>ACTIVITIES {Dropdown3 && <Dropdown data={[{itemName:"Upcoming Events" ,link:""},{itemName:"Past Events" ,link:""}]} OpenDropDown={OpenDropDown3}/>}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
            </div>

            <div className='flex flex-row justify-begin'>
            <Link to={'/photoGallery'}  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>PHOTO GALLERY</Link>
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>CONTACT US</button>
            <button  className='hover:opacity-90 transition w-[20%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>PLACEMENT & INTERNSHIP</button>
            <button  className='hover:opacity-90 transition w-[12%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  afacad-flux-font1 hover:shadow-lg rounded-lg mr-2 border-1'>ALUMNI SPEAK</button>
            </div>

            </div>
            <div className='block md:hidden ml-2 mt-2  ' onClick={()=>OpenDashBoard()}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[10%] h-[10%] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
            </div>

            {
              dashBoard && <DashBoard/>
            }
          </div>  
    )
}

export default Navbar