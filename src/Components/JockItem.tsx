import { JoksTypes } from '../store/Joke/types';
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { deleteItemAction } from '../store/Cart/action'

const Div = styled.div`
display: flex;
justify-content: center;
padding: 10px;
background: #dcdae4;
margin: 20px;

`
interface ItemProps {
    item: JoksTypes
}

export const JockItem: React.FC<ItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <Div onClick={() => dispatch(deleteItemAction(item.id))}>
            {item.value}
        </Div>
    );
}

