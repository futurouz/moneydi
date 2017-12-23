import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import ProfileForm from './components/ProfileForm';
import InfoForm from './components/InfoForm';
import CreditForm from './components/CreditForm';
import Agreement from './components/Agreement';
import Thanks from './components/Thanks';
import {init as firebaseInit} from './firebase';

const rootReducer = combineReducers({form: formReducer})

const store = createStore(rootReducer)

export default class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={ProfileForm}/>
            <Route path="/registerCon" component={InfoForm}/>
            <Route path="/registerCon2" component={CreditForm}/>
            <Route path="/agreement" component={Agreement}/>
            <Route path="/thankyou" component={Thanks}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
};
