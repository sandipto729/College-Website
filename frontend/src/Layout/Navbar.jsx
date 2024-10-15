
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useState } from 'react'
import DashBoard from './DashBoard';
import styles from './Navbar.module.css'
function Navbar() {
  const [Dropdown1, setDropdown1] = useState(false);
  const [Dropdown2, setDropdown2] = useState(false);
  const [Dropdown3, setDropdown3] = useState(false);
  const [dashBoard, setDashBoard] = useState(false);
  const navigate = useNavigate()
  function OpenDropDown1() {
    setDropdown1(true)
  }
  function OpenDropDown2() {
    setDropdown2(true)
  }
  function OpenDropDown3() {
    setDropdown3(true)
  }
  function OpenDashBoard() {
    setDashBoard(!dashBoard)
  }


  return ( 
    <div className={styles.container}>
          <div className={styles.navGrid1}>
          <button className={styles.GridEle1}>ABOUT US</button>
          <button onClick={() => setDropdown1(!Dropdown1)} style={{width:'full' , display:'flex' , flexDirection:'column' ,justifyContent:'space-between',alignItems:'center' }} onMouseLeave={() => setDropdown1(false)} className={styles.GridEle1}><span className='flex flex-row w-full   justify-between mt-1 ml-1'>PROGRAMMES<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span>{Dropdown1 && <Dropdown  data={[{ itemName: "UG", link: "" }, { itemName: "PG", link: "" }, { itemName: "PHD", link: "" }]} OpenDropDown={OpenDropDown1} />}</button>
          <Link to={'/professor/hod'} className={styles.GridEle1}>HOD</Link>
          <button onClick={() => setDropdown2(!Dropdown2)} style={{width:'full' ,display:'flex' , flexDirection:'column' ,justifyContent:'space-between' }} onMouseLeave={() => setDropdown2(false)} className={styles.GridEle1}><span className='flex flex-row w-full  justify-between mt-1 ml-1'>PEOPLE<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span>{Dropdown2 && <Dropdown  data={[{ itemName: "Staff", link: "" }, { itemName: "Professor", link: "/professor" }]} OpenDropDown={OpenDropDown2} />}</button>
          <button className={styles.GridEle1}>RESEARCH</button>
          <button className={styles.GridEle1}>PROJECTS</button>
          <button className={styles.GridEle1}>FACILITIES</button>
          <button onClick={() => setDropdown3(!Dropdown3)} style={{display:'flex' , flexDirection:'column',justifyContent:'space-between'}} onMouseLeave={() => setDropdown3(false)}  className={styles.GridEle1}><span className='flex flex-row w-full  justify-between mt-1 ml-1'><p>ACTIVITIES</p> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span>{Dropdown3 && <Dropdown data={[{ itemName: "Upcoming Events", link: "" }, { itemName: "Past Events", link: "" }]} OpenDropDown={OpenDropDown3} />}</button>
          <Link to={'/photoGallery'} className={styles.GridEle1}>PHOTO GALLERY</Link>
          <Link to={'/contactus'} className={styles.GridEle1}>CONTACT US</Link>
          <button className={styles.GridEle1}>PLACEMENT & INTERNSHIP</button>
          <button className={styles.GridEle1}>ALUMNI SPEAK</button>
   


          </div>

          <div className={"block md:hidden ml-2 mt-2 w-[50vh] p-4 "} >
            <svg onClick={() => OpenDashBoard()} xmlns="http://www.w3.org/2000/svg" className='w-[15%] h-[15%] ease-in-out hover:-translate-y-1 hover:scale-110' height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" /></svg>
            {
            dashBoard && <DashBoard  DashBoard={dashBoard}/>
          }
          </div>
          </div>
  )
}

export default Navbar

// {import { Link, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import DashBoard from './DashBoard';
// import styles from './Navbar.module.css'

// function Navbar() {
// const [Dropdown1, setDropdown1] = useState(false);
// const [Dropdown2, setDropdown2] = useState(false);
// const [Dropdown3, setDropdown3] = useState(false);
// const [dashBoard, setDashBoard] = useState(false);

// function OpenDashBoard() {
//   setDashBoard(true);
// }

// return (
//   <div className='mb-10 bg-white'>
//     <div className='flex flex-col ml-3 mr-3 mb-5 hidden md:block pb-2 pt-2'>
//       <div className={styles.navGrid}>
//         <button className={styles.GridEle}>ABOUT US</button>

//         <div 
//           className={styles.dropdownWrapper} 
//           onClick={() => setDropdown1(!Dropdown1)} onMouseLeave={() => setDropdown1(false)}
//         >
//           <button 
//             onClick={() => setDropdown1(!Dropdown1)} 
//             className={styles.GridEle2}>
//             PROGRAMMES
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
//               <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
//             </svg>
//           </button>
//           {Dropdown1 && (
//             <ul className={styles.dropdownContent}>
//               <li><Link to="">UG</Link></li>
//               <li><Link to="">PG</Link></li>
//               <li><Link to="">PHD</Link></li>
//             </ul>
//           )}
//         </div>

//         <Link to={'/professor/hod'} className={styles.GridEle}>HOD</Link>

//         <div 
//           className={styles.dropdownWrapper} 
//           onClick={() => setDropdown2(!Dropdown2)} onMouseLeave={() => setDropdown2(false)}
//         >
//           <button 
//             onClick={() => setDropdown2(!Dropdown1)} onMouseLeave={() => setDropdown1(false)}
//             className={styles.GridEle2}>
//             PEOPLE
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
//               <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
//             </svg>
//           </button>
//           {Dropdown2 && (
//             <ul className={styles.dropdownContent}>
//               <li><Link to="/staff">Staff</Link></li>
//               <li><Link to="/professor">Professor</Link></li>
//             </ul>
//           )}
//         </div>

//         <button className={styles.GridEle}>RESEARCH</button>
//         <button className={styles.GridEle}>PROJECTS</button>
//         <button className={styles.GridEle}>FACILITIES</button>

//         <div 
//           className={styles.dropdownWrapper} 
//           onClick={() => setDropdown3(!Dropdown3)} onMouseLeave={() => setDropdown3(false)}
//         >
//           <button 
//             onClick={() => setDropdown3(!Dropdown3)} 
//             className={styles.GridEle2}>
//             ACTIVITIES
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
//               <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
//             </svg>
//           </button>
//           {Dropdown3 && (
//             <ul className={styles.dropdownContent}>
//               <li><Link to="">Upcoming Events</Link></li>
//               <li><Link to="">Past Events</Link></li>
//             </ul>
//           )}
//         </div>

//         <Link to={'/photoGallery'} className={styles.GridEle}>PHOTO GALLERY</Link>
//         <Link to={'/contactus'} className={styles.GridEle}>CONTACT US</Link>
//         <button className={styles.GridEle}>PLACEMENT & INTERNSHIP</button>
//         <button className={styles.GridEle}>ALUMNI SPEAK</button>
//       </div>
//     </div>

//     <div className='block md:hidden ml-2 mt-2' onClick={OpenDashBoard}>
//       <svg xmlns="http://www.w3.org/2000/svg" className='w-[10%] h-[10%] ease-in-out hover:-translate-y-1 hover:scale-110' height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
//         <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
//       </svg>
//     </div>

//     {dashBoard && <DashBoard />}
//   </div>
// )
// }

// export default Navbar;}