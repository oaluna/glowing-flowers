import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

import NavLink from '../../components/navigation/NavLink';

const sideBar = css`
  @media (min-width: 768px) {
    width: 392px;
  }
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80%;
  height: 100%;
  margin: 0;
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  background-color: #fff;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  z-index: 2000;
  padding: 40px 40px 60px 40px;
  width: 100%;

  > li {
    margin-bottom: 20px;
    padding: 10px;
  }
`;

function SideBar({ onClick, refe }) {
  return (
    <ul ref={refe} className={sideBar}>
      <NavLink onClick={onClick}>
        <CloseOutlined />
        <small>close</small>
      </NavLink>

      <NavLink>
        <Link to="/products/all-occasions">All Occasions</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/holidays">Holidays</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/bridal">Bridal</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/well-wishes">Well Wishes</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/deals">Deals</Link>
      </NavLink>
    </ul>
  );
}

export default SideBar;
