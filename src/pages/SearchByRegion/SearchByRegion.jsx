import { useState } from 'react';

import { NumberFilter } from 'components/NumberFilter/NumberFilter';
import { NumbersList } from 'components/NumbersList/NumbersList';

import { Container } from './SearchByRegion.styled';

export const SearchByRegion = ({ data }) => {
  const [query, setQuery] = useState('');

  const onChange = value => {
    setQuery(value.trim());
  };

  const numb = () => {
    const normalizedQuery = query.toLowerCase();

    return data.filter(
      number => number.location.toLowerCase().includes(normalizedQuery)

      // number.number.join(' ').includes(normalizedQuery)
    );
  };

  console.log(numb());
  return (
    <Container>
      <NumberFilter onChange={onChange} />
      {query === '' ? (
        <p style={{ color: 'white' }}>Введіть назву міста</p>
      ) : (
        <NumbersList data={numb()} whatToSearch="number" />
      )}
    </Container>
  );
};
