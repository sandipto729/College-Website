import React from 'react'

const skeletonNews = () => {
  return (
    <div>
      <div className="border p-6 rounded shadow-2xl w-[100%] max-w-[320px]">
      <div className="h-4 bg-gray-300 rounded-full mb-4 animate-bounce"></div>
      <div className="h-8 bg-gray-300 rounded-full mb-4 animate-pulse"></div>
      </div>
    </div>
  )
}

export default skeletonNews
