import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css';

const ResearchInterest = () => {
  const { id } = useParams();
  const [researchInterest, setResearchInterest] = useState([]);

  const fetchResearchInterest = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundResearchInterest = data.professors.find((prof) => prof._id === id);
      setResearchInterest(foundResearchInterest.researchInterest);
      console.log(foundResearchInterest.researchInterest);
    } catch (error) {
      console.error("Error fetching professor's research interests:", error);
    }
  };

  useEffect(() => {
    fetchResearchInterest();
  }, [id]);

  return (
    <div>
      <h3>Research Interests</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Interest</th>
          </tr>
        </thead>
        <tbody>
          {researchInterest.map((interest,idx) => (
            <tr key={interest}>
              <td>{idx+1}</td>
              <td>{interest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchInterest;
