// import { NumberFilter } from 'components/NumberFilter/NumberFilter';
// import { NumbersList } from 'components/NumbersList/NumbersList';
// import { SearchByNumber } from './SearchByNumber/SearchByNumber';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { SearchByNumber } from '../SearchByNumber/SearchByNumber';
import { SearchByRegion } from '../SearchByRegion/SearchByRegion';
// import { useState } from 'react';

import dat from '../../numbe.json';

export const AutoNum = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="search-by-number"
          element={<SearchByNumber data={dat} />}
        ></Route>
        <Route path="search-by-region" element={<SearchByRegion />}></Route>
      </Route>
    </Routes>
  );
  // return (
  //   <Container>
  //     <button>Пошук по номеру</button>
  //     <button>Пошук по регіону</button>
  //     <SearchByNumber data={dat} />
  //     {/* <NumberFilter onChange={onChange} />
  //     {query === '' ? (
  //       <p>Введіть перші два символи авто</p>
  //     ) : (
  //       <NumbersList data={numb()} />
  //     )} */}
  //   </Container>
  // );
};
