import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  const CheckInInput = (props) => (
    <input className="check-in-input" type="date" {...props} />
  );
  const CheckOutInput = (props) => (
    <input className="check-out-input" type="date" {...props} />
  );

  return (
    <div className="App">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="Big-form">
            <div className="Middle-section">
              <div className="label">Location</div>
              <Field
                className="Field-text"
                type="string"
                name="location"
                placeholder="Where are you going?"
              />
            </div>
            <div className="divider" />
            <div className="Middle-section">
              <div className="label">Check in</div>
              <Field
                className="Field-text"
                name="checkIn"
                as={CheckInInput}
                placeholder="Add dates"
              />
            </div>
            <div className="divider" />
            <div className="Middle-section">
              <div className="label">Check out</div>
              <Field
                className="Field-text"
                name="checkOut"
                as={CheckOutInput}
                placeholder="Add dates"
              />
            </div>
            <div className="divider" />
            <div className="Middle-section">
              <div className="label">Guests</div>
              <Field
                className="Field-text"
                type="number"
                name="guests"
                placeholder="Add guests"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button
              className="Submit-button"
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
