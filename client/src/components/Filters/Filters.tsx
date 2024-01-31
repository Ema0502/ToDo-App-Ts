import React from "react";
import { TODO_FILTERS, FILTERS_BUTTONS } from "../../consts";
import { FilterValue } from "../../types/types";

interface Props {
  onFilterChange: (filter:  FilterValue) => void;
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
          return (
            <li key={key}>
              <a 
              href={href}
              className={filterSelected === key  ? 'selected' : ''}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue)
              }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}