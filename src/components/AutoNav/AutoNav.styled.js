import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  /* text-shadow: 1px 1px 1px blue, 2px 2px 1px blue; */

  font-size: 18px;
  font-weight: bold;

  padding-top: 20px;
  padding-bottom: 20px;

  /* :first-child {
    color: white;

    text-shadow: 1px 1px 1px yellow, 2px 2px 1px yellow;
  } */

  :not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    scale: 1.2;
    color: yellow;
    text-shadow: 1px 1px 1px blue, 2px 2px 1px blue;

    :not(:first-child) {
      color: blue;
      text-shadow: 1px 1px 1px yellow, 2px 2px 1px yellow;
    }

    /* text-shadow: 1px 1px 1px red, 2px 2px 1px red; */
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #5500ff;
  }
`;
