import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { ChatBot } from "./chatBot";
import "./assets/styles/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/chatBot"
          render={() => (
            <Switch>
              <Route exact path="/chatBot">
                <ChatBot />
              </Route>
            </Switch>
          )}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}
