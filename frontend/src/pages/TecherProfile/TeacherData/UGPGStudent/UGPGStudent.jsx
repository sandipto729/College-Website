import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './UGPGStudent.module.css';

const PGUGStudents = () => {
  const { id } = useParams();
  const [pgStudents, setPgStudents] = useState([]);
  const [ugStudents, setUgStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundProfessor = data.professors.find((prof) => prof._id === id);
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
      <h3>PG Students</h3>
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

      <h3>UG Students</h3>
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
