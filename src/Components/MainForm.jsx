import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import axios from 'axios';

const MainForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    PersonalInfo: {},
    Education: [],
    Experience: [],
  });

  const handleNext = (stepData) => {
    // Merge new step data with existing formData
    setFormData((prev) => ({
      ...prev,
      ...stepData,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (experienceData) => {
    const finalData = {
      ...formData,
      ...experienceData, // Add Experience data on the final submission
    };

    try {
      const response = await axios.post('http://localhost:1337/api/main-forms?populate=*', {
        data: finalData,
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {currentStep === 0 && (
        <PersonalInfo onNext={handleNext} formData={formData.PersonalInfo} />
      )}
      {currentStep === 1 && (
        <Education onNext={handleNext} onBack={handleBack} formData={formData.Education} />
      )}
      {currentStep === 2 && (
        <Experience onBack={handleBack} onSubmit={handleSubmit} formData={formData.Experience} />
      )}
    </div>
  );
};

export default MainForm;
