import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners';

const loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClimbingBoxLoader color="#007bff" loading={loading} size={15} />
    </div>
  )
}

export default loading
