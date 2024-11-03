import React from "react";
import Form from "next/form";
import SearchFormReset from "@/app/components/searchFormReset";

const SearchForm = () => {
  const query = "Test";

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search for startups"
      />

      <div className="flex gap-2">{query && <SearchFormReset />}</div>
    </Form>
  );
};

export default SearchForm;
