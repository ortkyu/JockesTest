import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Route } from "react-router-dom";
import { Cart } from "./Header/Cart";


function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
