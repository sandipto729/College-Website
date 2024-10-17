import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import researchData from '../../../public/ResearchData.js';
const Research = () => {
  const [filter, setFilter] = useState('');

  const filteredData = researchData.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#22286b]">Research Areas & Collaborations</h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search research topics..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 border rounded-lg shadow-md w-3/4 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#22286b]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#22286b]">{item.title}</h3>
            <p className="text-gray-600 mb-2"><strong>Collaborators:</strong> {item.collaborators}</p>
            <p className="text-gray-600 mb-2"><strong>Faculty Members:</strong> {item.faculty_members.join(', ')}</p>
            <p className="mb-4 flex-grow">{item.description}</p>
            <div className="mt-auto">
              <Link to={`/research/${item.id}`} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-[#22286b] hover:text-white transition duration-300 inline-block text-center">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
