import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  Educations: Yup.array()
    .of(
      Yup.object().shape({
        DegreeName: Yup.string().required('Degree Name is required'),
        InstituteName: Yup.string().required('Institute Name is required'),
        Number: Yup.number().required('Number is required').positive('Number must be positive').min(0, 'Number must be at least 0'),
      })
    )
    
});

const Education = ({ onNext, onBack, formData }) => {
  return (
    <Formik
      initialValues={{
        Educations: formData?.Educations || [{ DegreeName: '', InstituteName: '', Number: '' }],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onNext({ Education: values.Educations });
      }}
    >
      {({ values, isValid, dirty }) => (
        <Form className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Education</h1>
          <FieldArray name="Educations">
            {({ push, remove }) => (
              <>
                {values.Educations.map((Educations, index) => (
                  <div key={index} className="mb-4 border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold">Education {index + 1}</h2>
                      {values.Educations.length > 1 && (
                        <button
                          type="button"
                          className="text-red-500"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1" htmlFor={`Educations.${[index]}.DegreeName`}>
                        Degree Name
                      </label>
                      <Field
                        type="text"
            
                        name={`Educations.${[index]}.DegreeName`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`Educations.${[index]}.DegreeName`} component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1" htmlFor={`Educations.${[index]}.InstituteName`}>
                        Institute Name
                      </label>
                      <Field
                        type="text"
                        name={`Educations.${[index]}.InstituteName`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`Educations.${[index]}.InstituteName`} component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1"  htmlFor={`Educations.${[index]}.Number`}>
                         Number
                      </label>
                      <Field
                        type="Number"
      
                        name={`Educations.${[index]}.Number`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`Educations.${[index]}.Number`} component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                   
                    const lastEducation = values.Educations[values.Educations.length - 1];
                    const allFieldsFilled = lastEducation.DegreeName && lastEducation.InstituteName && lastEducation.Number !== '';

                    
                    if (allFieldsFilled) {
                      push({ DegreeName: '', InstituteName: '', Number: '' });
                    }
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  disabled={
                    
                    !values.Educations[values.Educations.length - 1]?.DegreeName ||
                    !values.Educations[values.Educations.length - 1]?.InstituteName ||
                    values.Educations[values.Educations.length - 1]?.Number === ''
                  }
                >
                  Add Education
                </button>
              </>
            )}
          </FieldArray>

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              disabled={!isValid || !dirty} 
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Education;
