import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'; 
import SummaryApi from '../../../../common';

const AwardsAndRecognition = () => {
  const { id } = useParams();
  const [awards, setAwards] = useState([]);

  const fetchAwards = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      const foundAwards = await response.json();
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
      <h3 className='text-center font-bold text-1.2xl p-2'>Awards and Recognition</h3>
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
