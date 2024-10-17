import React, { useState, useEffect } from 'react';
import SummaryApi from '../../common';
import styles from './Project.module.scss';
const Project = () => {
  
  const [sponseredProjects, setSponseredProjects] = useState([]);
  const [consultancyProjects, setConsultancyProjects] = useState([]);
  const [showSponsered, setShowSponsered] = useState(true);
  const [showConsultancy, setShowConsultancy] = useState(false);
  const researchFetch = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProjectFetch.url, {
        method: SummaryApi.GetCseProjectFetch.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json(); 

      setSponseredProjects(data.sponsered);
      setConsultancyProjects(data.consultancy);
      console.log("Project Data: ", data);
    } catch (error) {
      console.log(error); // Catch and log any errors
    }
  };

  useEffect(() => {
    researchFetch(); // Call the fetch function inside useEffect
  }, []);
console.log(consultancyProjects)
  return (
    <div>
      <div className={styles.header}>
      <button onClick={() => {setShowSponsered(!showSponsered)
         setShowConsultancy(!showConsultancy)}}>Sponsored Projects</button>
      <button onClick={() => {setShowSponsered(!showSponsered)
         setShowConsultancy(!showConsultancy)}}>Consultancy Projects</button>
      </div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr className=''>
            <th>Title</th>
            <th>PI</th>
            <th>CoPIs</th>
            <th>Funding Agency</th>
            <th>Amount</th>
            <th>Project Status</th>
            <th>Date of Initiation</th>
            <th>Date of Completion</th>
          </tr>
        </thead>
        <tbody>
          {showSponsered ? sponseredProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.Title}</td>
              <td>{project.NameofthePI}</td>
              <td>{project.NameoftheCoPIs.join(', ')}</td>
              <td>{project.FundingAgency}</td>
              <td>{project.Amount}</td>
              <td>{project.ProjectStatus}</td>
              <td>{project.DateofInitiation}</td>
              <td>{project.DateofCompletion}</td>
            </tr>
          )):null}
          {
            showConsultancy ? consultancyProjects.map((project, index) => (
              <tr key={index}>
                <td>{project.Title}</td>
                <td>{project.NameofthePI}</td>
                <td>{project.NameoftheCoPIs.join(', ')}</td>
                <td>{project.FundingAgency}</td>
                <td>{project.Amount}</td>
                <td>{project.ProjectStatus}</td>
                <td>{project.DateofInitiation}</td>
                <td>{project.DateofCompletion}</td>
              </tr>
            )):null
          }

        </tbody>
      </table>

    </div>
  );
};

export default Project;
