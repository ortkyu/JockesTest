import { Cart } from "./Cart";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../store/reducers';

const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 40px;
background: #8c73f8;
margin-bottom: 20px;
a {
  text-decoration: none;
  cursor: pointer;
   }
a:link {
    color: #fff;
   }
   a:visited {
    color: #fff;
   }
`
const DivCount = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 22px;
background: #f8737a;
border-radius: 50px;
margin-top: -73px;
margin-left: 55px;
`

export const Header = () => {
  const jockCart = useSelector((state: RootState) => state.cartJocks.jockes);
  const itemCount = jockCart.length

  return (
    <Div>
      <NavLink to={"/"}>
        <h1>
          Jocks
        </h1>
      </NavLink>
      <NavLink to={"/cart"}>
        <h1>
          cart
        </h1>
        {itemCount > 0 && <DivCount>{itemCount}</DivCount>}
      </NavLink>
    </Div>
  );
}