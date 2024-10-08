import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './../TeacherData.module.css';
import SummaryApi from '../../../../common';

const ProjectDetails = () => {
  const { id } = useParams();
  const [sponsoredProjects, setSponsoredProjects] = useState([]);
  const [consultancyProjects, setConsultancyProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProjectDetails.url, {
        method: SummaryApi.GetCseProjectDetails.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });

      const projectData = await response.json();
      setSponsoredProjects(projectData.sponsered || []);
      setConsultancyProjects(projectData.consultancy || []);

      console.log('Fetched Projects:', projectData);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [id]);

  const renderTable = (projects) => (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Name of the PI</th>
          <th>Name of the CoPIs</th>
          <th>Funding Agency</th>
          <th>Amount (Rs.)</th>
          <th>Project Status</th>
          <th>Date of Initiation</th>
          <th>Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{project?.Title || 'N/A'}</td>
            <td>{project?.NameofthePI || 'N/A'}</td>
            <td>{project?.NameoftheCoPIs?.join(', ') || 'N/A'}</td>
            <td>{project?.FundingAgency || 'N/A'}</td>
            <td>{project?.Amount || 'N/A'}</td>
            <td>{project?.ProjectStatus || 'N/A'}</td>
            <td>{project?.DateofInitiation || 'N/A'}</td>
            <td>{project?.DateofCompletion || 'N/A'}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <h3 className='text-center font-bold text-1.2xl p-2'>Project Details</h3>

      {/* Sponsored Projects Section */}
      <div>
        <h4 className='p-2'>Sponsered Projects</h4>
        {sponsoredProjects.length > 0 ? renderTable(sponsoredProjects) : <p>No sponsored projects available.</p>}
      </div>

      {/* Consultancy Projects Section */}
      <div>
        <h4 className='p-2'>Consultancy Projects</h4>
        {consultancyProjects.length > 0 ? renderTable(consultancyProjects) : <p>No consultancy projects available.</p>}
      </div>
    </div>
  );
};

export default ProjectDetails;
