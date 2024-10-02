import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'; 

const Publications = () => {
  const { id } = useParams();
  const [publications, setPublications] = useState([]);

  const fetchPublications = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundPublications = data.professors.find((prof) => prof._id === id);
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
      <h3>Publications</h3>
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
