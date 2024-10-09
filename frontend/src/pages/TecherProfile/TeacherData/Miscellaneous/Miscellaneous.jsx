import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './miscellaneous.module.css'; 
import SummaryApi from '../../../../common';

const Miscellaneous = () => {
  const { id } = useParams();
  const [miscellaneous, setMiscellaneous] = useState([]);

  const fetchMiscellaneous = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      
      const foundMiscellaneous = await response.json();
      setMiscellaneous(foundMiscellaneous.miscellaneous);
    } catch (error) {
      console.error("Error fetching professor's miscellaneous information:", error);
    }
  };

  useEffect(() => {
    fetchMiscellaneous();
  }, [id]);

  return (
    <div className={styles.miscContainer}>
      <h3 className='text-center font-bold text-1.2xl p-2'>Miscellaneous</h3>
      <ul className={styles.miscList}>
        {miscellaneous.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Miscellaneous;
