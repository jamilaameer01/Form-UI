import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

// Validation Schema (you can modify this as per your needs)
const validationSchema = Yup.object({
  isFresher: Yup.boolean().required(),
  Experiences: Yup.array().of(
    Yup.object().shape({
      CompanyName: Yup.string().required('Company Name is required'),
      Position: Yup.string().required('Position is required'),
      Duration: Yup.string().required('Duration is required'),
    })
  ),
});

const Experience = ({ onBack, onSubmit, formData }) => {
  const [isFresher, setIsFresher] = useState(formData?.isFresher || false);

  return (
    <Formik
      initialValues={{
        isFresher: formData?.isFresher || false,
        Experiences: formData?.Experiences || [{ CompanyName: '', Position: '', Duration: '' }],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit({ Experience: values.Experiences, isFresher: values.isFresher }); // Update Experience part
      }}
    >
      {({ values, isValid, dirty }) => (
        <Form className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Experience</h1>

          <div className="mb-4">
            <label className="mr-4">
              <Field type="radio" name="isFresher" value="true" checked={isFresher} onClick={() => setIsFresher(true)} />
              Fresher
            </label>
            <label>
              <Field type="radio" name="isFresher" value="false" checked={!isFresher} onClick={() => setIsFresher(false)} />
              Experienced
            </label>
          </div>

          {!isFresher && (
            <FieldArray name="Experiences">
              {({ insert, remove, push }) => (
                <div>
                  {values.Experiences.length > 0 &&
                    values.Experiences.map((Experiences, index) => (
                      <div key={index} className="mb-4 border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Experience {index + 1}</h3>
                        <div className="mb-2">
                          <label className="block text-sm font-medium mb-1" htmlFor={`Experiences.${[index]}.CompanyName`}>
                            Company Name
                          </label>
                          <Field
                            type="text"
                            name={`Experiences.${[index]}.CompanyName`}
                            className="w-full p-2 border rounded-lg"
                          />
                          <ErrorMessage name={`Experiences.${[index]}.CompanyName`} component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-2">
                          <label className="block text-sm font-medium mb-1" htmlFor={`Experiences.${[index]}.Position`}>
                            Position
                          </label>
                          <Field
                            type="text"
                            name={`Experiences.${[index]}.Position`}
                            className="w-full p-2 border rounded-lg"
                          />
                          <ErrorMessage name={`Experiences.${[index]}.Position`} component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-2">
                          <label className="block text-sm font-medium mb-1" htmlFor={`Experiences.${[index]}.Duration`}>
                            Duration
                          </label>
                          <Field
                            type="text"
                            name={`Experiences.${[index]}.Duration`}
                            className="w-full p-2 border rounded-lg"
                          />
                          <ErrorMessage name={`Experiences.${[index]}.Duration`} component="div" className="text-red-500 text-sm" />
                        </div>

                        {index > 0 && (
                          <div className="flex justify-between">
                            <button
                              type="button"
                              className="px-4 py-2 bg-red-500 text-white rounded-lg"
                              onClick={() => remove(index)}
                            >
                              Remove Experience
                            </button>
                          </div>
                        )}
                      </div>
                    ))}

                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      className={`px-4 py-2 bg-green-500 text-white rounded-lg ${
                        values.Experiences[values.Experiences.length - 1].CompanyName &&
                        values.Experiences[values.Experiences.length - 1].Position &&
                        values.Experiences[values.Experiences.length - 1].Duration
                          ? ''
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      onClick={() => push({ CompanyName: '', Position: '', Duration: '' })}
                      disabled={
                        !(
                          values.Experiences[values.Experiences.length - 1].CompanyName &&
                          values.Experiences[values.Experiences.length - 1].Position &&
                          values.Experiences[values.Experiences.length - 1].Duration
                        )
                      }
                    >
                      Add Experience
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
          )}

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
              Back
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg" disabled={!isValid || !dirty}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Experience;
