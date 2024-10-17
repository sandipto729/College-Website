import React from 'react';
import { useParams } from 'react-router-dom';
import researchData from '../../../public/ResearchData';

const ResearchDetail = () =>{

  const { id } = useParams();
  
  console.log(".......",id)

  const research = researchData.find((item) => item.id === parseInt(id));

  console.log(".......",id)

  if (!research) {
    return <div>Research not found</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{research.title}</h2>
      <p className="text-gray-600 mb-4"><strong>Collaborators:</strong> {research.collaborators}</p>
      <p className="mb-4">{research.description}</p>
      <p>{research.details}</p>
    </div>
  );
};

export default ResearchDetail;
