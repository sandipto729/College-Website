import React, { useState } from 'react';
import Facilitiesitem from './Facilitiesitem';
import facilitiesData from '../../../../public/FacilitiesData';

const Facilities = () => {
  const [filter, setFilter] = useState('');

  const filteredData = facilitiesData.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container my-3">
      <h2>Facilities</h2>
      <input
        type="text"
        placeholder="Filter facilities..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-3"
      />
      <div className="row">
        {filteredData.map((lab, index) => (
          <div className="col-md-4 p-2" key={index}>
            <Facilitiesitem 
              title={lab.name} 
              description={lab.description} 
              imgUrl={lab.imgUrl || "https://via.placeholder.com/150"}
              equipments={lab.equipments}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;