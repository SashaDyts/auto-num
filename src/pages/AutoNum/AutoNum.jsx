import { NumberFilter } from 'components/NumberFilter/NumberFilter';
import { NumbersList } from 'components/NumbersList/NumbersList';
import { useState } from 'react';

import dat from '../../numbe.json';

export const AutoNum = () => {
  const [query, setQuery] = useState('');

  const onChange = value => {
    setQuery(value);
  };

  const numb = () => {
    const normalizedQuery = query.toUpperCase();

    console.log('HA' === 'HA');

    return dat.filter(number =>
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
