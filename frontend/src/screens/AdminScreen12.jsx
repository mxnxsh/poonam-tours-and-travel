import React,{useState} from 'react';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StorageIcon from '@material-ui/icons/Storage';
import CommuteIcon from '@material-ui/icons/Commute';
import CreateVehicle from './CreateVehicle'
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const AdminScreen = () => {
const [state, setstate] = useState(false)
  const addCustomer = () => {
    <Link to ='/customer'/>
  }

  return (
    <>
      <div
        className='row start container'
        style={{ alignItems: 'flex-start' }}
      >
        <Button
          style={{ marginRight: '1rem' }}
          icon={<StorageIcon />}
        >
          Add Entry
        </Button>
        <Button
          style={{ marginRight: '1rem' }}
          icon={<CommuteIcon />}
        >
          Add Vehicle
        </Button>
        <Button
          style={{ marginRight: '1rem' }}
          icon={<SupervisorAccountIcon />}
          addCustomer={addCustomer}

        >
          <Link to ='/customer'>Add Customer</Link>
  
        </Button>
      </div>
    </>
  );
};

export default AdminScreen;
