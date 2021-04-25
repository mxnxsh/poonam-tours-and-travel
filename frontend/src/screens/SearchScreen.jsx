import React, { createRef, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBookings } from '../actions/dataEntryActions';
import LoadingBox from '../components/LoadingBox';
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
import RefreshIcon from '@material-ui/icons/Refresh';

const SearchScreen = props => {
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
  const bookingDetails = useSelector(state => state.bookingDetails);
  const { loading, error, entries } = bookingDetails;

  const { name = 'all' } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getBookings({
        name: name !== 'all' ? name : '',
      })
    );
  }, [dispatch, name]);
  const tableRef = createRef();

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div id='tableStyle'>
          <MaterialTable
            icons={tableIcons}
            columns={[
              { title: 'VEHICLE NUMBER', field: 'number' },
              { title: 'FROM-TO', field: 'location' },
              { title: 'Date', field: 'startDate' },
            ]}
            data={entries}
            title='All Entries'
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
            ]}
            options={{
              search: true,
              actionsColumnIndex: -1,
              headerStyle: {
                fontSize: '1.2rem',
                fontWeight: 700,
              },
              actionsCellStyle: {
                fontSize: '3rem',
              },
              draggable: false,
              exportButton: true,
              exportFileName: 'manish',
              paging: false,
              // filtering: true,
            }}
          />
        </div>
      )}
    </>
  );
};

export default SearchScreen;
