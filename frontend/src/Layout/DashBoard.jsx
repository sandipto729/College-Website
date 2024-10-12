import { Link, useNavigate } from "react-router-dom";
import styles from './DashBoard.module.css'
import { useState } from "react";

function DashBoard(dashBoard) {
    const [List1, setList1] = useState(false);
    const [List2, setList2] = useState(false);
    const [List3, setList3] = useState(false);
    console.log(dashBoard)
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
<div className={styles.container}>
      
      <button className={styles.GridEle1}>ABOUT US</button>
      <button onClick={() => setList1(!List1)} style={{width:'full' , display:'flex' , flexDirection:'column' ,justifyContent:'space-between' }}  className={styles.GridEle1}><span className='flex flex-row w-full  justify-center mt-1 ml-1'>PROGRAMMES<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span></button>
      {List1 && 
      <ul>
      <li><Link>UG</Link></li>
      <li><Link>PG</Link></li>
      <li><Link>PHD</Link></li>
      </ul>
          }
      <Link to={'/professor/hod'} className={styles.GridEle1}>HOD</Link>
      <button onClick={() => setList2(!List2)} style={{width:'full' , display:'flex' , flexDirection:'column' ,justifyContent:'space-between' }}  className={styles.GridEle1}><span className='flex flex-row w-full  justify-center mt-1 ml-1'>PEOPLE<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span></button>
      {List2 && 
      <ul>
      <li><Link>Staff</Link></li>
      <li><Link to="/professor">Professor</Link></li>
      </ul>
          }
      <button className={styles.GridEle1}>RESEARCH</button>
      <button className={styles.GridEle1}>PROJECTS</button>
      <button className={styles.GridEle1}>FACILITIES</button>
      
      <button onClick={() => setList3(!List3)} style={{width:'full' , display:'flex' , flexDirection:'column' ,justifyContent:'space-between' }}  className={styles.GridEle1}><span className='flex flex-row w-full  justify-center mt-1 ml-1'>ACTIVITIES<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span></button>
      {List3 && 
      <ul>
      <li><Link>Upcoming Events</Link></li>
      <li><Link to="/professor">Past Events</Link></li>
      </ul>
          }

      <Link to={'/photoGallery'} className={styles.GridEle2}>PHOTO GALLERY</Link>
      <Link to={'/contactus'} className={styles.GridEle2}>CONTACT US</Link>
      <button className={styles.GridEle2}>PLACEMENT & INTERNSHIP</button>
      <button className={styles.GridEle2}>ALUMNI SPEAK</button>

  </div>

      </div>
  );
}

export default DashBoard