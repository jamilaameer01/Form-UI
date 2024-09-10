import React from 'react';
import Education from '../Components/Education';

const EducationFormPage = ({ onBack, onNext }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-red-600 font-bold mb-4">Education Information</h1>
      <Education />
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EducationFormPage;
