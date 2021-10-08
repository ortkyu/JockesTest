import { JoksTypes } from '../Interfaces';
import { JockItem } from './JockItem';
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import { deleteItemAction } from '../store/Cart/action'

const Div = styled.div`
display: flex;
margin: 20px;
`
const Span = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
@media (max-width: 500px) {
    flex-wrap: nowrap;
    flex-direction: column;
}
`
const SpanDelete = styled.span`
text-align: center;
color: #fff;
background: #db3a3a;
writing-mode: vertical-rl;
cursor: pointer; 
`


interface ListItemProps {
    jockCart: JoksTypes[]
}

export const ListItem: React.FC<ListItemProps> = ({ jockCart }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Span>
                {jockCart.map(i =>
                    <Div>
                        <JockItem item={i} />
                        <SpanDelete onClick={() => dispatch(deleteItemAction(i.id))}>delete</SpanDelete>
                    </Div>
                )}

            </Span>
        </>
    );
}
