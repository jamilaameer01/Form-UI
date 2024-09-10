# Candidate Form Management System

This project is built for managing candidate information through a form. It allows candidates to submit basic information, education history, and work experience. This repository contains the **frontend** built with **React.js**, **Tailwind CSS**, and **Formik/Yup** for form validation.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- **Candidate Information Form**: 
  - Basic Info (Name, Email, Phone, etc.)
  - Education History (Institutions, Degrees, CGPA)
  - Work Experience (Companies, Positions, Durations)
- **Frontend**: 
  - Responsive design with **Tailwind CSS**
  - Form validation using **Formik** and **Yup**
- **Validation**: 
  - Both frontend and backend validation

## Technologies

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Formik** for form management
- **Yup** for validation

### Development Tools:
- **Postman** for API testing
- **Nodemon** for development
- **Git** for version control

## Installation

### Prerequisites

- **Node.js** (v12 or later)
- **npm** or **yarn**

### Backend Setup

1. Clone the repository:

    ```bash
    git clone [https://github.com/your-username/candidate-form-management.git](https://github.com/jamilaameer01/Form-UI/edit/main/README.md)
    cd Form-UI
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and set your environment variables:

    ```bash
    MONGO_URI=Your_mongodb_uri
    PORT=PORT_NUMBER
    ```


### Frontend Setup

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Run the frontend app:

    ```bash
    npm start
    ```

## Usage

Once the server and frontend are running, you can access the form at `http://localhost:3000`.

1. Fill out the candidate form with:
  - Basic Info (Name, Email, Phone, etc.)
  - Education History (Institutions, Degrees, CGPA)
  - Work Experience (Companies, Positions, Durations)
    
2. Submit the form, and the data will be sent to the backend for processing.


## Screenshots

Here, you can include some screenshots of your project in action.

## License

This project is licensed under the MIT License.
