
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ProjectDetailsPage({ project, closeModal }){


    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-3xl mx-auto p-6 rounded-lg shadow-lg relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
          >
            &times;
          </button>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{project.title}</h1>
          <p className="mb-4 text-lg">Principal Investigator: <strong>{project.pi}</strong></p>
          <p className="mb-4 text-lg">Status: <strong>{project.status}</strong></p>
          <p className="mb-4 text-lg">Funding Agency: <strong>{project.fundingAgency}</strong></p>
          <p className="mt-4 text-sm text-gray-500">Date of Initiation: {project.initiationDate}</p>
          <p className="text-sm text-gray-500">Expected Completion: {project.completionDate}</p>
  
          <ToastContainer />
        </div>
      </div>
      )

}

export default ProjectDetailsPage