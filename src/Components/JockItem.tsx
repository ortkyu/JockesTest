import styled from 'styled-components'
import { JoksTypes } from '../Interfaces';

const Div = styled.div`
display: flex;
justify-content: center;
padding: 10px;
background: #dcdae4;
margin: 20px;
width: 268px;
height: 49px;
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

