import React, { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router';
import { getBookings } from '../actions/dataEntryActions';
import { fetchAllBills } from '../actions/createBillActions';

import Logo from '../images/logo.jpg';
import Truck from '../images/truck.png';
import Car1 from '../images/car1.jpg';
import Car2 from '../images/car2.jpg';
import Car3 from '../images/car3.jpg';
import Car4 from '../images/car4.jpg';

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
  let { name = 'all', billName = 'all' } = useParams();
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    props.history.push(`/${name1}`);
    // dispatch(
    //   fetchAllBills({
    //     billName: billName !== 'all' ? billName : '',
    //   })
    // );
    // dispatch(
    //   getBookings({
    //     name: name !== 'all' ? name : '',
    //   })
    // );
  };
  useEffect(() => {
    if (name !== 'all') {
      dispatch(
        getBookings({
          name: name !== 'all' ? name : '',
        })
      );
      dispatch(
        fetchAllBills({
          billName: name !== 'all' ? name : '',
        })
      );
    }
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
          <form>
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
                onClick={submitHandler}
              >
                Search
              </button>
              {/* <button
                style={{
                  margin: 'auto 10px',
                  backgroundColor: '#126e82',
                  border: 'none',
                  color: '#f8f5f1',
                }}
                onClick={submitHandler1}
              >
                Bills
              </button> */}
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
        {(name || billName) === 'all' ? (
          <div className=' row center col' style={{ marginTop: '40px' }}>
            <img src={Logo} alt='car1' height='200' width='400' />
            {/* <p style={{ textAlign: 'center', width: '50%', color: 'white' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam molestias fugiat, dicta voluptatum in dolorem vel rerum
              sapiente, saepe reiciendis dignissimos, dolor et non hic.
            </p> */}
          </div>
        ) : entries ? (
          <>
            <div style={{ display: show ? 'none' : 'block' }}>
              <div className='row center'>
                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <MaterialTable
                    style={{ overflow: 'scroll', height: '400px' }}
                    icons={tableIcons}
                    columns={[
                      { title: 'VEHICLE NUMBER', field: 'number' },
                      { title: 'FROM-TO', field: 'location' },
                      { title: 'Date', field: 'startDate' },
                    ]}
                    data={entries}
                    title={`Entries of ${name}`}
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
                )}
                {allBillLoading ? (
                  <LoadingBox></LoadingBox>
                ) : allBillError ? (
                  <p>{allBillError}</p>
                ) : (
                  <MaterialTable
                    style={{
                      overflow: 'scroll',
                      height: '400px',
                      marginLeft: '30px',
                    }}
                    icons={tableIcons}
                    columns={[
                      { title: 'Name', field: 'name' },
                      { title: 'Total', field: 'subTotal' },
                      { title: 'Date', field: `date` },
                    ]}
                    data={bills}
                    title={`Bill of ${name}`}
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
                )}
              </div>
            </div>
          </>
        ) : bills ? (
          `Hello ${billName}`
        ) : (
          'No data found'
        )}
        {/* </div> */}
      </div>
      <div className='row' style={{ margin: '50px' }}>
        <div className='row center col'>
          <img src={Truck} alt='car1' height='200' width='200' />
          {/* <p>Lorem ipsum dolor sit amet, </p> */}
        </div>
        <div className='row center col'>
          <img src={Car1} alt='car1' height='200' width='200' />
          {/* <p>Lorem ipsum dolor sit amet, </p> */}
        </div>
        <div className='row center col'>
          <img src={Car2} alt='car2' height='200' width='200' />
          {/* <p>Lorem ipsum dolor sit amet, </p> */}
        </div>
        <div className='row center col'>
          <img src={Car3} alt='car3' height='200' width='200' />
          {/* <p>Lorem ipsum dolor sit amet, </p> */}
        </div>
        <div className='row center col'>
          <img src={Car4} alt='car4' height='200' width='200' />
          {/* <p>Lorem ipsum dolor sit amet, </p> */}
        </div>
      </div>

      <div className='aboutus flex-center'>
        <h1 className='row center'>ABOUT US</h1>
        <div className='row center'>
          <div className='div1'>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              Our Company focuses on providing major transportation services
              with quality and security.
            </div>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              We have been working since 30 plus years in Transportation.
            </div>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              Our company have served various clients from Bollywood to
              Hollywood.We ensure to serve with best hospitality staff to our
              customers.
            </div>
          </div>
          <div className='div2'>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              Address: 349, Adarsh Nagar, New Link Road, Andheri West, Mumbai
              400102
            </div>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              Contact Number: 9820642909 (Sopan Khule) 9004369773 (Nilkanth
              Khule)
            </div>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              Email: poonamtransports1@gmail.com
            </div>
            <div
              style={{
                paddingBottom: '20px',
                lineHeight: '25px',
                wordSpacing: '2px',
              }}
            >
              Email: sopankhule48@gmail.com
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
