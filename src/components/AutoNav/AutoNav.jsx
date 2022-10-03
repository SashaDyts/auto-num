import { NavContainer, NavItem } from './AutoNav.styled';

export const AutoNav = () => {
  return (
    <NavContainer>
      <NavItem end to="/search-by-number">
        Пошук за номером
      </NavItem>
      <NavItem end to="/search-by-region">
        Пошук за регіоном
      </NavItem>
    </NavContainer>
  );
};
