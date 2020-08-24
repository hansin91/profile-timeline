import React, { Fragment } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/styles/index.scss'
import Header from './components/Header'
import Icons from './components/Icons'
import NavigationWidgetSmall from './components/NavigationWidgetSmall'

function App() {
  return (
    <Router>
      <Fragment>
        <NavigationWidgetSmall />
        <Header />
        <Icons />
      </Fragment>
    </Router>
  );
}

export default App;
