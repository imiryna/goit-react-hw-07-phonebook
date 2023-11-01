import React from 'react';
import { FilterCont, Label, Input } from './filter.styled';
import { useDispatch} from 'react-redux';
import { setFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
 

  const handleInputFilter = e => {
    dispatch(setFilter(e.target.value));
};


  return (
    <FilterCont>
      <Label>
        Find contacts by name
        <Input type="text" onChange={handleInputFilter} />
      </Label>
    </FilterCont>
  );
};
