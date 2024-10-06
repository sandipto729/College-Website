import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'
import SummaryApi from '../../../../common';

const WorkExperience = () => {
  const { id } = useParams();
  const [workExperience, setWorkExperience] = useState([]);

  const fetchWorkExperience = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      const foundWorkExperience = await response.json();
      setWorkExperience(foundWorkExperience.workExperience);
      console.log(foundWorkExperience.workExperience);
    } catch (error) {
      console.error("Error fetching professor's work experience:", error);
    }
  };

  useEffect(() => {
    fetchWorkExperience();
  }, [id]);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Work Experience</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Institution</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {workExperience.map((experience, index) => (
            <tr key={index}>
              <td>{experience?.position}</td>
              <td>{experience?.institution}</td>
              <td>{experience?.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkExperience;
