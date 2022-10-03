import { NumberFilter } from 'components/NumberFilter/NumberFilter';
import { NumbersList } from 'components/NumbersList/NumbersList';
import { SearchByNumber } from './SearchByNumber/SearchByNumber';
import { useState } from 'react';

import { Container } from './AutoNum.styled';

import dat from '../../numbe.json';

export const AutoNum = () => {
  return (
    <Container>
      <button>Пошук по номеру</button>
      <button>Пошук по регіону</button>
      <SearchByNumber data={dat} />
      {/* <NumberFilter onChange={onChange} />

      {query === '' ? (
        <p>Введіть перші два символи авто</p>
      ) : (
        <NumbersList data={numb()} />
      )} */}
    </Container>
  );
};
