import { Outlet } from 'react-router-dom';
import { AutoNav } from '../AutoNav/AutoNav';
// import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <AutoNav />
      <Outlet />
    </>
  );
};
