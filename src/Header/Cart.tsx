import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store/reducers';
import styled from 'styled-components'
import { clearCart } from '../store/Cart/action'
import { ListItem } from "../Components/ListItem";

const Div = styled.div`
text-align: center;
width: 200px;
height: 25px;
background: #f35757;
color: #fff;
cursor: pointer; 
`

export const Cart = () => {
    const jockCart = useSelector((state: RootState) => state.cartJocks.jockes);
    const dispatch = useDispatch();

if (!jockCart.length) {
    return <h1>there is nothing</h1>
}
    return (
        <div >
            <Div onClick={() => dispatch(clearCart())}>delete all</Div>
            <ListItem jockCart={jockCart} />
        </div>
    );
}

