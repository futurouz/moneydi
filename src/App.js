import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import GeneralForm from './components/GeneralForm';
import Thanks from './components/Thanks'

const rootReducer = combineReducers({form: formReducer})

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/MoneyDiApp" component={GeneralForm}/>
            <Route path="/thankyou" component={Thanks}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
};
