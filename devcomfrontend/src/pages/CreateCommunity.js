// src/pages/CreateCommunity.js
import React from 'react';
import Navbar from '../components/Navbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createCommunity } from '../services/communityService';
import { useNavigate } from 'react-router-dom';

const CreateCommunity = () => {
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    name: '',
    communityDescription: '',
    isPrivate: false,
    isArchived: false,
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Community name is required'),
    communityDescription: Yup.string().required('Description is required'),
    isPrivate: Yup.boolean(),
    isArchived: Yup.boolean(),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      // Call the createCommunity service function
      const newCommunity = await createCommunity(values);
      
      // Set success status
      setStatus({ success: 'Community created successfully!' });
      
      // Reset the form fields
      resetForm();
      
      // Redirect to the community page or another desired route
      // Assuming you want to navigate to the community list after creation
      setTimeout(() => navigate('/community'), 2000);
      
      // If you have a specific community page, navigate using its ID
      // setTimeout(() => navigate(`/community/${newCommunity.id}`), 2000);
      
    } catch (error) {
      // Set error status with the message from backend or a default message
      setStatus({ error: error.response?.data?.message || 'Failed to create community.' });
      console.error('Error creating community:', error);
    } finally {
      // Finish the submission state
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Create Community</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit} // Assign handleSubmit here
        >
          {({ isSubmitting, status }) => (
            <Form>
              {/* Community Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Community Name
                </label>
                <Field type="text" className="form-control" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>

              {/* Community Description */}
              <div className="mb-3">
                <label htmlFor="communityDescription" className="form-label">
                  Description
                </label>
                <Field as="textarea" className="form-control" id="communityDescription" name="communityDescription" rows="3" />
                <ErrorMessage name="communityDescription" component="div" className="text-danger" />
              </div>

              {/* Is Private */}
              <div className="form-check mb-3">
                <Field type="checkbox" className="form-check-input" id="isPrivate" name="isPrivate" />
                <label className="form-check-label" htmlFor="isPrivate">
                  Private Community
                </label>
              </div>

              {/* Is Archived */}
              <div className="form-check mb-3">
                <Field type="checkbox" className="form-check-input" id="isArchived" name="isArchived" />
                <label className="form-check-label" htmlFor="isArchived">
                  Archive Community
                </label>
              </div>

              {/* Status Messages */}
              {status && status.success && <div className="alert alert-success">{status.success}</div>}
              {status && status.error && <div className="alert alert-danger">{status.error}</div>}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{' '}
                    Creating...
                  </>
                ) : (
                  'Create Community'
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateCommunity;
