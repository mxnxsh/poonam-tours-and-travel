import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import AdminScreen from './AdminScreen';
import CreateCompany from './CreateCompany';
import CreateVehicle from './CreateVehicle';
import Companines from './Companines';
import Vehicles from './Vehicles';
import EditVehicle from './EditVehicle';
import EditCompany from './EditCompany';
import RecordScreen from './RecordScreen';
import EditRecordScreen from './EditAdminScreen';
import BillScreen from './BillScreen';
import AllBillScreen from './AllBillScreen';
import BillDetailsScreen from './BillDetailsScreen';
import SearchScreen from './SearchScreen';
function HomeScreen() {
  return (
    <Router>
      <div className='grid-container'>
        <Navbar />
        <main>
          <ToastContainer />

          <Switch>
            <Route exact path='/:name?' component={Main} />
            <Route exact path='/admin/entry' component={AdminScreen} />
            <Route exact path='/admin/show-entries' component={RecordScreen} />
            <Route
              exact
              path='/admin/edit-entry/:id'
              component={EditRecordScreen}
            />
            <Route exact path='/admin/company' component={CreateCompany} />
            <Route exact path='/admin/show-companies' component={Companines} />
            <Route
              exact
              path='/admin/edit-company/:id'
              component={EditCompany}
            />
            <Route exact path='/admin/vehicle' component={CreateVehicle} />
            <Route exact path='/admin/show-vehicles' component={Vehicles} />
            <Route
              exact
              path='/admin/edit-vehicle/:id'
              component={EditVehicle}
            />
            <Route path='/admin/bill' component={BillScreen} />
            <Route path='/admin/all-bills' component={AllBillScreen} />
            <Route
              path='/admin/bill-detail/:id'
              component={BillDetailsScreen}
            />
            <Route
              path='/search/name/:name?'
              component={SearchScreen}
              exact
            ></Route>{' '}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default HomeScreen;
