import { useSelector, useDispatch } from "react-redux";
import { addJokeInterval, addJoke } from "../store/Joke/action";
import { RootState } from "../store/reducers";
import { favoriteJock } from "../store/Favorite/action";
import { JockItem } from "../Components/JockItem";
import styled from "styled-components";
import { useEffect } from "react";

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
const Button = styled.button`
  border-radius: 3px;
  width: 100px;
  height: 30px;
  color: #fff;
  background: #f78f8f;
  margin: 5px;
  cursor: pointer; 
`;

export const Main = () => {
  const dispatch = useDispatch();
  const { jock } = useSelector((state: RootState) => state.jock);

useEffect((): any => {
return () => dispatch(addJokeInterval(true))
}, [])

  return (
    <DivWrap>
      <Div>
        <Button onClick={() => dispatch(addJoke())}>get jock</Button>
        <Button onClick={() => dispatch(addJokeInterval())}>interval jock</Button>
        <Button onClick={() => {jock && dispatch(favoriteJock(jock))}}>To Favorite</Button>
      </Div>
      <div>
        {jock && (
            <JockItem width={'80vw'} item={jock} />
        )}
      </div>
    </DivWrap>
  );
};
