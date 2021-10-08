import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJoke } from "../store/Joke/action";
import { RootState } from '../store/reducers';
import { addJokeToCart, deleteItemAction } from '../store/Cart/action'
import { JoksTypes } from "../store/Cart/types";
import { JockItem } from "../Components/JockItem";
import styled from 'styled-components'

const Div = styled.div`
display: flex;
justify-content: center;
`
const Button = styled.button`
border-radius: 3px;
width: 100px;
height: 30px;
color: #fff;
background: #f78f8f;
margin: 5px;
`

export const Main = () => {
    const dispatch = useDispatch();
    const { jock } = useSelector((state: RootState) => state.jock);
    const { jockes } = useSelector((state: RootState) => state.cartJocks);

    const clickHandler = () => {
        dispatch(addJoke())
    }
    const clickHandlerCart = (jock: JoksTypes) => {
        if (!jockes.includes(jock)) {
            dispatch(addJokeToCart(jock))
        }
        else {
            dispatch(deleteItemAction(jock.id))
        }
    }

    return (
        <>
            <Div>
                <Button onClick={clickHandler}>Get joke</Button>
                {jock && <Button onClick={() => clickHandlerCart(jock)}>To Favorite</Button>}
            </Div>
            <div>
                {jock && <div key={jock.id} ><JockItem item={jock} /></div>}
            </div>
            <hr />

        </>
    );
}