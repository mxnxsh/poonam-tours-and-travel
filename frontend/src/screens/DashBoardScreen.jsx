import Menu from '../components/Menu';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import CreateVehicle from './CreateVehicle';
import AdminScreen from './AdminScreen';
import RecordScreen from './RecordScreen';
import CreateCompany from './CreateCompany';
const DashBoardScreen = props => {
  return (
    <div className='grid-container'>
      <Router>
        <Menu />
        <Navbar />
        {/* <Main /> */}

        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/vehicle' component={CreateVehicle} />
          <Route exact path='/company' component={CreateCompany} />
          <Route exact path='/admin' component={AdminScreen} />
          {/* <Route exact path='/' component={RecordScreen} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default DashBoardScreen;
