import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import Services from './component/Services/Services';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Teachers from './component/Teachers/Teachers';

function App() {
  return (
    <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path = '/'>
              <Home></Home>
            </Route>
            <Route  path = '/home'>
              <Home></Home>
            </Route>
            <Route path = '/services'>
              <Services></Services>
            </Route>
            <Route path = '/review'>
              <Review></Review>
            </Route>
            <Route path = '/teachers'>
              <Teachers></Teachers>
              </Route>
            <Route path = '/about'>
              <About></About>
            </Route>
            <Route path = '*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
