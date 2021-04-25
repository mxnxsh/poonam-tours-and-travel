import React, { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router';
import { getBookings } from '../actions/dataEntryActions';
import Logo from '../images/car1.jpg';
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

const Main = props => {
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
  const [name1, setName1] = useState('');
  const [show, setShow] = useState(false);
  const bookingDetails = useSelector(state => state.bookingDetails);
  const { loading, error, entries } = bookingDetails;
  const allBills = useSelector(state => state.allBills);
  const { loading: allBillLoading, error: allBillError, bills } = allBills;
  let { name = 'all', billName = 'bill' } = useParams();
  const dispatch = useDispatch();
  console.log('Outsidename', name);
  const submitHandler = e => {
    e.preventDefault();
    props.history.push(`/${name1}`);
    // dispatch(
    //   getBookings({
    //     name: name !== 'all' ? name : '',
    //   })
    // );
  };
  useEffect(() => {
    dispatch(
      getBookings({
        name: name !== 'all' ? name : '',
      })
    );
  }, [dispatch, name]);
  const hideShowHandler = () => {
    setShow(!show);
  };

  return (
    <main>
      <div className='bgimg '>
        <div
          className='row col'
          style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
        >
          <form onSubmit={submitHandler}>
            <input
              type='text'
              placeholder='Search...'
              style={{
                margin: ' 10px',
                // opacity: '1',
              }}
              onChange={e => setName1(e.target.value)}
            />
            <div className='row center'>
              <button
                style={{
                  margin: 'auto 10px',
                  backgroundColor: '#126e82',
                  border: 'none',
                  color: '#f8f5f1',
                }}
              >
                Entries
              </button>
              <button
                style={{
                  margin: 'auto 10px',
                  backgroundColor: '#126e82',
                  border: 'none',
                  color: '#f8f5f1',
                }}
              >
                Bills
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            height: '30px',
            width: '30px',
            cursor: 'pointer',
          }}
          onClick={hideShowHandler}
        >
          x
        </div>
        {/* <div style={{ display: show ? 'none' : 'block' }}> */}
        {name === 'all' ? (
          <div className=' row center col' style={{ marginTop: '40px' }}>
            <img src={Logo} alt='car1' height='200' width='400' />
            <p style={{ textAlign: 'center', width: '50%', color: 'white' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam molestias fugiat, dicta voluptatum in dolorem vel rerum
              sapiente, saepe reiciendis dignissimos, dolor et non hic.
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: show ? 'none' : 'block' }}>
              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <div className='row center'>
                  {/* <div className='card card-body'>
                    <table>
                      <thead>
                        <tr>
                          <th>Vehicle Number</th>
                          <th>From-To</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entries.map(entry => (
                          <tr key={entry._id}>
                            <td>{entry.number}</td>

                            <td>{entry.location}</td>

                            <td>{entry.startDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> */}
                  <MaterialTable
                    style={{ overflow: 'scroll', height: '400px' }}
                    icons={tableIcons}
                    columns={[
                      { title: 'VEHICLE NUMBER', field: 'number' },
                      { title: 'FROM-TO', field: 'location' },
                      { title: 'Date', field: 'startDate' },
                    ]}
                    data={entries}
                    title='All Entries'
                    options={{
                      search: false,
                      pageSizeOptions: [3, 6, 20, 30, 50, 75, 100],
                      pageSize: 3,

                      actionsColumnIndex: -1,
                      headerStyle: {
                        fontSize: '1.2rem',
                        fontWeight: 700,
                      },
                      actionsCellStyle: {
                        fontSize: '3rem',
                      },
                      draggable: false,
                      // paging: false,
                    }}
                    localization={{
                      pagination: {
                        labelDisplayedRows: '{from}-{to} of {count}',
                      },
                      toolbar: {
                        nRowsSelected: '{1} row(s) selected',
                        addRemoveColumns: 'remove',
                      },
                      header: {
                        actions: 'Actions',
                      },
                      body: {
                        emptyDataSourceMessage: 'No records to display',
                        filterRow: {
                          filterTooltip: 'Filter',
                        },
                      },
                    }}
                  />
                </div>
              )}
            </div>
          </>
        )}
        {/* </div> */}
      </div>
      <div className='row' style={{ margin: '50px' }}>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
      </div>

      <div className='aboutus flex-center'>
        <h1 className='row center'>ABOUT US</h1>
        <div className='row center'>
          <div className='div1'>1</div>
          <div className='div2'>2</div>
        </div>
      </div>
    </main>
  );
};
export default Main;
