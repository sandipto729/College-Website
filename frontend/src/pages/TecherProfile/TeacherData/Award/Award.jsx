import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'; 

const AwardsAndRecognition = () => {
  const { id } = useParams();
  const [awards, setAwards] = useState([]);

  const fetchAwards = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundAwards = data.professors.find((prof) => prof._id === id);
      setAwards(foundAwards.awardsAndRecognition);
    } catch (error) {
      console.error("Error fetching professor's awards and recognitions:", error);
    }
  };

  useEffect(() => {
    fetchAwards();
  }, [id]);

  return (
    <div>
      <h3>Awards and Recognition</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Organization</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award, index) => (
            <tr key={index}>
              <td>{award?.title}</td>
              <td>{award?.year}</td>
              <td>{award?.organization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AwardsAndRecognition;
