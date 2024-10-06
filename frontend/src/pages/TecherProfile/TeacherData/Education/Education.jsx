import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './../TeacherData.module.css'
import SummaryApi from '../../../../common';

const Education = () => {
  const { id } = useParams();
  const [Education, setEducation] = useState([]);

  const fetchEducation = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      
      const foundEducation = await response.json();
      setEducation(foundEducation.ownEducation);
      console.log(foundEducation.ownEducation);
    } catch (error) {
      console.error("Error fetching professor:", error);
    }
  }

  useEffect(() => {
    fetchEducation();
  }, [id])

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Education</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {Education.map((education, index) => (
            <tr key={index}>
              <td>{education?.degree}</td>
              <td>{education?.institution}</td>
              <td>{education?.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Education
