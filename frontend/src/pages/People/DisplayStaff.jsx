import React, { useEffect, useState } from 'react';
import styles from './DisplayFaculty.module.css'; 
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SummaryApi from '../../common/index'; // Import the API endpoints

const DisplayStaff = () => {
  const [staffData, setStaffData] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(SummaryApi.GetCseStaff.url, {
          method: SummaryApi.GetCseStaff.method
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log('API response:', data);

        if (Array.isArray(data.cseStaffData)) {
          setStaffData(data.cseStaffData); 
        } else {
          console.error('Unexpected API response format. Expected an array inside cseStaffData.');
          setStaffData([]); // Fallback to empty array if it's not an array
        }

        setLoading(false); // Data has been loaded
      } catch (error) {
        console.error('Error fetching staff data:', error);
        setError(error.message); // Set error message
        setLoading(false); 
      }
    };

    fetchStaffData();
  }, []); 

  if (loading) {
    return <div className="text-center">Loading...</div>; 
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <div className="text-center text-black text-3xl font-serif shadow-white bold mt-5 mb-0">Staff</div>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 mb-10"></hr>
      
      {staffData.length === 0 ? (
        <div className="text-center text-gray-500">No data available</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {staffData.map((member) => (
            <div key={member._id} className={`${styles.facultyCard} flex flex-col`}>
              {/* Image and Name */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-full flex justify-center items-center pt-3 pb-3  bg-gradient-to-r from-blue-200 via-purple-100 to-orange-100">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-white p-1 flex justify-center items-center">
                    <img
                                        className="w-28 h-28 rounded-full object-cover"
                                        src={member.photo}
                                        alt={`Profile of ${member.name}`}
                                    />
                    </div>
                  </div>
                </div>
                <h3 className={styles.facultyName}>{member.name}</h3>
                <p className={styles.facultyPosition}>{member.type}</p>
              </div>

              {/* Contact Info */}
              <div className="text-center flex-grow">
                <p className={styles.facultyEmail}>
                  <EmailIcon /> : <a href={`mailto:${member.contact.email}`} className="text-blue-500 underline">{member.contact.email}</a>
                </p>
                <p className={styles.facultyPhone}>
                  <PhoneIcon /> : <a href={`tel:${member.contact.phone}`} className="text-blue-500 underline">{member.contact.phone}</a>
                </p>
                <p className={styles.collegeJoinYear}>Joined: {member.collegeJoinYear}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayStaff;
