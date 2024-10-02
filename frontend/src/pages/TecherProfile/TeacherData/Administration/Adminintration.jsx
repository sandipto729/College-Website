import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'; 

const AdministrativeResponsibilities = () => {
  const { id } = useParams();
  const [responsibilities, setResponsibilities] = useState([]);

  const fetchResponsibilities = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundResponsibilities = data.professors.find((prof) => prof._id === id);
      setResponsibilities(foundResponsibilities.administrativeResponsibilities);
    } catch (error) {
      console.error("Error fetching professor's administrative responsibilities:", error);
    }
  };

  useEffect(() => {
    fetchResponsibilities();
  }, [id]);

  return (
    <div>
      <h3>Administrative Responsibilities</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {responsibilities.map((responsibility, index) => (
            <tr key={index}>
              <td>{responsibility?.position}</td>
              <td>{responsibility?.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdministrativeResponsibilities;
