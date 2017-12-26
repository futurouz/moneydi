import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import {init as firebaseInit} from './firebase';
import Register from "./components/register/Register";

const rootReducer = combineReducers({form: formReducer});
const store = createStore(rootReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
};
