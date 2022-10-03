import { NumberFilter } from 'components/NumberFilter/NumberFilter';
import { NumbersList } from 'components/NumbersList/NumbersList';
import { useState } from 'react';

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
    <>
      <NumberFilter onChange={onChange} />
      {query === '' ? (
        <p>Введіть перші два символи авто</p>
      ) : (
        <NumbersList data={numb()} />
      )}
    </>
  );
};
