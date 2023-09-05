import { styled } from "styled-components";
import { HiMagnifyingGlass, HiArrowsUpDown } from "react-icons/hi2";
import Select from "../../ui/Select";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  width: calc(100% - 4rem);
  margin: 0 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  border: 1px solid var(--color-gray-500);
  border-radius: 0.5rem;
  min-height: 2rem;

  & svg {
    font-size: 2.4rem;
    color: var(--color-gray-700);
    background-color: transparent;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin: 0 auto;
  padding: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1.5rem;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & p {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-gray-700);
  }
`;

export default function SearchSortDiaryPages() {
  const [query, setQuery] = useState("");

  //
  const [searchParams, setSearchParams] = useSearchParams();
  //   const sortBy = searchParams.get("sortBy");
  //   const query = searchParams.get("query");

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search by title"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <HiMagnifyingGlass
          onClick={() => {
            searchParams.set("title", query);
            setSearchParams(searchParams);
          }}
        />
      </InputContainer>
      <FilterContainer>
        <p>
          <HiArrowsUpDown />
          Sort
        </p>
        <Select
          type="white"
          options={[
            { label: "By rating descending", value: "rating-desc" },
            { label: "By rating ascending", value: "rating-asc" },
            { label: "By date descending", value: "created_at-desc" },
            { label: "By date ascending", value: "created_at-asc" },
          ]}
          value={searchParams.get("sortBy") || "created_at-asc"}
          onChange={(e) => {
            searchParams.set("sortBy", e.target.value);
            setSearchParams(searchParams);
          }}
        />
      </FilterContainer>
    </Container>
  );
}
