import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Route } from "react-router-dom";
import { Cart } from "./Header/Cart";
import styled from 'styled-components'


const Div = styled.div`
background: #C4C4C4;
height: 100vh;
`
function App() {
  return (
    <Div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/cart" component={Cart} />
    </Div>
  );
}

export default App;
