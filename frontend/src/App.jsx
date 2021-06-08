import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/home';
import School from './components/skateSchool';
import User from './components/skateUser';
import Header from './components/header';
import Footer from './components/footer';
import SchoolDetails from './components/schoolDetails';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/user" component={User} />
          <Route exact path="/school" component={School} />
          <Route exact path="/school/:schoolId" component={SchoolDetails} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
