"use client";

import React from "react";

interface SearchProps {
  query: string;
  setQuery: (val: string) => void;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="border px-4 py-2 rounded-lg w-1/2 shadow-sm focus:ring focus:ring-blue-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
