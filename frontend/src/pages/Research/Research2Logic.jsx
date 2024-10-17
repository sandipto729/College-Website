import React, { useState } from 'react';
import projects from '../../../public/ProjectData';
import ResearchDetailsPage from './Research2';

function ResearchPageLogic() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(term) ||
      project.pi.toLowerCase().includes(term) ||
      project.status.toLowerCase().includes(term)
    );
    setFilteredProjects(filtered);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Research Projects</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search projects by title, PI, or status..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white text-gray-700 border-separate border-spacing-y-2">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-3">Sl No</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">PI</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr key={index} className="bg-gray-100 hover:bg-gray-200 transition duration-300">
                <td className="border-b border-gray-300 px-6 py-4 text-center">{index + 1}</td>
                <td className="border-b border-gray-300 px-6 py-4">{project.title}</td>
                <td className="border-b border-gray-300 px-6 py-4">{project.pi}</td>
                <td className="border-b border-gray-300 px-6 py-4">{project.status}</td>
                <td className="border-b border-gray-300 px-6 py-4">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-[#22286b] text-white px-4 py-2 rounded-lg hover:bg-[#1c1f4b] transition duration-200"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProject && (
        <ResearchDetailsPage project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
}

export default  ResearchPageLogic;
    

