import logo from "./logo.svg";
import './App.css';

import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ExampleFn from "./hooks-forms/BasicHook";

function Error(){
  return <h3>Page not found 404</h3>
}

function App() {
  return (
    <div className="App">
       <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/effect" component={ExampleFn} />
        <Route path="/" component={Home} exact />

        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
