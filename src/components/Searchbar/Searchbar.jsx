import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { search } = values;
    const handleSearch = search.toLowerCase().trim();
    if (handleSearch === '') {
      return toast.warn('Bad request!');
    }
    onSubmit(handleSearch);
    resetForm();
  };

  return (
    <header className="searchbar">
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className="searchForm">
          <button type="submit" className="searchForm-button">
            <FcSearch size="2em" />
          </button>

          <Field
            className="searchForm-input"
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};