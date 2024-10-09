import React, { useEffect, useState } from 'react';
import styles from './DisplayFaculty.module.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SummaryApi from '../../common/index'; // Import the API endpoints
import Staffcard from './../../component/CardModel/CardModel'

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
        <div className={styles.ProfCard}>
          {staffData.map((member) => (
              <Staffcard
                key={member._id}
                faculty={{
                  photo: member.photo,
                  name: member.name,
                  professorType: member.type,
                  researchInterest: "",
                  email: member.contact.email,
                  phone: member.contact.phone,
                  collegeJoinYear:member.collegeJoinYear,
                  id: '',
                }}
              />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayStaff;
