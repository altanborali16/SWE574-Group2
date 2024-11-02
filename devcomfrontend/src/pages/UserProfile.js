// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { fetchCurrentProfile, createProfile } from '../services/profileService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserProfile = () => {
  const { auth } = useAuth();
  const [profile, setProfile] = useState(null); // Stores the profile data
  const [loading, setLoading] = useState(true); // Indicates if the profile is being fetched
  const [error, setError] = useState(''); // Stores error messages
  const [creatingProfile, setCreatingProfile] = useState(false); // Indicates if the profile is being created
  const [createError, setCreateError] = useState(''); // Stores creation errors
  const [createSuccess, setCreateSuccess] = useState(''); // Stores creation success message

  // Function to fetch the profile
  const getProfile = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchCurrentProfile();
      if (data) {
        setProfile(data);
      } else {
        // Profile does not exist
        setProfile(null);
      }
    } catch (err) {
      setError('You have no profile please create one!');
      console.error('Error fetching profile:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch profile on component mount or when auth.token changes
  useEffect(() => {
    getProfile();
  }, [auth.token]);

  // Formik initial values for profile creation
  const initialValues = {
    bio: '',
    avatarUrl: '',
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    bio: Yup.string().required('Bio is required'),
    avatarUrl: Yup.string()
      .url('Invalid URL format')
      .required('Avatar URL is required'),
  });

  // Handle form submission to create profile
  const handleCreateProfile = async (values, { setSubmitting, resetForm }) => {
    setCreatingProfile(true);
    setCreateError('');
    setCreateSuccess('');

    try {
      const newProfile = await createProfile(values);
      setCreateSuccess('Profile created successfully.');
      resetForm();
      // After creating the profile, re-fetch it to update the state
      await getProfile();
    } catch (err) {
      setCreateError(
        err.response?.data?.message || 'Failed to create profile.'
      );
      console.error('Error creating profile:', err);
    } finally {
      setCreatingProfile(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>User Profile</h2>

        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && error && <div className="alert alert-danger">{error}</div>}

        {!loading && profile && (
          <div className="card mb-4" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              {/* Avatar Section */}
              <div className="col-md-4">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    className="img-fluid rounded-start"
                    alt={`${profile.username}'s avatar`}
                  />
                ) : (
                  <div
                    className="bg-secondary text-white d-flex align-items-center justify-content-center"
                    style={{ height: '100%', minHeight: '180px' }}
                  >
                    No Avatar
                  </div>
                )}
              </div>
              {/* Profile Details */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{profile.username}</h5>
                  <p className="card-text">
                    <strong>Bio:</strong> {profile.bio}
                  </p>
                  {/* Add more profile details as needed */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If profile does not exist, show the create profile form */}
        {!loading && !profile && (
          <div className="card" style={{ maxWidth: '600px' }}>
            <div className="card-body">
              <h5 className="card-title">Create Your Profile</h5>
              {createError && (
                <div className="alert alert-danger">{createError}</div>
              )}
              {createSuccess && (
                <div className="alert alert-success">{createSuccess}</div>
              )}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleCreateProfile}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* Bio */}
                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                      <Field
                        as="textarea"
                        className="form-control"
                        id="bio"
                        name="bio"
                        rows="3"
                      />
                      <ErrorMessage
                        name="bio"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    {/* Avatar URL */}
                    <div className="mb-3">
                      <label htmlFor="avatarUrl" className="form-label">
                        Avatar URL
                      </label>
                      <Field
                        type="url"
                        className="form-control"
                        id="avatarUrl"
                        name="avatarUrl"
                      />
                      <ErrorMessage
                        name="avatarUrl"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting || creatingProfile}
                    >
                      {creatingProfile ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>{' '}
                          Creating...
                        </>
                      ) : (
                        'Create Profile'
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
