import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'; 
import SummaryApi from '../../../../common';

const Publications = () => {
  const { id } = useParams();
  const [publications, setPublications] = useState([]);

  const fetchPublications = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      
      const foundPublications = await response.json();
      setPublications(foundPublications.publications);
      console.log(foundPublications.publications);
    } catch (error) {
      console.error("Error fetching professor's publications:", error);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, [id]);

  return (
    <div>
      <h3 className='text-center font-bold text-1.2xl p-2'>Publications</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Journal</th>
            <th>Year</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication, index) => (
            <tr key={index}>
              <td>{publication?.title}</td>
              <td>{publication?.journal}</td>
              <td>{publication?.year}</td>
              <td>
                <a href={publication?.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Publications;