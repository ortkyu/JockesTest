import { JoksTypes } from '../store/Joke/types';
import styled from 'styled-components'

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

    return (
        <Div >
            {item.value}
        </Div>
    );
}

