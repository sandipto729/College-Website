import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './miscellaneous.module.css'; 

const Miscellaneous = () => {
  const { id } = useParams();
  const [miscellaneous, setMiscellaneous] = useState([]);

  const fetchMiscellaneous = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundMiscellaneous = data.professors.find((prof) => prof._id === id);
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
      <h3>Miscellaneous</h3>
      <ul className={styles.miscList}>
        {miscellaneous.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Miscellaneous;
