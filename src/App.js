import { useHistory } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import Kasir from "./Kasir";

const App = () => {
  const history = useHistory();
  return (
    <>
      <div classsName="flex flex-col gap-5">
        <button className="p-2 border border-black rounded" onClick={() => history.push("/")}>Kasir</button>
        <button className="p-2 border border-black rounded" onClick={() => history.push("/admin")}>Admin</button>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Kasir /></Route>
          <Route exact path="/admin"><Admin /></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;