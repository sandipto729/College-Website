import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'

const WorkExperience = () => {
  const { id } = useParams();
  const [workExperience, setWorkExperience] = useState([]);

  const fetchWorkExperience = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundWorkExperience = data.professors.find((prof) => prof._id === id);
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
      <h3>Work Experience</h3>
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
