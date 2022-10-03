import { NumberFilter } from 'components/NumberFilter/NumberFilter';
import { NumbersList } from 'components/NumbersList/NumbersList';
import { useState } from 'react';
import { Container } from './SearchByNumber.styled';

export const SearchByNumber = ({ data }) => {
  const [query, setQuery] = useState('');

  const onChange = value => {
    setQuery(value);
  };

  const numb = () => {
    const normalizedQuery = query.toUpperCase();

    return data.filter(number =>
      number.number.join(' ').includes(normalizedQuery)
    );
  };

  return (
    <Container>
      <NumberFilter
        onChange={onChange}
        maxLength={2}
        textTransform="uppercase"
      />
      {query === '' ? (
        <p style={{ color: 'white' }}>Введіть перші два символи авто</p>
      ) : (
        <NumbersList data={numb()} whatToSearch="location" />
      )}
    </Container>
  );
};
