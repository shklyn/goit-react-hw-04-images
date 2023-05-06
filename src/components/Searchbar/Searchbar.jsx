import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export function Searchbar({onSubmit}) {
  const [request, setRequest] = useState('');

  const setSearchValue = e => {
    setRequest(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(request);
  }

  return (
      <HeaderSearchbar>
        <SearchForm
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <SearchFormButton type="submit">
            <FaSearch style={{ width: '20px', height: '20px' }} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={setSearchValue}
          />
        </SearchForm>
      </HeaderSearchbar>
    );

}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
