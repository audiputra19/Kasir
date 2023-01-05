import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import Kasir from "./Kasir";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Kasir /></Route>
        <Route exact path="/admin"><Admin /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;