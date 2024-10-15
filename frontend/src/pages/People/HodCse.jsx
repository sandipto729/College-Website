import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './DisplayFaculty.module.css';
import { NavLink } from 'react-router-dom';
import SummaryApi from '../../common/index';
import FacultyCard from './../../component/CardModel/CardModel'
import LoadingState from './../../helper/loading'
import SkletonSchema from '../../helper/skletonCard'

const HodCse = () => {
    const [hodFaculty, setHodFaculty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const HodId = '66fe37d8ed22f5271534bc09';

    const timeDelay=async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    const fetchHodData = async () => {
        await timeDelay();
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
        // return <LoadingState />; 
        return <div className="flex justify-center items-center mb-6 mt-[50px]">
            <SkletonSchema/>
        </div>
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
                                Hod Cse
                            </button>
                            <div className="h-px bg-gray-300 w-16"></div>
                        </div>
                    </div>
                </div>

                <div className={styles.ProfCard}>
                    <FacultyCard 
                        faculty={{
                            photo: hodFaculty.photo,
                            name: hodFaculty.name,
                            professorType: hodFaculty.professorType,
                            researchInterest: hodFaculty.researchInterest,
                            email: hodFaculty.contact.email,
                            phone: hodFaculty.contact.phone,
                            collegeJoinYear: hodFaculty.collegeJoinYear,
                            id: hodFaculty._id
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default HodCse;
