import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css'; 
import SummaryApi from '../../../../common';

const Contact = () => {
  const { id } = useParams();
  const [contactInfo, setContactInfo] = useState({});

  const fetchContactInfo = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      // const data = await response.json();
      const foundContact =await response.json();
      setContactInfo(foundContact.contact);
    } catch (error) {
      console.error("Error fetching professor's contact information:", error);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, [id]);

  return (
    <div>
      <h3 className='text-center font-bold text-1.2xl p-2'>Contact Information</h3>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email</td>
            <td>{contactInfo?.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{contactInfo?.phone}</td>
          </tr>
          <tr>
            <td>Office</td>
            <td>{contactInfo?.office}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
