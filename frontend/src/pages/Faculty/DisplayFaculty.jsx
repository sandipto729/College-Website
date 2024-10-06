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

        setFacultyData({
          present: data.presentFaculty || [], 
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
              } px-6 py-2 focus:outline-none text-3xl`}
              onClick={() => setShowPresent(true)}
            >
              Present Faculty
            </button>
            <div className="h-px bg-gray-300 w-16"></div>
            <button
              className={`${
                !showPresent ? 'text-blue-600 font-bold' : 'text-gray-500'
              } px-6 py-2 focus:outline-none text-3xl `}
              onClick={() => setShowPresent(false)}
            >
              Retired Faculty
            </button>
            <div className="h-px bg-gray-300 w-16"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(showPresent ? facultyData.present : facultyData.retired).map((member) => (
          <div key={member.name} className={styles.facultyCard}>
            <div className="relative flex justify-center items-center bg-slate-200 mb-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 mt-1 mb-1">
                <div className="w-full h-full rounded-full bg-white p-1 flex justify-center items-center ">
                  <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={member.photo}
                    alt={`Profile of ${member.name}`}
                  />
                </div>
              </div>
            </div>
            <h3 className={styles.facultyName}>{member.name}</h3>
            <p className={styles.facultyPosition}>{member.professorType}</p>
            <p className={styles.facultyResearch}>
              <strong>Research Interest:</strong> {member.researchInterest}
            </p>
            <p className={styles.facultyEmail}>
              <EmailIcon className="to-black" />: <a href={`mailto:${member.email}`} className="text-blue-500 underline">{member.contact.email}</a>
            </p>
            <p className={styles.facultyPhone}><PhoneIcon />: {member.contact.phone}</p>
            <p className={styles.facultyJoined}>Joined: {member.collegeJoinYear}</p>
            <NavLink to={`/professor/${member.id}`} className={styles.detailsButton}>
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFaculty;

