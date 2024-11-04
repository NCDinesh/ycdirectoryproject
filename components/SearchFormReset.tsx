"use client";

import Link from 'next/link';
import React from 'react';
import { X } from 'lucide-react';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) form.reset(); // Reset the form fields
  };

  return (
  
    <button type="button" onClick={reset}>
      <Link href="/" className='search-btn text-white'> <X></X></Link>
    </button>
  );
};

export default SearchFormReset;
