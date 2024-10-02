import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css';

const TeachingTopics = () => {
  const { id } = useParams();
  const [teachingTopics, setTeachingTopics] = useState([]);

  const fetchTeachingTopics = async () => {
    try {
      const response = await fetch('/Techer.json');
      const data = await response.json();
      const foundProfessor = data.professors.find((prof) => prof._id === id);
      setTeachingTopics(foundProfessor.teachingTopics);
      console.log(foundProfessor.teachingTopics);
    } catch (error) {
      console.error("Error fetching teaching topics:", error);
    }
  };

  useEffect(() => {
    fetchTeachingTopics();
  }, [id]);

  return (
    <div>
      <h3>Teaching Topics</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {teachingTopics.map((topic, idx) => (
            <tr key={topic}>
              <td>{idx + 1}</td>
              <td>{topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachingTopics;
