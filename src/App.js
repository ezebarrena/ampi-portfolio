import PagInicio from "./pages/pagInicio.js"
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><PagInicio /></Route>
        
      </Switch>
  </BrowserRouter>
  );
}

export default App;
