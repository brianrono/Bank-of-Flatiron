import React, { useState } from 'react';

// SearchBar component
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

  // Event handler for search input change
    const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    };

  // Event handler for form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    };

    return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleInputChange}
    />
    <button type="submit">Search</button>
    </form>
);
};

export default SearchBar;