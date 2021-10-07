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
`

// categories: []
// created_at: "2020-01-05 13:42:30.480041"
// icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png"
// id: "1o-2xysEQayatHfzLkat6Q"
// updated_at: "2020-01-05 13:42:30.480041"
// url: "https://api.chucknorris.io/jokes/1o-2xysEQayatHfzLkat6Q"
// value: "Chuck Norris ate a brownie once"


// const [click, setClick] = useState(false)
// const intervalRef = useRef();

// useEffect(() => {
//     if (!click) {
//         const id: any = setInterval(() => dispatch(addJoke()), 1000);
//         intervalRef.current = id;
//     }
//     else if (click) {
//         clearInterval(intervalRef.current);
//     }
// }, [click]);


export const Main = () => {
    const dispatch = useDispatch();
    const { jock } = useSelector((state: RootState) => state.jock);
    // const [item, setItem] = useState([])
    const { jockes } = useSelector((state: RootState) => state.cartJocks);


    let click: React.MutableRefObject<boolean | undefined> = useRef();
    let timerJoke: any = useRef();
    const clickHandler = () => {
        if (!click.current) {
            timerJoke.current = setInterval(() => dispatch(addJoke()), 3000)
            click.current = true
        }
        else if (click.current) {
            clearInterval(timerJoke.current)
            click.current = false
        }
    }
    let clickToCart: React.MutableRefObject<boolean | undefined> = useRef();
    const clickHandlerCart = (jock: JoksTypes) => {
        if (!clickToCart.current || !jockes.includes(jock)) {
            dispatch(addJokeToCart(jock))
            clickToCart.current = true
        }
        else if (clickToCart.current || jockes.includes(jock)) {
            dispatch(deleteItemAction(jock.id))
            clickToCart.current = false
        }
    }

    return (
        <>
            <Div>
                <Button onClick={clickHandler}>Get joke</Button>
            </Div>
            <Div>
            {jock && <Button onClick={() => clickHandlerCart(jock)}>To Favorite</Button>}
            </Div>
            <div>
                {jock && <div key={jock.id} ><JockItem item={jock} /></div>}
            </div>
            <hr />

        </>
    );
}