import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DoctoralStudent.module.css';
import SummaryApi from '../../../../common';

const DoctoralStudents = () => {
  const { id } = useParams();
  const [doctoralStudents, setDoctoralStudents] = useState([]);

  const fetchDoctoralStudents = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      
      const foundProfessor = await response.json();
      setDoctoralStudents(foundProfessor.doctoralStudents);
    } catch (error) {
      console.error("Error fetching doctoral students:", error);
    }
  };

  useEffect(() => {
    fetchDoctoralStudents();
  }, [id]);

  return (
    <div>
      <h3 className='text-center font-bold text-1.2xl p-2'>Doctoral Students</h3>
      <div className={styles.gridContainer}>
        {doctoralStudents.map((student, index) => (
          <div className={styles.card} key={index}>
            <img src={student.photo} alt="Student" className={styles.studentPhoto} />
            <div className={styles.cardContent}>
              <h4>{student.type}</h4>
              <p>{student.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctoralStudents;
