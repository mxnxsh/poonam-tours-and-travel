import React, { useEffect, forwardRef, createRef } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookingData, getBookings } from '../actions/dataEntryActions';
import MaterialTable from 'material-table';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { DATA_DELETE_RESET } from '../constants/dataEntryConstants';
import LoadingBox from '../components/LoadingBox';
import { addToBill } from '../actions/billActions';

const RecordScreen = props => {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const dispatch = useDispatch();

  const bookingDetails = useSelector(state => state.bookingDetails);
  const { loading, error, entries } = bookingDetails;

  const deleteEntry = useSelector(state => state.deleteEntry);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = deleteEntry;

  const deleteHandler = entry => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteBookingData(entry._id));
    }
  };
  useEffect(() => {
    dispatch(getBookings());
    if (successDelete) {
      dispatch({ type: DATA_DELETE_RESET });
    }
  }, [dispatch, successDelete]);
  const addBillHandler = entry => {
    props.history.push('/admin/show-entries');
    dispatch(addToBill(entry._id));
  };
  const tableRef = createRef();

  return (
    <>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <p>{errorDelete}</p>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div id='tableStyle'>
          <MaterialTable
            icons={tableIcons}
            columns={[
              {
                title: 'Name',
                field: 'name',
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.name.length,
              },
              { title: 'Owner-Name', field: 'ownerName' },
              { title: 'Vehicle-Number', field: 'number' },
              { title: 'To-and-From', field: 'location' },
              { title: 'Fuel', field: 'fuel' },
              { title: 'Vehicle-Type', field: 'vehicleType' },
              { title: 'Base-Price', field: 'basePrice' },
              { title: 'Driver', field: 'driver' },
              { title: 'Show', field: 'show' },
              { title: 'Booked-by', field: 'book' },
              { title: 'Extra-HRS', field: 'extraHRS' },
              { title: 'Extra-KMS', field: 'extraKMS' },
              { title: 'Date', field: 'startDate' },
            ]}
            data={entries}
            title='Entries'
            actions={[
              {
                icon: () => <EditIcon color='primary' fontSize='large' />,
                tooltip: 'Edit',
                iconProps: {},
                onClick: (event, rowData) => {
                  props.history.push(`/admin/edit-entry/${rowData._id}`);
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
                  deleteHandler(rowData);
                },
              },
              {
                icon: () => <AddIcon fontSize='large' />,
                iconProps: {},
                tooltip: 'Delete',
                onClick: (event, rowData) => {
                  addBillHandler(rowData);
                },
              },
            ]}
            options={{
              search: true,
              actionsColumnIndex: -1,
              headerStyle: {
                fontSize: '1.2rem',
                fontWeight: 700,
              },
              actionsCellStyle: {
                fontSize: '2rem',
              },
              draggable: false,
              exportButton: true,
              exportFileName: 'manish',
              // filtering: true,
            }}
          />
        </div>
      )}
    </>
  );
};

export default RecordScreen;
