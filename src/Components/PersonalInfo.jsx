
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required('First Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  PhoneNumber: Yup.string()
    .matches(/^\d{11}$/, 'PhoneNumber number must be  11 digits')
    .required('PhoneNumber number is required'),

});

const PersonalInfo = ({ onNext, formData }) => {
  return (
    <Formik
    initialValues={formData || { FirstName: '', Email: '', PhoneNumber: '' }} // Pass formData to preserve state
    validationSchema={validationSchema}
    onSubmit={(values) => {
      onNext({ PersonalInfo: values }); // Only update PersonalInfo part
    }}
  >
      {({ isValid, dirty }) => (
        <Form className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Personal Info</h1>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1" htmlFor="FirstName">
              First Name
            </label>
            <Field type="text" id="FirstName" name="FirstName" className="w-full p-2 border rounded-lg" />
            <ErrorMessage name="FirstName" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1" htmlFor="Email">
              Email
            </label>
            <Field type="Email" id="Email" name="Email" className="w-full p-2 border rounded-lg" />
            <ErrorMessage name="Email" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
              <label htmlFor="PhoneNumber" className="block text-gray-700">PhoneNumber Number</label>
              <Field
                type="tel"
                id="PhoneNumber"
                name="PhoneNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="PhoneNumber" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="portfolio" className="block text-gray-700">Portfolio Link (Optional)</label>
              <Field
                type="url"
                id="portfolio"
                name="portfolio"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="portfolio" component="div" className="text-red-600 text-sm mt-1" />
            </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={!isValid || !dirty}
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfo;
