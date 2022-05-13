import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from './Pages/Trending';
import Movies from './Pages/movies';
import Series from './Pages/Series';
import Search from './Pages/Search';
import { Container } from "@material-ui/core";
function App() {
  return (
    <BrowserRouter>
      <Header /> <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>);
} export default App;