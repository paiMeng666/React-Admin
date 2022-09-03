import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login} ></Route>
      <Route path='/admin' component={Admin} ></Route>
    </BrowserRouter>
  );
}

export default App;
