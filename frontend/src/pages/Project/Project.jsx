import React, { useState, useEffect } from 'react';
import SummaryApi from '../../common';
import styles from './projectstyle.module.css'; 

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
      console.log(error);
    }
  };

  useEffect(() => {
    researchFetch();
  }, []);

  return (
    <div>
      <div className={styles.hero}> {}
        <h1 className="text-2xl font-bold mb-4">Project Overview</h1>
        <div className={styles.line}></div> {}
        <div className={styles.subheading}>Explore Our Projects</div> {}
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            setShowSponsered(true);
            setShowConsultancy(false);
          }}
          className={`${showSponsered ? 'text-blue-600 font-bold' : 'text-gray-500'} px-6 py-2 focus:outline-none text-2xl`}
        >
          Sponsored Projects
        </button>
        <div className="h-px bg-gray-300 w-16 mx-4"></div>
        <button
          onClick={() => {
            setShowSponsered(false);
            setShowConsultancy(true);
          }}
          className={`${showConsultancy ? 'text-blue-600 font-bold' : 'text-gray-500'} px-6 py-2 focus:outline-none text-2xl`}
        >
          Consultancy Projects
        </button>
      </div>
      
      <div className={styles.tableContainer}> {}
        <table className="min-w-full border border-gray-300">
          <thead className={`${styles.bgnavy} text-white`}> {}
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">PI</th>
              <th className="border px-4 py-2">CoPIs</th>
              <th className="border px-4 py-2">Funding Agency</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Project Status</th>
              <th className="border px-4 py-2">Date of Initiation</th>
              <th className="border px-4 py-2">Date of Completion</th>
            </tr>
          </thead>
          <tbody>
            {showSponsered && sponseredProjects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{project.Title}</td>
                <td className="border px-4 py-2">{project.NameofthePI}</td>
                <td className="border px-4 py-2">{project.NameoftheCoPIs.join(', ')}</td>
                <td className="border px-4 py-2">{project.FundingAgency}</td>
                <td className="border px-4 py-2">{project.Amount}</td>
                <td className="border px-4 py-2">{project.ProjectStatus}</td>
                <td className="border px-4 py-2">{project.DateofInitiation}</td>
                <td className="border px-4 py-2">{project.DateofCompletion}</td>
              </tr>
            ))}
            {showConsultancy && consultancyProjects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{project.Title}</td>
                <td className="border px-4 py-2">{project.NameofthePI}</td>
                <td className="border px-4 py-2">{project.NameoftheCoPIs.join(', ')}</td>
                <td className="border px-4 py-2">{project.FundingAgency}</td>
                <td className="border px-4 py-2">{project.Amount}</td>
                <td className="border px-4 py-2">{project.ProjectStatus}</td>
                <td className="border px-4 py-2">{project.DateofInitiation}</td>
                <td className="border px-4 py-2">{project.DateofCompletion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
