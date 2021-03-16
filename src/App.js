import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Countries from './components/Countries/Countries';
import NotMatch from './components/NotMatch/NotMatch';
import Region from './components/Region/Region';
import RegionBloc from './components/RegionBloc/RegionBloc';
import Header from './components/Header/Header';
import CountryDetail from './components/CountryDetail.js/CountryDetail';
import RegionCountries from './components/RegionCountries/RegionCountries';
import BlocCountries from './components/blocCountries/BlocCountries';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
            <Route path='/region/:regions/country/:countryName'>
              <CountryDetail />
            </Route>
            <Route path='/regionalbloc/:bloc/country/:countryName'>
              <CountryDetail />
            </Route>
            <Route path='/regionalbloc/:blocName/countries'>
              <BlocCountries />
            </Route>
            <Route path='/region/:regions/countries'>
              <RegionCountries />
            </Route>
            <Route path='/country/:countryName'>
              <CountryDetail />
            </Route>
            <Route exact path="/">
              <Countries/>
            </Route>
            <Route path="/region">
              <Region />
            </Route>
            <Route path="/regionalbloc">
              <RegionBloc />
            </Route>
            <Route path="*">
              <NotMatch/>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
