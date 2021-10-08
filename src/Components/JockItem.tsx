import styled from 'styled-components'
import { JoksTypes } from '../Interfaces';

const Div = styled.div<{width: string | undefined}>`
display: flex;
justify-content: center;
padding: 7px;
background: #ffffff;
width: ${({width}) =>  width ? width : '27vw'};
height: 49px;
overflow: auto;
@media (max-width: 500px) {
    width: 80vw;
  }
`
interface ItemProps {
    item: JoksTypes
    width?: string | undefined
}

export const JockItem: React.FC<ItemProps> = ({ item, width }) => {

    return (
        <Div width={width}>
            {item.value}
        </Div>
    );
}

