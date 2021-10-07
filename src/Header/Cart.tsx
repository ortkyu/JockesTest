import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store/reducers';
import { JockItem } from '../Components/JockItem';
import styled from 'styled-components'
import { deleteItemAction, clearCart } from '../store/Cart/action'

const Span = styled.div`
display: flex;
justify-content: center;
`
export const Cart = () => {
    const jockCart = useSelector((state: RootState) => state.cartJocks.jockes);
    const dispatch = useDispatch();

    return (
        <div>
            <div onClick={() => dispatch(clearCart())}>delete all</div>
            {jockCart.map(i =>
                <Span>
                    <JockItem item={i} />
                    <span onClick={() => dispatch(deleteItemAction(i.id))}>x</span>
                </Span>
            )}
        </div>
    );
}

