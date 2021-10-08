import { useSelector, useDispatch } from "react-redux";
import { addJokeInterval, addJoke } from "../store/Joke/action";
import { RootState } from "../store/reducers";
import { cartJock } from "../store/Cart/action";
import { JockItem } from "../Components/JockItem";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  border-radius: 3px;
  width: 100px;
  height: 30px;
  color: #fff;
  background: #f78f8f;
  margin: 5px;
`;

export const Main = () => {
  const dispatch = useDispatch();
  const { jock } = useSelector((state: RootState) => state.jock);

  return (
    <>
      <Div>
        <Button onClick={() => dispatch(addJoke())}>get jock</Button>
        <Button onClick={() => dispatch(addJokeInterval())}>interval jock</Button>
        <Button onClick={() => dispatch(cartJock(jock))}>To Favorite</Button>
      </Div>
      <div>
        {jock && (
          <div key={jock.id}>
            <JockItem item={jock} />
          </div>
        )}
      </div>
      <hr />
    </>
  );
};
