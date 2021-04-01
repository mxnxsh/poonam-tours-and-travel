import React, { useEffect, forwardRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { deleteVehicle, getvehicleDetails } from '../actions/adminActions';
import LoadingBox from '../components/LoadingBox';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  Remove,
  ViewColumn,
} from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ClearIcon from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import RefreshIcon from '@material-ui/icons/Refresh';
import { VEHICLE_DELETE_RESET } from '../constants/adminConstants';
const Vechicles = (props) => {
  const dispatch = useDispatch();
  const vehicleDetails = useSelector(state => state.vehicleDetails);
  const vehicleDelete = useSelector(state => state.deleteVehicle);

  const {
    vehicles: listVechicles,
    loading: vechiclesLoading,
    error: vechiclesError,
  } = vehicleDetails;
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = vehicleDelete;

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: VEHICLE_DELETE_RESET });
    }
    dispatch(getvehicleDetails());
  }, [dispatch, successDelete]);

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => (
      <ClearIcon {...props} ref={ref} fontSize='large' />
    )),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} fontSize='large' />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => (
      <SaveAltIcon {...props} ref={ref} fontSize='large' />
    )),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => (
      <FirstPageIcon {...props} ref={ref} fontSize='large' />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPageIcon {...props} ref={ref} fontSize='large' />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRightIcon {...props} ref={ref} fontSize='large' />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeftIcon {...props} ref={ref} fontSize='large' />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => (
      <SearchIcon {...props} ref={ref} fontSize='large' />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const tableRef = createRef();

  const deleteHandler = vehicle => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteVehicle(vehicle._id));
    }
  };
  return (
    <>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <p>{errorDelete}</p>}
      {vechiclesLoading ? (
        <LoadingBox></LoadingBox>
      ) : vechiclesError ? (
        <p>{vechiclesError}</p>
      ) : (
        <div id='tableStyle'>
          <MaterialTable
            icons={tableIcons}
            columns={[
              {
                title: 'Number',
                field: 'number',
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.name.length,
              },
              { title: 'Base-Price', field: 'basePrice' },
              { title: 'Date', field: 'date' },
            ]}
            data={listVechicles}
            title='All Vehicles'
            actions={[
              {
                icon: () => <EditIcon color='primary' fontSize='large' />,
                tooltip: 'Edit',
                iconProps: {},
                onClick: (event, rowData) => {
                  props.history.push(`/admin/edit-vehicle/${rowData._id}`)
                },
              },
              {
                icon: () => <RefreshIcon fontSize='large' />,
                tooltip: 'Refresh Data',
                isFreeAction: true,
                onClick: () =>
                  tableRef.current && tableRef.current.onQueryChange(),
              },
              {
                icon: () => <DeleteIcon color='secondary' fontSize='large' />,
                iconProps: {},
                tooltip: 'Delete',
                onClick: (event, rowData) => {
                  // alert(`Are you confirm to delete ${rowData.name}`);
                  deleteHandler(rowData);
                },
              },
            ]}
            options={{
              search: true,
              actionsColumnIndex: -1,
              headerStyle: {
                fontSize: '2rem',
              },
              actionsCellStyle: {
                fontSize: '2rem',
              },
              draggable: false,
              exportButton: true,
              exportFileName: 'manish',
              // filtering: true,
              localization: {
                pagination: {
                  labelRowsPerPage:20
                }
              }
            }}
          />
        </div>
      )}
    </>
  );
};

export default Vechicles;
