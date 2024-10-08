import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './DisplayFaculty.module.css';
import { NavLink } from 'react-router-dom';
import SummaryApi from '../../common/index';

const HodCse = () => {
    const [hodFaculty, setHodFaculty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const HodId = '66fe37d8ed22f5271534bc09';

    const fetchHodData = async () => {
        try {
            const response = await fetch(SummaryApi.GetCseProfProfile.url, {
                method: SummaryApi.GetCseProfProfile.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: HodId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setHodFaculty(data);
        } catch (error) {
            console.error('Error fetching faculty data:', error);
            setError('Failed to load faculty data'); // Set error message
        } finally {
            setLoading(false); // Set loading to false after data fetching
        }
    };

    useEffect(() => {
        fetchHodData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>{error}</div>; 
    }

   
    if (!hodFaculty) {
        return <div>No faculty data available.</div>;
    }

    return (
        <div>
            <div className={styles.facultyContainer}>
                <div className="flex justify-center items-center mb-6">
                    <div className="relative">
                        <div className="flex items-center">
                            <div className="h-px bg-gray-300 w-16"></div>
                            <button className="text-blue-600 font-bold text-2xl">
                                HOD CSE
                            </button>
                            <div className="h-px bg-gray-300 w-16"></div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.facultyCard} flex flex-col justify-center items-center`}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full h-full flex justify-center items-center pt-3 pb-3 bg-white">
                            <div className="w-30 h-30 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 mt-1 mb-1">
                                <div className="w-full h-full rounded-full bg-white p-1 flex justify-center items-center ">
                                    <img
                                        className="w-30 h-30 rounded-full object-cover"
                                        src={hodFaculty.photo}
                                        alt={`Profile of ${hodFaculty.name}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.facultyName}>{hodFaculty.name}</h3>
                        <p className={styles.facultyPosition}>{hodFaculty.professorType}</p>
                    </div>
                    {/* Research Interest and Contact Info */}
                    <div className="text-center flex-grow">
                        <p className={`${styles.facultyResearch}`}>
                            <strong>Research Interest:</strong> {hodFaculty.researchInterest}
                        </p>
                        <p className={styles.facultyEmail}>
                            <EmailIcon />: <a href={`mailto:${hodFaculty.contact.email}`} className="text-blue-500 underline">{hodFaculty.contact.email}</a>
                        </p>
                        <p className={styles.facultyPhone}>
                            <PhoneIcon />: <a href={`tel:${hodFaculty.contact.phone}`} className="text-blue-500 underline">{hodFaculty.contact.phone}</a>
                        </p>
                        <p className={styles.facultyJoined}>Joined: {hodFaculty.collegeJoinYear}</p>
                    </div>
                    {/* View Details Button */}
                    <NavLink to={`/professor/${hodFaculty._id}`} className={styles.detailsButton}>
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HodCse;
