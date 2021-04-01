import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CreateVehicle from './screens/CreateVehicle';
import AdminScreen from './screens/AdminScreen';
import RecordScreen from './screens/RecordScreen';
import Dashboard from './screens/DashBoardScreen';
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <HomeScreen />
    // {/* <div className="header">
    //   <Navbar />
    // </div> */}
    // {/* <div className="main"> */}

    // {/* </div>  */}
    // {/* <div className="footer">
    //   <Footer />
    // </div> */}
  );
}
export default App;