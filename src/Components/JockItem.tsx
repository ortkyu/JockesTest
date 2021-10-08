import styled from 'styled-components'
import { JoksTypes } from '../Interfaces';

const Div = styled.div`
display: flex;
justify-content: center;
padding: 7px;
background: #ffffff;
width: 27vw;
height: 49px;
overflow: auto;
@media (max-width: 500px) {
    width: 100%;
  }
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

