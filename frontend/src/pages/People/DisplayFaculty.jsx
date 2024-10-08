import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './DisplayFaculty.module.css';
import { NavLink } from 'react-router-dom';
import SummaryApi from '../../common/index';


const DisplayFaculty = () => {
  const [facultyData, setFacultyData] = useState({ present: [], retired: [] });
  const [showPresent, setShowPresent] = useState(true);

  useEffect(() => {
  
    const fetchFacultyData = async () => {
      try {
        const response = await fetch(SummaryApi.GetCseProf.url, {
          method: SummaryApi.GetCseProf.method,
        });
        const data = await response.json();
        console.log(data);
        setFacultyData({
          present: data.cseProfData || [], 
          retired: data.retiredFaculty || [], 
        });
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchFacultyData();
  }, []);

  return (
    <div className={styles.facultyContainer}>
     
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <div className="flex items-center">
            <div className="h-px bg-gray-300 w-16"></div>
            <button
              className={`${
                showPresent ? 'text-blue-600 font-bold' : 'text-gray-500'
              } px-6 py-2 focus:outline-none text-3xl font-serif`}
              onClick={() => setShowPresent(true)}
            >
              Present Faculty
            </button>
            <div className="h-px bg-gray-300 w-16"></div>
            <button
              className={`${
                !showPresent ? 'text-blue-600 font-bold' : 'text-gray-500'
              } px-6 py-2 focus:outline-none text-3xl font-serif`}
              onClick={() => setShowPresent(false)}
            >
              Retired Faculty
            </button>
            <div className="h-px bg-gray-300 w-16"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {(showPresent ? facultyData.present : facultyData.retired).map((member) => (
          <div key={member.name}  className={`${styles.facultyCard} flex flex-col`}>
            <div className="flex flex-col items-center">
            <div className="relative w-full h-full flex justify-center items-center pt-3 pb-3 bg-gradient-to-r from-blue-200 via-purple-100 to-orange-100">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 mt-1 mb-1">
                <div className="w-full h-full rounded-full bg-white p-1 flex justify-center items-center ">
                  <img
                    className="w-28 h-28 rounded-full object-cover"
                    src={member.photo}
                    alt={`Profile of ${member.name}`}
                  />
                </div>
              </div>
            </div>
            <h3 className={styles.facultyName}>{member.name}</h3>
            <p className={styles.facultyPosition}>{member.professorType}</p>
            </div>
       
            <div className="text-center flex-grow">
              <p className={`${styles.facultyResearch} line-clamp`}>
                <strong>Research Interest:</strong> {member.researchInterest}
              </p>
              <p className={styles.facultyEmail}>
              <EmailIcon /> : <a href={`mailto:${member.email}`} className="text-blue-500 underline">{member.contact.email}</a>
              </p>
              <p className={styles.facultyPhone}>
               <PhoneIcon /> : <a href={`tel:${member.phone}`} className="text-blue-500 underline">{member.contact.phone}</a>
              </p>
              <p className={styles.facultyJoined}>Joined: {member.collegeJoinYear}</p>
            </div>
           
            <NavLink to={`/professor/${member._id}`} className={styles.detailsButton}>
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFaculty;


