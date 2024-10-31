"use client";

import React from 'react';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) form.reset(); // Reset the form fields
  };

  return (
    <button type="button" onClick={reset}>
      X
    </button>
  );
};

export default SearchFormReset;
