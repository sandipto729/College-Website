import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './DisplayFaculty.module.css';
import { NavLink } from 'react-router-dom';
import SummaryApi from '../../common/index';
import FacultyCard from '../../component/CardModel/CardModel';

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
              className={`${showPresent ? 'text-blue-600 font-bold' : 'text-gray-500'
                } px-6 py-2 focus:outline-none text-3xl font-serif`}
              onClick={() => setShowPresent(true)}
            >
              Present Faculty
            </button>
            <div className="h-px bg-gray-300 w-16"></div>
            <button
              className={`${!showPresent ? 'text-blue-600 font-bold' : 'text-gray-500'
                } px-6 py-2 focus:outline-none text-3xl font-serif`}
              onClick={() => setShowPresent(false)}
            >
              Retired Faculty
            </button>
            <div className="h-px bg-gray-300 w-16"></div>
          </div>
        </div>
      </div>

      <div className={styles.ProfCard}>
        {(showPresent ? facultyData.present : facultyData.retired).map((member) => (
          <FacultyCard
            key={member._id}
            faculty={{
              photo: member.photo,
              name: member.name,
              professorType: member.professorType,
              researchInterest: member.researchInterest,
              email: member.contact.email,
              phone: member.contact.phone,
              collegeJoinYear: member.collegeJoinYear,
              id: member._id,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayFaculty;

