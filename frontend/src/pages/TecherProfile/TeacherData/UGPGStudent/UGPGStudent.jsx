import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './UGPGStudent.module.css';
import SummaryApi from '../../../../common';

const PGUGStudents = () => {
  const { id } = useParams();
  const [pgStudents, setPgStudents] = useState([]);
  const [ugStudents, setUgStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      
      const foundProfessor = await response.json();
      setPgStudents(foundProfessor.pgStudents);
      setUgStudents(foundProfessor.ugStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [id]);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>PG Students</h3>
      <div className={styles.gridContainer}>
        {pgStudents.map((student, index) => (
          <div className={styles.card} key={index}>
            <img src={student.photo} alt="PG Student" className={styles.studentPhoto} />
            <div className={styles.cardContent}>
              <h4>{student.type}</h4>
              <p>{student.subject}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: 'center' }}>UG Students</h3>
      <div className={styles.gridContainer}>
        {ugStudents.map((student, index) => (
          <div className={styles.card} key={index}>
            <img src={student.photo} alt="UG Student" className={styles.studentPhoto} />
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

export default PGUGStudents;
