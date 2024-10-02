import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './../TeacherData.module.css'

const Education = () => {
  const { id } = useParams();
  const [Education, setEducation] = useState([]);

  const fetchEducation = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundEducation = data.professors.find((prof) => prof._id === id);
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
      <h3>Education</h3>
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
