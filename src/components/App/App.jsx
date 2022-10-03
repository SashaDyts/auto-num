import { Route, Routes } from 'react-router-dom';
// import { Navigation } from 'components/Navigation/Navigation';
import { SearchByNumber } from 'pages/SearchByNumber/SearchByNumber';
import { SearchByRegion } from 'pages/SearchByRegion/SearchByRegion';

import dat from '../../numbe.json';

import { Container, Main } from './App.styled';
import { AutoNav } from 'components/AutoNav/AutoNav';

export const App = () => {
  // return (
  //   <Main>
  //     <Container>
  //       <Routes>
  //         <Route path="/" element={<Layout item={Navigation} />}></Route>
  //         <Route path="search-by-number" element={<Layout item={AutoNav} />}>
  //           <Route index element={<SearchByNumber data={dat} />} />
  //           <Route path="search-by-region" element={<SearchByRegion />} />
  //         </Route>
  //       </Routes>
  //     </Container>
  //   </Main>
  // );
  return (
    <Main>
      <Container>
        <AutoNav />
        <Routes>
          <Route
            path="search-by-number"
            element={<SearchByNumber data={dat} />}
          />
          <Route
            path="search-by-region"
            element={<SearchByRegion data={dat} />}
          />
        </Routes>
      </Container>
    </Main>
  );
};
