import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css';
import SummaryApi from '../../../../common';

const ResearchInterest = () => {
  const { id } = useParams();
  const [researchInterest, setResearchInterest] = useState([]);

  const fetchResearchInterest = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      
      const foundResearchInterest = await response.json();
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
