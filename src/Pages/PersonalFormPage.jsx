import React, { useState } from 'react';
import PersonalInfo from '../Components/PersonalInfo';

const PersonalFormPage = ({ onNext }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormStatusChange = (status) => {
    setIsFormSubmitted(status);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-red-600 font-bold mb-4">Personal Information</h1>
      <PersonalInfo onFormStatusChange={handleFormStatusChange} />
      <button
        onClick={isFormSubmitted ? onNext : null}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${isFormSubmitted ? 'hover:bg-blue-900' : 'cursor-not-allowed opacity-50'}`}
        disabled={!isFormSubmitted}
      >
        Next
      </button>
    </div>
  );
};

export default PersonalFormPage;

