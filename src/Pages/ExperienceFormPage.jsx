
import React from 'react';
import Experience from '../Components/Experience';

const ExperienceFormPage = ({ onBack }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-red-600 font-bold mb-4">Experience Information</h1>
      <Experience />
      <div className=" mt-4">
        <button
          onClick={onBack}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Back
        </button>
      
      </div>

     
    </div>
  );
};

export default ExperienceFormPage;
